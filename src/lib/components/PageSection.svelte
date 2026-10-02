<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		tone = 'white',
		border = 'none',
		narrow = false,
		id,
		heading,
		children
	}: {
		tone?: 'white' | 'muted' | 'dark';
		border?: 'none' | 'y';
		narrow?: boolean;
		id?: string;
		heading?: Snippet;
		children: Snippet;
	} = $props();

	const toneClass = $derived(
		tone === 'muted'
			? 'bg-stone-50/80'
			: tone === 'dark'
				? 'bg-emerald-950 text-white'
				: 'bg-white'
	);

	const borderClass = $derived(
		border === 'y' ? 'border-y border-stone-200' : ''
	);
</script>

<section {id} class="section-shell {toneClass} {borderClass}">
	<div class="page-container {narrow ? 'max-w-4xl' : ''}">
		{#if heading}
			{@render heading()}
		{/if}
		<div class={heading ? 'section-heading-gap' : ''}>
			{@render children()}
		</div>
	</div>
</section>
