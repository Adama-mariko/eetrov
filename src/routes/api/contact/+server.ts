import { json, type RequestHandler } from '@sveltejs/kit';
import {
	CONTACT_TO_EMAIL,
	SMTP_FROM,
	SMTP_HOST,
	SMTP_PASS,
	SMTP_PORT,
	SMTP_SECURE,
	SMTP_USER
} from '$app/env/private';
import { PUBLIC_WEB3FORMS_ACCESS_KEY } from '$app/env/public';
import {
	ContactEmailNotConfiguredError,
	sendContactEmail,
	type ContactMailConfig
} from '#services/contact/send_contact_email_service';
import type { ContactFormPayload } from '#services/site/types';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_TO = 'contact@ecoversiongroup.com';

function normalizeAppPassword(raw: string | undefined): string | undefined {
	if (!raw) return undefined;
	return raw.replace(/\s/g, '') || undefined;
}

function contactMailConfigFromEnv(): ContactMailConfig {
	const toEmail = CONTACT_TO_EMAIL?.trim() || DEFAULT_TO;
	const host = SMTP_HOST?.trim();
	const user = SMTP_USER?.trim();
	const pass = normalizeAppPassword(SMTP_PASS);

	if (host && user && pass) {
		const port = Number(SMTP_PORT ?? 587);
		return {
			toEmail,
			smtp: {
				host,
				port,
				secure: SMTP_SECURE === 'true' || port === 465,
				user,
				pass,
				from: SMTP_FROM?.trim() || user
			}
		};
	}

	return {
		toEmail,
		web3formsAccessKey: PUBLIC_WEB3FORMS_ACCESS_KEY?.trim()
	};
}

function parseBody(body: unknown): ContactFormPayload | null {
	if (!body || typeof body !== 'object') return null;
	const o = body as Record<string, unknown>;
	const name = String(o.name ?? '').trim();
	const email = String(o.email ?? '').trim();
	const phone = String(o.phone ?? '').trim();
	const topic = String(o.topic ?? '').trim();
	const message = String(o.message ?? '').trim();
	const company = String(o.company ?? '').trim();

	if (!name || name.length < 2) return null;
	if (!EMAIL_RE.test(email)) return null;
	if (!topic) return null;
	if (!message || message.length < 10) return null;

	return {
		name,
		email,
		phone,
		topic,
		message,
		company: company || undefined
	};
}

function smtpErrorMessage(e: unknown): string | null {
	if (!e || typeof e !== 'object') return null;
	const err = e as { code?: string; responseCode?: number };
	if (err.code === 'EAUTH' || err.responseCode === 535) {
		return 'Gmail a refusé la connexion. Vérifiez SMTP_USER et SMTP_PASS (mot de passe d’application) dans .env, puis redémarrez pnpm dev.';
	}
	return null;
}

export const POST: RequestHandler = async ({ request }) => {
	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return json({ ok: false, error: 'Corps de requête invalide.' }, { status: 400 });
	}

	const payload = parseBody(body);
	if (!payload) {
		return json(
			{ ok: false, error: 'Vérifiez nom, e-mail, sujet et message (10 caractères minimum).' },
			{ status: 400 }
		);
	}

	try {
		await sendContactEmail(payload, contactMailConfigFromEnv());
		return json({ ok: true });
	} catch (e) {
		if (e instanceof ContactEmailNotConfiguredError) {
			return json(
				{
					ok: false,
					error:
						'SMTP non configuré. Vérifiez SMTP_* dans .env et le fichier src/env.ts, puis redémarrez pnpm dev.'
				},
				{ status: 503 }
			);
		}
		console.error('[contact]', e);
		const smtpMsg = smtpErrorMessage(e);
		return json(
			{ ok: false, error: smtpMsg ?? 'Impossible d’envoyer le message. Réessayez plus tard.' },
			{ status: 500 }
		);
	}
};
