<script lang="ts">
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import FaqAccordion from '#lib/components/FaqAccordion.svelte';
	import FeaturedProgramCard from '#lib/components/FeaturedProgramCard.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import MediaHero from '#lib/components/MediaHero.svelte';
	import PartnerInviteSection from '#lib/components/PartnerInviteSection.svelte';
	import PartnerMarquee from '#lib/components/PartnerMarquee.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import ServiceOfferCard from '#lib/components/ServiceOfferCard.svelte';
	import SolutionShowcaseCard from '#lib/components/SolutionShowcaseCard.svelte';
	import TestimonialCard from '#lib/components/TestimonialCard.svelte';
	import TrustMarquee from '#lib/components/TrustMarquee.svelte';
	import WhySection from '#lib/components/WhySection.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const home = $derived(data.home);
</script>

<svelte:head>
	<title>{data.brand.name} — {data.brand.tagline}</title>
	<meta name="description" content={data.brand.intro} />
</svelte:head>

<MediaHero
	eyebrow="Durabilité · Conseil · Formation"
	title="Votre partenaire pour un impact durable en Afrique"
	subtitle="Cabinet ECOVERSION Group, ONG et campus EETROOV — audits, projets terrain et formations agriculture durable, depuis la Côte d’Ivoire."
	tagline={data.brand.tagline}
	primary={home.hero.primaryCta}
	secondary={home.hero.secondaryCta}
/>

<WhySection why={home.why} />

<section class="section-shell bg-stone-50">
	<div class="page-container">
		<Reveal variant="up">
			<SectionHeading title={home.serviceOffers.intro.title} subtitle={home.serviceOffers.intro.subtitle} />
		</Reveal>
		<div class="section-heading-gap grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
			{#each home.serviceOffers.items as offer, i}
				<Reveal delay={i * 60} variant="up">
					<ServiceOfferCard {offer} />
				</Reveal>
			{/each}
		</div>
		<div class="mt-16 text-center md:mt-20">
			<a href="/contact" class="btn-outline px-10 py-4 text-base">Voir tous nos services — contact</a>
		</div>
	</div>
</section>

<section id="solutions" class="section-shell bg-white">
	<div class="page-container">
		<Reveal variant="up">
			<SectionHeading title={home.solutions.title} subtitle={home.solutions.subtitle} />
		</Reveal>
		<div class="section-heading-gap grid gap-6 lg:grid-cols-3 lg:gap-8">
			{#each data.entities as entity}
				<SolutionShowcaseCard {entity} />
			{/each}
		</div>
	</div>
</section>

<CtaBanner
	title={home.midCta.title}
	primary={home.midCta.primary}
	secondary={home.midCta.secondary}
/>

<section class="section-shell border-y border-stone-200 bg-stone-50/80">
	<div class="page-container">
		<Reveal variant="up">
			<SectionHeading title={home.featured.intro.title} subtitle={home.featured.intro.subtitle} />
		</Reveal>
		<div class="section-heading-gap grid gap-10 md:grid-cols-3 md:gap-12">
			{#each home.featured.items as program, i}
				<Reveal delay={i * 90} variant="scale">
					<FeaturedProgramCard {program} />
				</Reveal>
			{/each}
		</div>
		<div class="mt-16 text-center md:mt-20">
			<a href="/formations" class="text-base font-semibold text-emerald-800 hover:underline">
				Voir le catalogue formations →
			</a>
		</div>
	</div>
</section>

<section class="section-shell bg-white">
	<div class="page-container">
		<Reveal variant="up">
			<SectionHeading title={home.sectors.intro.title} subtitle={home.sectors.intro.subtitle} />
		</Reveal>
		<div class="section-heading-gap grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
			{#each home.sectors.items as sector, i}
				<Reveal delay={i * 70} variant="up">
					<div class="sector-card h-full !p-9 md:!p-10">
						<Icon icon={sector.icon} class="h-9 w-9 text-emerald-700" />
						<h3 class="mt-6 text-xl font-bold text-stone-900">{sector.title}</h3>
						<p class="mt-4 text-base leading-relaxed text-stone-600">{sector.description}</p>
					</div>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<section class="border-b border-stone-200 bg-stone-50 py-24 md:py-32 lg:py-36">
	<div class="page-container grid gap-16 md:grid-cols-3 md:gap-12 lg:gap-20">
		{#each home.stats as stat, i}
			<Reveal delay={i * 100} variant="up">
				<div class="stat-jeko">
					<p class="stat-jeko-value">{stat.value}</p>
					<p class="stat-jeko-label">{stat.label}</p>
					<p class="stat-jeko-detail">{stat.detail}</p>
				</div>
			</Reveal>
		{/each}
	</div>
</section>

<section class="section-shell bg-white">
	<div class="page-container">
		<Reveal variant="up">
			<SectionHeading title={home.testimonials.title} subtitle={home.testimonials.subtitle} />
		</Reveal>
		<div class="section-heading-gap grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
			{#each home.testimonialItems.slice(0, 3) as t, i}
				<Reveal delay={i * 70} variant="up">
					<TestimonialCard testimonial={t} />
				</Reveal>
			{/each}
		</div>
		<div class="mt-20 md:mt-24">
			<p class="mb-8 text-center text-xs font-bold uppercase tracking-[0.25em] text-stone-500">
				Ils nous font confiance
			</p>
			<TrustMarquee labels={home.trustOrganizations} />
		</div>
	</div>
</section>

<PartnerInviteSection invite={home.partnerInvite} />

<section class="overflow-hidden bg-emerald-950 py-20 text-white md:py-28 lg:py-32">
	<div class="page-container">
		<Reveal variant="up">
			<SectionHeading
				title={home.partners.title}
				subtitle={home.partners.subtitle}
				class="[&_h2]:text-white [&_p]:text-emerald-100/85"
			/>
		</Reveal>
		<div class="section-heading-gap">
			<PartnerMarquee partners={home.partnerItems} />
		</div>
	</div>
</section>

<section id="faq" class="section-shell bg-white">
	<div class="page-container max-w-4xl">
		<Reveal variant="up">
			<SectionHeading title={home.faq.title} subtitle={home.faq.subtitle} />
		</Reveal>
		<div class="section-heading-gap">
			<FaqAccordion items={home.faqItems} />
		</div>
	</div>
</section>

<CtaBanner
	title="Prêt à avancer avec ECOVERSION ?"
	subtitle="Un échange, un devis ou une visite de nos sites officiels — nous répondons rapidement."
	primary={{ label: 'Nous contacter', href: '/contact' }}
	secondary={{ label: 'Explorer les solutions', href: '#solutions' }}
	dark
/>

<p class="page-container pb-24 pt-4 text-center text-base leading-relaxed text-stone-500 md:text-lg">
	{data.brand.intro}
</p>
