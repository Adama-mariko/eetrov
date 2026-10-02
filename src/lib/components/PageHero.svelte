<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';

	let {
		eyebrow,
		title,
		subtitle,
		highlight,
		icon,
		accentClass = 'from-emerald-700 to-emerald-950',
		primary,
		secondary
	}: {
		eyebrow: string;
		title: string;
		subtitle: string;
		highlight?: string;
		icon: string;
		accentClass?: string;
		primary: { label: string; href: string; external?: boolean };
		secondary?: { label: string; href: string };
	} = $props();
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-white via-white to-emerald-50/50">
	<div
		class="pointer-events-none absolute inset-0 opacity-40"
		style="background-image: radial-gradient(circle at 15% 30%, rgb(167 243 208 / 0.4), transparent 50%), radial-gradient(circle at 90% 10%, rgb(190 242 100 / 0.25), transparent 45%);"
		aria-hidden="true"
	></div>
	<div class="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
		<div>
			<a href="/" class="mb-4 inline-flex items-center gap-1 text-xs font-medium text-stone-500 hover:text-emerald-800">
				<Icon icon="material-symbols:arrow-back" class="h-4 w-4" />
				Accueil
			</a>
			<p class="eyebrow hero-stagger-1">{eyebrow}</p>
			<h1
				class="font-display hero-stagger-2 mt-3 text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl"
			>
				{title}
			</h1>
			<p class="hero-stagger-3 mt-4 text-lg leading-relaxed text-stone-600">{subtitle}</p>
			{#if highlight}
				<p class="hero-stagger-4 mt-3 text-base font-semibold text-emerald-800">{highlight}</p>
			{/if}
			<div class="hero-stagger-5 mt-8 flex flex-wrap gap-3">
				<a
					href={primary.href}
					target={primary.external ? '_blank' : undefined}
					rel={primary.external ? 'noopener noreferrer' : undefined}
					class="btn-primary inline-flex gap-2"
				>
					{primary.label}
					{#if primary.external}
						<Icon icon="material-symbols:open-in-new" class="h-4 w-4" />
					{/if}
				</a>
				{#if secondary}
					<a href={secondary.href} class="btn-outline">{secondary.label}</a>
				{/if}
			</div>
		</div>
		<div class="hero-stagger-6 flex justify-center lg:justify-end">
			<div
				class="relative w-full max-w-sm overflow-hidden rounded-3xl border border-stone-200/80 bg-white p-8 shadow-xl shadow-emerald-900/10"
			>
				<div
					class="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br {accentClass} opacity-20 blur-2xl"
				></div>
				<div
					class="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br {accentClass} text-white shadow-lg"
				>
					<Icon {icon} class="h-9 w-9" />
				</div>
				<p class="relative mt-6 text-sm leading-relaxed text-stone-600">
					{subtitle}
				</p>
			</div>
		</div>
	</div>
</section>
