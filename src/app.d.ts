// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
interface ImportMetaEnv {
	readonly PUBLIC_JEKO_API_URL?: string;
	readonly PUBLIC_JEKO_LINK_DON_ONG?: string;
	readonly PUBLIC_JEKO_LINK_INSCRIPTION_EETROOV?: string;
	readonly PUBLIC_JEKO_LINK_ABONNEMENT_CABINET?: string;
	readonly PUBLIC_WEB3FORMS_ACCESS_KEY?: string;
	readonly PUBLIC_CONTACT_TO_EMAIL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
