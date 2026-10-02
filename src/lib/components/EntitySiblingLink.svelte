<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import MediaImage from '#lib/components/MediaImage.svelte';
	import { entityIcons } from '#lib/icons';
	import { entityImage, entityImageLocal } from '#lib/media/placeholders';
	import type { EntityPortal } from '#services/site/types';

	let { portal }: { portal: EntityPortal } = $props();
</script>

<a
	href={portal.landingPath}
	class="card-lift group flex flex-col overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm sm:flex-row"
>
	<div class="relative aspect-[16/10] sm:aspect-auto sm:w-2/5 sm:min-h-[14rem]">
		<MediaImage
			src={entityImage(portal.id)}
			fallback={entityImageLocal(portal.id)}
			alt=""
			class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
			loading="lazy"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent sm:bg-gradient-to-r"></div>
	</div>
	<div class="flex flex-1 flex-col justify-center p-8 md:p-10">
		<div class="flex items-center gap-3">
			<span
				class="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-900"
			>
				<Icon icon={entityIcons[portal.id]} class="h-6 w-6" />
			</span>
			<p class="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">{portal.shortName}</p>
		</div>
		<h3 class="font-display mt-4 text-2xl font-bold text-stone-900">{portal.name}</h3>
		<p class="mt-3 text-base leading-relaxed text-stone-600">{portal.tagline}</p>
		<p class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 group-hover:underline">
			Explorer cette branche
			<Icon icon="material-symbols:arrow-forward" class="h-4 w-4" />
		</p>
	</div>
</a>
