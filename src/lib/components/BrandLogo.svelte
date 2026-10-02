<script lang="ts">
	let {
		variant = 'header',
		class: className = ''
	}: {
		variant?: 'header' | 'footer' | 'contact';
		class?: string;
	} = $props();

	const frame = $derived(
		{
			header:
				'flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-md ring-1 ring-white/25',
			footer:
				'mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-sm ring-1 ring-stone-700/40',
			contact:
				'mb-6 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-stone-200 bg-white p-1.5 shadow-sm'
		}[variant]
	);
</script>

<div class="{frame} {className}">
	<img
		src="/brand/ecoversion-logo.jpg"
		alt="ECOVERSION"
		class="h-full w-full object-contain"
		width="88"
		height="56"
		decoding="async"
	/>
</div>
