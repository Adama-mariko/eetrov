import type { CheckoutPayload, CheckoutResult, JekoAction } from './types';

const linkEnvKeys: Record<JekoAction, string> = {
	'don-ong': 'PUBLIC_JEKO_LINK_DON_ONG',
	'inscription-eetroov': 'PUBLIC_JEKO_LINK_INSCRIPTION_EETROOV',
	'abonnement-cabinet': 'PUBLIC_JEKO_LINK_ABONNEMENT_CABINET'
};

function publicEnv(key: string): string | undefined {
	const value = import.meta.env[key];
	if (typeof value !== 'string') return undefined;
	const trimmed = value.trim();
	return trimmed.length ? trimmed : undefined;
}

function directLink(action: JekoAction): string | undefined {
	return publicEnv(linkEnvKeys[action]);
}

/**
 * Démarre un checkout Jeko : lien public direct (env) ou appel API backend.
 */
export async function startCheckout(payload: CheckoutPayload): Promise<CheckoutResult> {
	const direct = directLink(payload.action);
	if (direct) {
		return { ok: true, redirectUrl: direct };
	}

	const apiBase = publicEnv('PUBLIC_JEKO_API_URL');
	if (!apiBase) {
		return {
			ok: false,
			message:
				'Paiement non configuré : définissez PUBLIC_JEKO_LINK_* ou PUBLIC_JEKO_API_URL dans .env'
		};
	}

	const base = apiBase.replace(/\/$/, '');

	try {
		const res = await fetch(`${base}/checkout`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		});

		if (!res.ok) {
			const text = await res.text();
			return { ok: false, message: text || `Erreur ${res.status}` };
		}

		const data = (await res.json()) as { redirectUrl?: string; url?: string };
		const redirectUrl = data.redirectUrl ?? data.url;
		if (!redirectUrl) {
			return { ok: false, message: 'Réponse checkout sans URL de redirection' };
		}
		return { ok: true, redirectUrl };
	} catch (e) {
		const message = e instanceof Error ? e.message : 'Réseau indisponible';
		return { ok: false, message };
	}
}
