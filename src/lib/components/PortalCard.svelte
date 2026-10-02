<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import type { EntityPortal } from '#services/site/types';

	let { entity, index = 0 }: { entity: EntityPortal; index?: number } = $props();
</script>

<Reveal delay={index * 100} variant="up">
	<article
		class="card-lift card-shine group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-md shadow-stone-900/5"
	>
		<div
			class="relative bg-gradient-to-br {entity.accentClass} px-6 py-8 text-white transition duration-500 group-hover:brightness-110"
		>
			<div
				class="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				style="background: radial-gradient(circle at 80% 20%, rgb(255 255 255 / 0.2), transparent 55%);"
			></div>
			<p class="relative text-xs font-semibold uppercase tracking-widest text-white/80">
				{entity.shortName}
			</p>
			<h3 class="font-display relative mt-2 text-2xl font-bold">{entity.name}</h3>
			<p class="relative mt-2 text-sm text-white/90">{entity.tagline}</p>
		</div>
		<div class="flex flex-1 flex-col p-6">
			<p class="text-sm leading-relaxed text-stone-600">{entity.description}</p>
			<ul class="mt-4 space-y-2 text-sm text-stone-700">
				{#each entity.highlights.slice(0, 4) as item, i}
					<li
						class="flex gap-2 transition duration-300"
						style="transition-delay: {i * 40}ms"
					>
						<Icon icon="material-symbols:check-circle-outline" class="h-4 w-4 shrink-0 text-emerald-600" />
						<span>{item}</span>
					</li>
				{/each}
			</ul>
			<div class="mt-auto space-y-3 pt-6">
				<a
					href={entity.websiteUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn-primary block w-full py-3 text-center"
				>
					<span class="inline-flex items-center justify-center gap-1.5">
						{entity.ctaLabel}
						<Icon icon="material-symbols:arrow-forward" class="h-4 w-4" />
					</span>
				</a>
				<a
					href={entity.landingPath}
					class="block text-center text-xs font-medium text-stone-500 transition hover:text-emerald-800"
				>
					Lire la présentation sur ce site
				</a>
			</div>
		</div>
	</article>
</Reveal>
