<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import MediaImage from '#lib/components/MediaImage.svelte';
	import { media, serviceImageLocal } from '#lib/media/placeholders';
	import type { ServiceOffer } from '#services/site/types';

	let { offer }: { offer: ServiceOffer } = $props();

	const image = $derived(media.services[offer.imageIndex] ?? media.services[0]);
	const external = $derived(offer.href.startsWith('http'));
	const contain = $derived(offer.imageFit === 'contain');
</script>

<a
	href={offer.href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="card-lift group block h-full overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-sm"
>
	<div
		class="relative overflow-hidden sm:aspect-[16/10]
			{contain ? 'flex aspect-[16/12] items-center justify-center bg-stone-50 p-6 md:p-8' : 'aspect-[16/11]'}"
	>
		<MediaImage
			src={image}
			fallback={serviceImageLocal(offer.imageIndex)}
			alt=""
			class={contain
				? 'max-h-36 w-auto max-w-full object-contain md:max-h-44'
				: 'h-full w-full object-cover transition duration-700 group-hover:scale-105'}
			loading="lazy"
		/>
		{#if !contain}
			<div class="absolute inset-0 bg-gradient-to-t from-stone-900/75 via-stone-900/15 to-transparent"></div>
			<p class="absolute bottom-5 left-6 text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
				{offer.linkLabel}
			</p>
		{:else}
			<p
				class="absolute bottom-4 left-0 right-0 text-center text-xs font-bold uppercase tracking-[0.2em] text-emerald-800"
			>
				{offer.linkLabel}
			</p>
		{/if}
	</div>
	<div class="space-y-4 p-8 md:p-9">
		<h3 class="font-display text-xl font-bold text-stone-900 md:text-2xl">{offer.title}</h3>
		<p class="text-base leading-relaxed text-stone-600">{offer.description}</p>
		<p
			class="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-emerald-800 group-hover:underline"
		>
			Découvrir
			<Icon icon="material-symbols:arrow-forward" class="h-4 w-4 transition group-hover:translate-x-0.5" />
		</p>
	</div>
</a>
