<script lang="ts">
	import { contactDeliveryConfigured, submitContactMessage } from '#lib/contact/submit_contact_form';
	import type { ContactPageContent } from '#services/site/types';

	let { topics }: { topics: ContactPageContent['formTopics'] } = $props();

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let company = $state('');
	let topic = $state('');

	$effect.pre(() => {
		if (!topic && topics[0]) topic = topics[0].value;
	});

	let message = $state('');
	let botField = $state('');

	let loading = $state(false);
	let success = $state(false);
	let error = $state<string | null>(null);

	async function sendMessage() {
		if (loading) return;
		error = null;

		if (botField.trim()) {
			success = true;
			return;
		}

		const payload = {
			name: name.trim(),
			email: email.trim(),
			phone: phone.trim(),
			company: company.trim() || undefined,
			topic: topic.trim() || (topics[0]?.value ?? ''),
			message: message.trim()
		};

		loading = true;
		success = false;

		try {
			const result = await submitContactMessage(payload);
			if (!result.ok) {
				error = result.error;
				return;
			}
			success = true;
			name = '';
			email = '';
			phone = '';
			company = '';
			message = '';
			topic = topics[0]?.value ?? 'cabinet';
		} finally {
			loading = false;
		}
	}

	function onFormSubmit(e: SubmitEvent) {
		e.preventDefault();
		void sendMessage();
	}
</script>

<form class="contact-form space-y-6" onsubmit={onFormSubmit}>
	<div class="pointer-events-none absolute h-px w-px overflow-hidden opacity-0" aria-hidden="true">
		<label for="contact-bot-field">Ne pas remplir</label>
		<input id="contact-bot-field" name="bot-field" tabindex="-1" autocomplete="off" bind:value={botField} />
	</div>

	{#if success}
		<div class="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-900" role="status">
			<p class="font-semibold">Message envoyé</p>
			<p class="mt-1 leading-relaxed opacity-90">Merci — nous vous répondrons rapidement.</p>
		</div>
	{/if}

	{#if error}
		<div class="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-900" role="alert">
			{error}
		</div>
	{/if}

	<div class="grid gap-6 sm:grid-cols-2">
		<label class="field sm:col-span-2">
			<span class="field-label">Nom et prénom <span class="req">*</span></span>
			<input class="field-input" name="name" required minlength="2" bind:value={name} autocomplete="name" />
		</label>
		<label class="field">
			<span class="field-label">E-mail <span class="req">*</span></span>
			<input class="field-input" type="email" name="email" required bind:value={email} autocomplete="email" />
		</label>
		<label class="field">
			<span class="field-label">Téléphone <span class="font-normal text-stone-500">(facultatif)</span></span>
			<input class="field-input" type="tel" name="phone" bind:value={phone} autocomplete="tel" />
		</label>
		<label class="field sm:col-span-2">
			<span class="field-label">Sujet <span class="req">*</span></span>
			<select class="field-input" name="topic" required bind:value={topic}>
				{#each topics as t}
					<option value={t.value}>{t.label}</option>
				{/each}
			</select>
		</label>
		<label class="field sm:col-span-2">
			<span class="field-label">Organisation</span>
			<input class="field-input" name="company" bind:value={company} autocomplete="organization" />
		</label>
		<label class="field sm:col-span-2">
			<span class="field-label">Message <span class="req">*</span></span>
			<textarea
				class="field-input min-h-[11rem] resize-y"
				name="message"
				required
				minlength="10"
				bind:value={message}
				placeholder="Décrivez votre besoin, vos délais, le pôle concerné…"
			></textarea>
		</label>
	</div>

	<button
		type="button"
		class="btn-primary relative z-10 w-full cursor-pointer py-4 text-base uppercase tracking-wide disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-12"
		disabled={loading}
		onclick={() => void sendMessage()}
	>
		{#if loading}
			Envoi en cours…
		{:else}
			Envoyer
		{/if}
	</button>
</form>
