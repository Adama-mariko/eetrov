<script lang="ts">
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import EntitySiblingLink from '#lib/components/EntitySiblingLink.svelte';
	import FaqAccordion from '#lib/components/FaqAccordion.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import MediaImage from '#lib/components/MediaImage.svelte';
	import MediaSubHero from '#lib/components/MediaSubHero.svelte';
	import OnlinePayButton from '#lib/components/OnlinePayButton.svelte';
	import PageSection from '#lib/components/PageSection.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { themeFor } from '#lib/media/entity_theme';
	import {
		entityImage,
		entityImageLocal,
		media,
		programImageLocal
	} from '#lib/media/placeholders';
	import type { EntityPageContent, EntityPortal } from '#services/site/types';
	import type { JekoAction } from '#lib/jeko/types';

	let {
		content,
		entities,
		payAction
	}: {
		content: EntityPageContent;
		entities: EntityPortal[];
		payAction?: JekoAction;
	} = $props();

	const entity = $derived(content.entity);
	const pres = $derived(content.presentation);
	const theme = $derived(themeFor(entity.id));
	const siblings = $derived(entities.filter((e) => e.id !== entity.id));

	function sectionTone(index: number): 'white' | 'muted' {
		return index % 2 === 0 ? 'white' : 'muted';
	}

	function itemIcon(index: number): string {
		return theme.itemIcons[index] ?? theme.itemIcons[0] ?? 'material-symbols:check-circle-outline';
	}
</script>

