<script lang="ts">
	import BrandLogo from '#lib/components/BrandLogo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { page } from '$app/state';
	import type { NavItem, SiteShell } from '#services/site/types';

	let { shell }: { shell: SiteShell } = $props();

	let open = $state(false);

	function isActive(href: string, pathname: string) {
		if (href === '/') return pathname === '/';
		return pathname.startsWith(href);
	}

	function externalFor(item: NavItem) {
		return item.externalUrl;
	}
</script>

<header
	class="site-header site-header--emerald sticky top-0 z-50 border-b border-emerald-800/80 bg-emerald-900/98 shadow-md shadow-emerald-950/30 backdrop-blur-lg"
>
	<div class="page-container flex items-center justify-between gap-4 py-3">
		<a href="/" class="group flex items-center gap-3 transition duration-300 hover:opacity-90">
			<BrandLogo variant="header" />
			<span class="flex flex-col leading-tight">
				<span class="text-base font-bold tracking-tight text-white sm:text-lg">
					{shell.brand.name}
				</span>
				<span class="hidden text-xs text-emerald-200/90 sm:block">
					{shell.brand.tagline}
				</span>
			</span>
		</a>

		<nav class="hidden items-center gap-1 lg:flex" aria-label="Principale">
			{#each shell.navigation as link}
				<div class="flex items-center">
					<a
						href={link.href}
						class="nav-link {isActive(link.href, page.url.pathname)
							? 'nav-link--active-emerald bg-white/10 text-white'
							: 'text-emerald-100/90 hover:bg-white/5 hover:text-white'}"
					>
						{link.label}
					</a>
					{#if externalFor(link)}
						<a
							href={externalFor(link)}
							target="_blank"
							rel="noopener noreferrer"
							class="ml-0.5 rounded-md px-1.5 py-2 text-xs font-semibold text-emerald-100 transition hover:bg-white/10 hover:text-white"
							title="Ouvrir le site officiel"
							aria-label="{link.label} — site officiel"
						>
							<Icon icon="material-symbols:open-in-new" class="h-3.5 w-3.5" />
						</a>
					{/if}
				</div>
			{/each}
		</nav>

		<a
			href="/contact"
			class="btn-ghost-light hidden !px-4 !py-2 text-sm sm:inline-flex"
		>
			Nous contacter
		</a>

		<button
			type="button"
			class="rounded-md border border-white/25 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10 lg:hidden"
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			Menu
		</button>
	</div>

	{#if open}
		<nav
			class="border-t border-emerald-800 bg-emerald-950 px-4 py-3 lg:hidden"
			aria-label="Mobile"
			style="animation: header-enter 0.4s cubic-bezier(0.16, 1, 0.3, 1) both"
		>
			<ul class="flex flex-col gap-1">
				{#each shell.navigation as link}
					<li class="flex items-center justify-between gap-2">
						<a
							href={link.href}
							class="block flex-1 rounded-md px-3 py-2 text-sm font-medium transition {isActive(
								link.href,
								page.url.pathname
							)
								? 'bg-white/10 text-white'
								: 'text-emerald-100'}"
							onclick={() => (open = false)}
						>
							{link.label}
						</a>
						{#if externalFor(link)}
							<a
								href={externalFor(link)}
								target="_blank"
								rel="noopener noreferrer"
								class="rounded-md bg-emerald-800 px-3 py-2 text-xs font-semibold text-white"
							>
								Site web
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>
