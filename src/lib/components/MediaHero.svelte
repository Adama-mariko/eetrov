<script lang="ts">
	import MediaImage from '#lib/components/MediaImage.svelte';
	import { media } from '#lib/media/placeholders';

	let {
		eyebrow,
		title,
		subtitle,
		tagline,
		primary,
		secondary
	}: {
		eyebrow: string;
		title: string;
		subtitle: string;
		tagline?: string;
		primary: { label: string; href: string };
		secondary: { label: string; href: string };
	} = $props();
</script>

<section class="media-hero relative min-h-[92vh] overflow-hidden text-white">
	<div class="media-hero__bg absolute inset-0">
		<MediaImage
			src={media.hero.poster}
			fallback={media.hero.posterLocal}
			alt=""
			class="absolute inset-0 h-full w-full object-cover"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-emerald-950/85 via-emerald-950/55 to-emerald-900/25"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-emerald-950/20"></div>
	</div>

	<div
		class="page-container relative flex min-h-[92vh] flex-col justify-end pb-20 pt-32 lg:justify-center lg:pb-16 lg:pt-28"
	>
		<p class="eyebrow hero-stagger-1 !text-emerald-200/90">{eyebrow}</p>
		<h1
			class="font-display hero-stagger-2 mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-[3.35rem]"
		>
			{title}
		</h1>
		<p
			class="hero-stagger-3 mt-8 max-w-2xl text-lg leading-relaxed text-emerald-50/95 md:text-xl md:leading-relaxed"
		>
			{subtitle}
		</p>
		{#if tagline}
			<p class="hero-stagger-4 mt-5 text-xl font-semibold text-lime-200 md:text-2xl">{tagline}</p>
		{/if}
		<div class="hero-stagger-5 mt-12 flex flex-wrap gap-4">
			<a href={primary.href} class="btn-primary px-8 py-3.5 text-base">{primary.label}</a>
			<a href={secondary.href} class="btn-ghost-light px-8 py-3.5 text-base">{secondary.label}</a>
		</div>
	</div>
</section>
