import nodemailer from 'nodemailer';
import type { ContactFormPayload } from '#services/site/types';

export class ContactEmailNotConfiguredError extends Error {
	constructor() {
		super('Envoi e-mail non configuré (SMTP ou Web3Forms).');
		this.name = 'ContactEmailNotConfiguredError';
	}
}

export type ContactMailConfig = {
	toEmail: string;
	smtp?: {
		host: string;
		port: number;
		secure: boolean;
		user: string;
		pass: string;
		from: string;
	};
	web3formsAccessKey?: string;
};

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

async function sendViaSmtp(data: ContactFormPayload, config: ContactMailConfig): Promise<void> {
	const smtp = config.smtp;
	if (!smtp) throw new ContactEmailNotConfiguredError();

	const transporter = nodemailer.createTransport({
		host: smtp.host,
		port: smtp.port,
		secure: smtp.secure,
		auth: { user: smtp.user, pass: smtp.pass }
	});

	await transporter.sendMail({
		from: smtp.from,
		to: config.toEmail,
		replyTo: data.email,
		subject: `[Site ECOVERSION] ${topicLabel(data.topic)} — ${data.name}`,
		text: buildTextBody(data)
	});
}

async function sendViaWeb3Forms(data: ContactFormPayload, config: ContactMailConfig): Promise<void> {
	const accessKey = config.web3formsAccessKey;
	if (!accessKey) throw new ContactEmailNotConfiguredError();

	const res = await fetch('https://api.web3forms.com/submit', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
		body: JSON.stringify({
			access_key: accessKey,
			subject: `[Site ECOVERSION] ${topicLabel(data.topic)} — ${data.name}`,
			from_name: data.name,
			email: data.email,
			phone: data.phone,
			message: buildTextBody(data),
			to: config.toEmail
		})
	});

	const json = (await res.json()) as { success?: boolean; message?: string };
	if (!res.ok || !json.success) {
		throw new Error(json.message ?? 'Échec envoi Web3Forms');
	}
}

export async function sendContactEmail(data: ContactFormPayload, config: ContactMailConfig): Promise<void> {
	if (config.smtp) {
		await sendViaSmtp(data, config);
		return;
	}
	if (config.web3formsAccessKey) {
		await sendViaWeb3Forms(data, config);
		return;
	}
	throw new ContactEmailNotConfiguredError();
}
