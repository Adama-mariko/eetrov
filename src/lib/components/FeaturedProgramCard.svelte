<script lang="ts">
	import MediaImage from '#lib/components/MediaImage.svelte';
	import { media, programImageLocal } from '#lib/media/placeholders';
	import type { FeaturedProgram } from '#services/site/types';

	let { program }: { program: FeaturedProgram } = $props();

	const image = $derived(media.programs[program.imageIndex] ?? media.programs[0]);
</script>

<article
	class="card-lift flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm"
>
	<div class="relative aspect-[16/11] overflow-hidden">
		<MediaImage
			src={image}
			fallback={programImageLocal(program.imageIndex)}
			alt=""
			class="h-full w-full object-cover"
			loading="lazy"
		/>
		<span
			class="absolute left-6 top-6 rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-900 shadow"
		>
			{program.badge}
		</span>
	</div>
	<div class="flex flex-1 flex-col space-y-4 p-8 md:p-10">
		<p class="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700">{program.meta}</p>
		<h3 class="font-display text-2xl font-bold text-stone-900">{program.title}</h3>
		<p class="flex-1 text-base leading-relaxed text-stone-600">{program.detail}</p>
		<a href={program.href} class="btn-outline mt-6 w-full py-3.5 text-center"> En savoir plus </a>
	</div>
</article>
