import type { ContactFormPayload } from '#services/site/types';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function topicLabel(topic: string): string {
	const map: Record<string, string> = {
		cabinet: 'Cabinet — conseil / audit',
		ong: 'ONG — partenariat / mécénat',
		eetroov: 'Formations EETROOV',
		autre: 'Autre'
	};
	return map[topic] ?? topic;
}

function buildTextBody(data: ContactFormPayload): string {
	const lines = [
		'Nouveau message depuis le site ECOVERSION',
		'',
		`Nom : ${data.name}`,
		`E-mail : ${data.email}`,
		`Téléphone : ${data.phone || '—'}`,
		`Sujet : ${topicLabel(data.topic)}`,
		data.company ? `Organisation : ${data.company}` : '',
		'',
		'Message :',
		data.message
	].filter(Boolean);
	return lines.join('\n');
}

export function validateContactFields(data: ContactFormPayload): string | null {
	if (!data.name.trim() || data.name.trim().length < 2) {
		return 'Indiquez votre nom (2 caractères minimum).';
	}
	if (!EMAIL_RE.test(data.email.trim())) {
		return 'Indiquez une adresse e-mail valide.';
	}
	if (!data.topic.trim()) {
		return 'Choisissez un sujet.';
	}
	if (!data.message.trim() || data.message.trim().length < 10) {
		return 'Le message doit contenir au moins 10 caractères.';
	}
	return null;
}

async function sendViaWeb3Forms(data: ContactFormPayload, accessKey: string): Promise<void> {
	const res = await fetch('https://api.web3forms.com/submit', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
		body: JSON.stringify({
			access_key: accessKey,
			subject: `[Site ECOVERSION] ${topicLabel(data.topic)} — ${data.name}`,
			from_name: data.name,
			email: data.email,
			phone: data.phone,
			message: buildTextBody(data)
		})
	});

	const json = (await res.json()) as { success?: boolean; message?: string };
	if (!res.ok || !json.success) {
		throw new Error(json.message ?? 'Échec envoi Web3Forms');
	}
}

/** https://formsubmit.co — 1ʳᵉ soumission : confirmer le lien reçu sur la boîte destinataire. */
async function sendViaFormSubmit(data: ContactFormPayload, toEmail: string): Promise<void> {
	const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`;
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
		body: JSON.stringify({
			name: data.name,
			email: data.email,
			phone: data.phone || undefined,
			message: buildTextBody(data),
			_subject: `[Site ECOVERSION] ${topicLabel(data.topic)} — ${data.name}`,
			_template: 'table',
			_captcha: 'false'
		})
	});

	const json = (await res.json()) as { success?: string; message?: string };
	if (!res.ok || json.success !== 'true') {
		throw new Error(
			json.message ??
				'FormSubmit a refusé l’envoi. Vérifiez PUBLIC_CONTACT_TO_EMAIL ou activez le lien reçu sur la boîte mail.'
		);
	}
}

async function sendViaApi(data: ContactFormPayload): Promise<{ ok: boolean; error?: string }> {
	const res = await fetch('/api/contact', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
		body: JSON.stringify(data)
	});

	const raw = await res.text();
	let parsed: { ok?: boolean; error?: string } = {};
	try {
		parsed = JSON.parse(raw) as { ok?: boolean; error?: string };
	} catch {
		if (res.status === 404) {
			return {
				ok: false,
				error:
					'Envoi indisponible sur cette version du site (pas de serveur). Utilisez Web3Forms ou lancez le site avec pnpm dev.'
			};
		}
		return { ok: false, error: 'Réponse serveur invalide. Réessayez ou écrivez-nous par e-mail.' };
	}

	if (!res.ok || !parsed.ok) {
		return { ok: false, error: parsed.error ?? 'Envoi impossible.' };
	}
	return { ok: true };
}

/** Indique si un canal côté navigateur est configuré (SMTP seul = API, pas de bandeau d’aide). */
export function contactDeliveryConfigured(): boolean {
	return Boolean(
		import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ||
			import.meta.env.PUBLIC_CONTACT_TO_EMAIL?.trim()
	);
}

/** Web3Forms → FormSubmit (navigateur) → POST /api/contact (SMTP côté serveur). */
export async function submitContactMessage(data: ContactFormPayload): Promise<{ ok: true } | { ok: false; error: string }> {
	const validationError = validateContactFields(data);
	if (validationError) return { ok: false, error: validationError };

	const web3Key = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
	if (web3Key) {
		try {
			await sendViaWeb3Forms(data, web3Key);
			return { ok: true };
		} catch (e) {
			const msg = e instanceof Error ? e.message : 'Échec envoi Web3Forms';
			return { ok: false, error: msg };
		}
	}

	const api = await sendViaApi(data);
	if (api.ok) return { ok: true };

	const formSubmitTo = import.meta.env.PUBLIC_CONTACT_TO_EMAIL?.trim();
	if (formSubmitTo) {
		try {
			await sendViaFormSubmit(data, formSubmitTo);
			return { ok: true };
		} catch (e) {
			const msg = e instanceof Error ? e.message : 'Échec envoi e-mail';
			return { ok: false, error: msg };
		}
	}

	const serverMsg = api.error ?? 'Envoi impossible.';
	if (serverMsg.includes('indisponible')) {
		return {
			ok: false,
			error:
				'Envoi non configuré. Vérifiez SMTP_* ou PUBLIC_WEB3FORMS_ACCESS_KEY dans .env, puis redémarrez pnpm dev.'
		};
	}
	return { ok: false, error: serverMsg };
}