<div class="entity-page entity-page--{entity.id}">
	<nav
		class="border-b border-stone-200 bg-white py-3"
		aria-label="Fil d'Ariane"
	>
		<ol class="page-container flex flex-wrap items-center gap-2 text-sm text-stone-500">
			<li>
				<a href="/" class="font-medium text-emerald-800 hover:underline">Accueil</a>
			</li>
			<li aria-hidden="true" class="text-stone-300">/</li>
			<li class="font-semibold text-stone-900" aria-current="page">{entity.shortName}</li>
		</ol>
	</nav>

	<MediaSubHero
		eyebrow={pres.heroEyebrow}
		title={entity.name}
		subtitle={entity.description}
		highlight={entity.tagline}
		imageUrl={entityImage(entity.id)}
		imageFallback={entityImageLocal(entity.id)}
		entityThemeId={entity.id}
		primary={{ label: entity.ctaLabel, href: entity.websiteUrl, external: true }}
		secondary={{ label: entity.ctaSecondaryLabel, href: '/contact' }}
		showBack={false}
	/>

	{#if pres.stats?.length}
		<section class="border-b border-stone-200 bg-stone-50 py-24 md:py-32 lg:py-36">
			<div class="page-container grid gap-16 md:grid-cols-3 md:gap-12 lg:gap-20">
				{#each pres.stats as stat, i}
					<Reveal delay={i * 100} variant="up">
						<div class="stat-jeko">
							<p class="stat-jeko-value {theme.accentText}">{stat.value}</p>
							<p class="stat-jeko-label">{stat.label}</p>
							<p class="stat-jeko-detail">{stat.detail}</p>
						</div>
					</Reveal>
				{/each}
			</div>
		</section>
	{/if}

	{#each content.sections as section, si}
		<PageSection tone={sectionTone(si)} border={si === 0 && !pres.stats?.length ? 'none' : 'y'}>
			{#snippet heading()}
				<Reveal variant="up">
					<p class="eyebrow text-center {theme.accentText}">{section.eyebrow ?? entity.shortName}</p>
					<SectionHeading title={section.title} subtitle={section.paragraphs[0]} class="max-w-4xl" />
				</Reveal>
			{/snippet}
			{#snippet children()}
				{#if section.paragraphs.length > 1}
					<div class="mx-auto max-w-3xl space-y-6 text-center">
						{#each section.paragraphs.slice(1) as p}
							<Reveal variant="fade">
								<p class="text-base leading-relaxed text-stone-600 md:text-lg md:leading-relaxed">{p}</p>
							</Reveal>
						{/each}
					</div>
				{/if}

				{#if section.items?.length}
					<div
						class="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12 {section.paragraphs.length > 1
							? 'mt-16 md:mt-20'
							: ''}"
					>
						{#each section.items as item, ii}
							<Reveal delay={ii * 70} variant="up">
								<div
									class="sector-card h-full border-2 !p-8 md:!p-10 {theme.accentBorder} {theme.sectorHover}"
								>
									<Icon icon={itemIcon(ii)} class="h-9 w-9 {theme.accentText}" />
									<p class="mt-5 text-base leading-relaxed text-stone-700 md:text-lg">{item}</p>
								</div>
							</Reveal>
						{/each}
					</div>
				{/if}
			{/snippet}
		</PageSection>
	{/each}

	<section
		class="section-shell border-y border-white/10 bg-gradient-to-br {entity.accentClass} text-white"
	>
		<div class="page-container mx-auto max-w-4xl text-center">
			<Reveal variant="up">
				<p class="text-xs font-bold uppercase tracking-[0.25em] text-white/75">Mission</p>
				<h2 class="font-display mt-4 text-3xl font-bold md:text-4xl">{pres.mission.title}</h2>
				<p class="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">{pres.mission.subtitle}</p>
			</Reveal>
			<div class="mt-14 space-y-10 text-left md:mt-16">
				<Reveal delay={80} variant="up">
					<div class="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm md:p-10">
						<p class="text-xs font-bold uppercase tracking-[0.2em] text-lime-200/90">Notre mission</p>
						<p class="mt-4 text-lg leading-relaxed md:text-xl">{entity.mission}</p>
					</div>
				</Reveal>
				<Reveal delay={120} variant="up">
					<div class="rounded-2xl border border-white/20 bg-white/5 p-8 md:p-10">
						<p class="text-xs font-bold uppercase tracking-[0.2em] text-lime-200/90">Public cible</p>
						<p class="mt-4 text-lg leading-relaxed text-white/95 md:text-xl">{entity.audience}</p>
					</div>
				</Reveal>
			</div>
		</div>
	</section>

	{#if payAction}
		<PageSection tone="white">
			{#snippet heading()}
				<Reveal variant="up">
					<p class="eyebrow text-center {theme.accentText}">Action</p>
					<SectionHeading title={pres.action.title} subtitle={pres.action.subtitle} />
				</Reveal>
			{/snippet}
			{#snippet children()}
				<div class="mx-auto flex max-w-md flex-col gap-4">
					<OnlinePayButton action={payAction} label={entity.ctaSecondaryLabel} class="w-full" />
					<a href="/contact" class="btn-outline w-full py-3.5 text-center">Demander un rappel</a>
				</div>
			{/snippet}
		</PageSection>
	{/if}

	{#if content.programs?.length && pres.programs}
		{@const programsIntro = pres.programs}
		<PageSection tone="muted" border="y">
			{#snippet heading()}
				<Reveal variant="up">
					<p class="eyebrow text-center {theme.accentText}">Parcours</p>
					<SectionHeading title={programsIntro.title} subtitle={programsIntro.subtitle} />
				</Reveal>
			{/snippet}
			{#snippet children()}
				<div class="grid gap-10 md:grid-cols-3 md:gap-12">
					{#each content.programs as program, i}
						<Reveal delay={i * 90} variant="scale">
							<article
								class="card-lift flex h-full flex-col overflow-hidden rounded-3xl border-2 border-stone-200/90 bg-white shadow-sm {theme.sectorHover}"
							>
								<div class="relative aspect-[16/11] overflow-hidden">
									<MediaImage
										src={media.programs[i] ?? media.programs[0]!}
										fallback={programImageLocal(i)}
										alt=""
										class="h-full w-full object-cover"
										loading="lazy"
									/>
									<span
										class="absolute left-6 top-6 rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-stone-900 shadow"
									>
										{program.duration}
									</span>
								</div>
								<div class="flex flex-1 flex-col space-y-4 p-8 md:p-10">
									<h3 class="font-display text-2xl font-bold text-stone-900">{program.title}</h3>
									<p class="flex-1 text-base leading-relaxed text-stone-600">{program.outcome}</p>
									<a
										href={entity.websiteUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="btn-outline mt-4 w-full py-3.5 text-center"
									>
										Voir sur le site officiel
									</a>
								</div>
							</article>
						</Reveal>
					{/each}
				</div>
			{/snippet}
		</PageSection>
	{/if}

	<PageSection tone="white" border="y">
		{#snippet heading()}
			<Reveal variant="up">
				<p class="eyebrow text-center {theme.accentText}">Autres pôles</p>
				<SectionHeading title={pres.crossLinks.title} subtitle={pres.crossLinks.subtitle} />
			</Reveal>
		{/snippet}
		{#snippet children()}
			<div class="mx-auto flex max-w-4xl flex-col gap-10 md:gap-12">
				{#each siblings as portal}
					<EntitySiblingLink {portal} />
				{/each}
			</div>
		{/snippet}
	</PageSection>

	<PageSection tone="muted" id="faq" narrow>
		{#snippet heading()}
			<Reveal variant="up">
				<p class="eyebrow text-center {theme.accentText}">FAQ · {entity.shortName}</p>
				<SectionHeading
					title="Questions fréquentes"
					subtitle="Réponses spécifiques à {entity.name} — pas un simple copier-coller de l’accueil."
				/>
			</Reveal>
		{/snippet}
		{#snippet children()}
			<FaqAccordion items={content.faq} />
		{/snippet}
	</PageSection>

	<CtaBanner
		title={pres.cta.title}
		subtitle={pres.cta.subtitle}
		primary={{ label: entity.ctaLabel, href: entity.websiteUrl, external: true }}
		secondary={{ label: 'Contact', href: '/contact' }}
		dark
	/>

	<p class="page-container pb-24 pt-4 text-center text-base leading-relaxed text-stone-500 md:text-lg">
		{pres.footerNote}
	</p>
</div>
