<script lang="ts">
	import BrandLogo from '#lib/components/BrandLogo.svelte';
	import ContactForm from '#lib/components/contact/ContactForm.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const whatsapp = $derived(data.contact.whatsapp);
	const primaryEmail = $derived(data.contact.emails[0]?.address ?? 'contact@ecoversiongroup.com');
</script>

<svelte:head>
	<title>Contact — ECOVERSION</title>
	<meta name="description" content={data.contactPage.intro} />
</svelte:head>

<div class="contact-page bg-stone-50 pb-20 pt-24 md:pb-28 md:pt-28">
	<div class="page-container">
		<header class="mb-10 max-w-2xl lg:mb-14">
			<BrandLogo variant="contact" />
			<p class="eyebrow">Contact</p>
			<h1 class="font-display mt-4 text-4xl font-bold tracking-tight text-stone-900 md:text-5xl lg:text-[3.25rem]">
				{data.contactPage.title}
			</h1>
			<p class="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
				{data.contactPage.intro}
			</p>
		</header>

		<div class="grid gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
			<div class="lg:col-span-7 xl:col-span-8">
				<div class="contact-form-card">
					<ContactForm topics={data.contactPage.formTopics} />
				</div>
			</div>

			<aside class="flex flex-col gap-6 lg:col-span-5 xl:col-span-4">
				<div class="contact-info-card space-y-8">
					{#each data.contact.phones as phone, i}
						<div>
							<p class="contact-info-label">{i === 0 ? 'Téléphone' : phone.label}</p>
							<a href="tel:{phone.tel}" class="contact-info-value block">{phone.number}</a>
						</div>
					{/each}
					<div>
						<p class="contact-info-label">WhatsApp</p>
						<a
							href="https://wa.me/{whatsapp.waMe}"
							target="_blank"
							rel="noopener noreferrer"
							class="contact-info-value inline-flex items-center gap-2"
						>
							{whatsapp.number}
						</a>
					</div>
					<div>
						<p class="contact-info-label">E-mail</p>
						<a href="mailto:{primaryEmail}" class="contact-info-value block break-all">{primaryEmail}</a>
					</div>
					<div>
						<p class="contact-info-label">Adresse</p>
						<p class="contact-info-value mt-2 text-lg leading-relaxed">
							{data.contact.address}, {data.contact.city}
						</p>
					</div>
				</div>

				<div class="contact-cta-card">
					<h2 class="font-display text-xl font-bold text-stone-900 md:text-2xl">
						Trois pôles, une même vision
					</h2>
					<p class="mt-3 text-sm leading-relaxed text-stone-600">
						Cabinet conseil, impact social et formations EETROOV — découvrez comment ECOVERSION accompagne
						vos projets durables.
					</p>
					<a href="/cabinet" class="btn-outline mt-6 text-xs uppercase tracking-wider">
						Découvrir nos solutions
					</a>
				</div>
			</aside>
		</div>
	</div>
</div>
