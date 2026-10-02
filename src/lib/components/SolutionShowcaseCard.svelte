<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import MediaImage from '#lib/components/MediaImage.svelte';
	import type { EntityPortal } from '#services/site/types';
	import { entityIcons } from '#lib/icons';
	import { entityImage, entityImageLocal } from '#lib/media/placeholders';

	let { entity }: { entity: EntityPortal; index?: number } = $props();

	const bullets = $derived(entity.highlights.slice(0, 3));
</script>

<article
	class="solution-card card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm"
>
	<div
		class="relative flex aspect-[16/10] max-h-[11.5rem] flex-col justify-end overflow-hidden p-5 text-white sm:max-h-[12.5rem] md:p-6"
	>
		<MediaImage
			src={entityImage(entity.id)}
			fallback={entityImageLocal(entity.id)}
			alt=""
			class="absolute inset-0 h-full w-full object-cover"
			loading="lazy"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/45 to-emerald-900/20"></div>
		<div
			class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md md:right-5 md:top-5"
		>
			<Icon icon={entityIcons[entity.id]} class="h-6 w-6" />
		</div>
		<div class="relative max-w-md">
			<p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200/90 sm:text-xs">
				{entity.shortName}
			</p>
			<h3 class="font-display mt-1 text-xl font-bold leading-tight sm:text-2xl">{entity.name}</h3>
			<p class="mt-1.5 line-clamp-2 text-sm leading-snug text-white/90">{entity.tagline}</p>
		</div>
	</div>
	<div class="flex flex-1 flex-col p-5 md:p-6">
		<p class="line-clamp-3 text-sm leading-relaxed text-stone-600">{entity.description}</p>
		<ul class="mt-4 space-y-2 border-t border-stone-100 pt-4 text-sm text-stone-700">
			{#each bullets as line}
				<li class="flex gap-2">
					<Icon
						icon="material-symbols:check-circle-outline"
						class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
					/>
					<span class="line-clamp-2 leading-snug">{line}</span>
				</li>
			{/each}
		</ul>
		<div class="mt-auto flex flex-col gap-2 pt-5 sm:flex-row sm:pt-6">
			<a
				href={entity.websiteUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="btn-primary flex-1 justify-center px-3 py-2.5 text-center text-xs leading-tight sm:text-sm"
			>
				{entity.ctaLabel}
			</a>
			<a
				href={entity.landingPath}
				class="btn-outline flex-1 justify-center px-3 py-2.5 text-center text-xs sm:text-sm"
			>
				En savoir plus
			</a>
		</div>
	</div>
</article>
