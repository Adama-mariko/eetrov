<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import MediaImage from '#lib/components/MediaImage.svelte';
	import { themeFor } from '#lib/media/entity_theme';
	import type { EntityId } from '#services/site/types';

	let {
		eyebrow,
		title,
		subtitle,
		highlight,
		imageUrl,
		imageFallback,
		primary,
		secondary,
		showBack = true,
		entityThemeId
	}: {
		eyebrow: string;
		title: string;
		subtitle: string;
		highlight?: string;
		imageUrl: string;
		imageFallback?: string;
		primary: { label: string; href: string; external?: boolean };
		secondary?: { label: string; href: string };
		showBack?: boolean;
		/** Thème visuel (cabinet / ong / eetroov). */
		entityThemeId?: EntityId;
	} = $props();

	const theme = $derived(entityThemeId ? themeFor(entityThemeId) : null);
	const gradient = $derived(
		theme?.heroGradient ?? 'from-emerald-950/90 via-emerald-950/65 to-emerald-900/25'
	);
	const eyebrowClass = $derived(theme?.eyebrowClass ?? '!text-emerald-200/90');
</script>

<section class="relative min-h-[75vh] overflow-hidden lg:min-h-[80vh]">
	<MediaImage
		src={imageUrl}
		fallback={imageFallback}
		alt=""
		class="media-hero__ken absolute inset-0 h-full w-full object-cover"
		loading="eager"
		fetchpriority="high"
	/>
	<div class="absolute inset-0 bg-gradient-to-r {gradient}"></div>
	<div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

	<div
		class="page-container relative flex min-h-[75vh] flex-col justify-end pb-16 pt-32 lg:min-h-[80vh] lg:justify-center lg:pb-12"
	>
		{#if showBack}
			<a
				href="/"
				class="mb-8 inline-flex w-fit items-center gap-1 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm hover:bg-white/20"
			>
				<Icon icon="material-symbols:arrow-back" class="h-4 w-4" />
				Accueil
			</a>
		{/if}
		<p class="eyebrow {eyebrowClass}">{eyebrow}</p>
		<h1 class="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
			{title}
		</h1>
		<p class="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">{subtitle}</p>
		{#if highlight}
			<p class="mt-4 text-lg font-medium text-lime-200 md:text-xl">{highlight}</p>
		{/if}
		<div class="mt-10 flex flex-wrap gap-4">
			<a
				href={primary.href}
				target={primary.external ? '_blank' : undefined}
				rel={primary.external ? 'noopener noreferrer' : undefined}
				class="btn-primary inline-flex gap-2 px-8 py-3.5"
			>
				{primary.label}
				{#if primary.external}
					<Icon icon="material-symbols:open-in-new" class="h-4 w-4" />
				{/if}
			</a>
			{#if secondary}
				<a href={secondary.href} class="btn-ghost-light px-8 py-3.5">{secondary.label}</a>
			{/if}
		</div>
	</div>
</section>
