<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';

	let {
		title,
		subtitle,
		primary,
		secondary,
		dark = false
	}: {
		title: string;
		subtitle?: string;
		primary: { label: string; href: string; external?: boolean };
		secondary?: { label: string; href: string; external?: boolean };
		dark?: boolean;
	} = $props();
</script>

<section
	class="section-shell {dark
		? 'bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 text-white'
		: 'bg-emerald-50/80'}"
>
	<div class="page-container">
		<Reveal variant="up">
			<div
				class="flex flex-col items-start justify-between gap-10 rounded-[2rem] {dark
					? 'border border-white/10 bg-white/5 p-10 backdrop-blur-sm md:p-14'
					: 'border border-emerald-100 bg-white p-10 shadow-lg shadow-emerald-900/5 md:p-14'} lg:flex-row lg:items-center"
			>
				<div class="max-w-xl">
					<h2
						class="font-display text-2xl font-bold md:text-3xl {dark ? 'text-white' : 'text-stone-900'}"
					>
						{title}
					</h2>
					{#if subtitle}
						<p class="mt-3 text-sm leading-relaxed md:text-base {dark ? 'text-emerald-100/90' : 'text-stone-600'}">
							{subtitle}
						</p>
					{/if}
				</div>
				<div class="flex w-full flex-wrap gap-3 lg:w-auto lg:justify-end">
					<a
						href={primary.href}
						target={primary.external ? '_blank' : undefined}
						rel={primary.external ? 'noopener noreferrer' : undefined}
						class="btn-primary"
					>
						{primary.label}
					</a>
					{#if secondary}
						<a
							href={secondary.href}
							target={secondary.external ? '_blank' : undefined}
							rel={secondary.external ? 'noopener noreferrer' : undefined}
							class={dark ? 'btn-ghost-light' : 'btn-outline'}
						>
							{secondary.label}
						</a>
					{/if}
				</div>
			</div>
		</Reveal>
	</div>
</section>
