<script lang="ts">
	import { startCheckout } from '#lib/jeko/checkout';
	import type { JekoAction } from '#lib/jeko/types';

	let {
		action,
		label,
		variant = 'primary',
		amountCents,
		class: className = ''
	}: {
		action: JekoAction;
		label: string;
		variant?: 'primary' | 'secondary' | 'outline';
		amountCents?: number;
		class?: string;
	} = $props();

	let loading = $state(false);
	let error = $state<string | null>(null);

	const base =
		'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60';
	const variants = {
		primary: 'btn-primary focus-visible:outline-emerald-700',
		secondary: 'bg-stone-900 text-white shadow-lg hover:bg-stone-800 focus-visible:outline-stone-900',
		outline:
			'border-2 border-emerald-700 bg-white text-emerald-800 hover:bg-emerald-50 focus-visible:outline-emerald-700'
	};

	async function pay() {
		error = null;
		loading = true;
		const result = await startCheckout({ action, amountCents, label });
		loading = false;
		if (result.ok) {
			window.location.href = result.redirectUrl;
		} else {
			error =
				'Le paiement en ligne sera disponible très prochainement. En attendant, contactez-nous — nous vous accompagnons.';
		}
	}
</script>

<div class={className}>
	<button type="button" class="{base} {variants[variant]} w-full" disabled={loading} onclick={pay}>
		{loading ? 'Un instant…' : label}
	</button>
	{#if error}
		<p class="mt-2 text-sm text-amber-900" role="status">{error}</p>
	{/if}
</div>
