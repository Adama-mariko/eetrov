<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import MediaImage from '#lib/components/MediaImage.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { media, mediaLocal } from '#lib/media/placeholders';
	import type { HomePageContent } from '#services/site/types';

	let { why }: { why: HomePageContent['why'] } = $props();
</script>

<section class="section-shell bg-white">
	<div class="page-container">
		<Reveal variant="up">
			<p class="eyebrow text-center">{why.eyebrow}</p>
			<SectionHeading title={why.title} subtitle={why.body} class="mt-4 max-w-4xl" />
			<div class="mt-10 text-center">
				<a href={why.link.href} class="text-base font-semibold text-emerald-800 hover:underline">
					{why.link.label} →
				</a>
			</div>
		</Reveal>

		<div class="section-heading-gap grid items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24">
			<div class="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-emerald-900/10">
				<MediaImage
					src={media.why}
					fallback={mediaLocal.why}
					alt="Équipe ECOVERSION en accompagnement"
					class="aspect-[4/5] w-full object-cover lg:aspect-[5/6]"
					loading="lazy"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-emerald-950/35 via-transparent to-transparent"></div>
			</div>
			<div class="grid gap-6 sm:grid-cols-2 sm:gap-8">
				{#each why.features as feature, i}
					<Reveal delay={i * 80} variant="up">
						<div class="sector-card h-full !p-7 md:!p-8">
							<Icon icon={feature.icon} class="h-8 w-8 text-emerald-700" />
							<h3 class="mt-5 text-lg font-bold text-stone-900">{feature.title}</h3>
							<p class="mt-3 text-base leading-relaxed text-stone-600">{feature.description}</p>
						</div>
					</Reveal>
				{/each}
			</div>
		</div>
	</div>
</section>
