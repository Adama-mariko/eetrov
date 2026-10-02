import { defineEnvVars } from '@sveltejs/kit/env';

/** Variables lues depuis `.env` — requises pour SMTP Gmail côté serveur (SvelteKit 3). */
export const variables = defineEnvVars({
	CONTACT_TO_EMAIL: {
		schema: (value) => value
	},
	SMTP_HOST: {
		schema: (value) => value
	},
	SMTP_PORT: {
		schema: (value) => value
	},
	SMTP_SECURE: {
		schema: (value) => value
	},
	SMTP_USER: {
		schema: (value) => value
	},
	SMTP_PASS: {
		schema: (value) => value
	},
	SMTP_FROM: {
		schema: (value) => value
	},
	PUBLIC_WEB3FORMS_ACCESS_KEY: {
		public: true,
		schema: (value) => value
	}
});
