<script lang="ts">
	let {
		title,
		subtitle,
		align = 'center',
		class: className = ''
	}: {
		title: string;
		subtitle?: string;
		align?: 'left' | 'center';
		class?: string;
	} = $props();
</script>

<div class="{align === 'center' ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'} {className}">
	<h2 class="font-display text-3xl font-bold tracking-tight text-stone-900 md:text-4xl lg:text-[2.75rem] lg:leading-tight">
		{title}
	</h2>
	{#if subtitle}
		<p class="mt-6 text-lg leading-relaxed text-stone-600 md:text-xl md:leading-relaxed">{subtitle}</p>
	{/if}
</div>
