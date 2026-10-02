<script lang="ts">
	import BrandLogo from '#lib/components/BrandLogo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { page } from '$app/state';
	import type { SiteShell } from '#services/site/types';

	let { shell }: { shell: SiteShell } = $props();

	const faqHref = $derived(page.url.pathname === '/' ? '/#faq' : `${page.url.pathname}#faq`);

	const solutions = [
		{ label: 'Cabinet conseil', href: '/cabinet' },
		{ label: 'ONG', href: '/ong' },
		{ label: 'Formations EETROOV', href: '/formations' }
	];
</script>

<footer class="mt-auto border-t border-stone-800 bg-stone-950 text-stone-400">
	<div class="page-container py-20 md:py-24">
		<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
			<div class="lg:col-span-1">
				<BrandLogo variant="footer" />
				<p class="text-xl font-bold text-white">{shell.brand.name}</p>
				<p class="mt-2 text-sm text-emerald-300/90">{shell.brand.tagline}</p>
				<p class="mt-4 text-sm leading-relaxed">{shell.footerTagline}</p>
			</div>
			<div>
				<p class="text-sm font-semibold text-white">Solutions</p>
				<ul class="mt-4 space-y-2.5 text-sm">
					{#each solutions as link}
						<li>
							<a href={link.href} class="inline-flex items-center gap-1 hover:text-white">
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<p class="text-sm font-semibold text-white">Navigation</p>
				<ul class="mt-4 space-y-2.5 text-sm">
					{#each shell.navigation as item}
						<li><a href={item.href} class="hover:text-white">{item.label}</a></li>
					{/each}
					<li><a href={faqHref} class="hover:text-white">FAQ</a></li>
				</ul>
			</div>
			<div>
				<p class="text-sm font-semibold text-white">Contact</p>
				<ul class="mt-4 space-y-3 text-sm">
					<li class="flex gap-2">
						<Icon icon="material-symbols:location-on-outline" class="mt-0.5 h-4 w-4 shrink-0" />
						<span>{shell.contact.address}, {shell.contact.city}</span>
					</li>
					{#each shell.contact.phones as phone}
						<li class="flex gap-2">
							<Icon icon="material-symbols:call-outline" class="mt-0.5 h-4 w-4 shrink-0" />
							<a href="tel:{phone.tel}" class="hover:text-white">{phone.number}</a>
						</li>
					{/each}
					<li class="flex gap-2">
						<Icon icon="mdi:whatsapp" class="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
						<a
							href="https://wa.me/{shell.contact.whatsapp.waMe}"
							target="_blank"
							rel="noopener noreferrer"
							class="hover:text-white"
							title="Discuter sur WhatsApp"
						>
							<span class="font-medium text-stone-300">{shell.contact.whatsapp.label}</span>
							<span class="text-stone-400"> — {shell.contact.whatsapp.number}</span>
						</a>
					</li>
					<li class="flex gap-2">
						<Icon icon="material-symbols:mail-outline" class="mt-0.5 h-4 w-4 shrink-0" />
						<a href="mailto:{shell.contact.emails[0].address}" class="hover:text-white"
							>{shell.contact.emails[0].address}</a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="border-t border-stone-800 py-6 text-center text-xs text-stone-500">
		© {new Date().getFullYear()} ECOVERSION · EETROOV · Tous droits réservés.
	</div>
</footer>
