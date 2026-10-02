/** Actions de paiement branchées sur l’API Jeko (via votre backend). */
export type JekoAction = 'don-ong' | 'inscription-eetroov' | 'abonnement-cabinet';

export type CheckoutPayload = {
	action: JekoAction;
	amountCents?: number;
	label?: string;
	metadata?: Record<string, string>;
};

export type CheckoutResult =
	| { ok: true; redirectUrl: string }
	| { ok: false; message: string };
