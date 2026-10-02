<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import type { EntityPortal } from '#services/site/types';
	import { entityIcons } from '#lib/icons';

	let { entities }: { entities: EntityPortal[] } = $props();
</script>

<div class="relative mx-auto h-[22rem] w-full max-w-md lg:h-[26rem] lg:max-w-none">
	<div class="hero-float-a absolute left-0 top-8 z-10 w-[88%] rounded-2xl border border-stone-200/80 bg-white p-5 shadow-xl shadow-emerald-900/10">
		{#each entities.slice(0, 1) as entity}
			<div class="flex items-start gap-3">
				<div
					class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br {entity.accentClass} text-white"
				>
					<Icon icon={entityIcons[entity.id]} class="h-6 w-6" />
				</div>
				<div>
					<p class="text-xs font-semibold uppercase tracking-wide text-emerald-700">{entity.shortName}</p>
					<p class="font-display text-lg font-bold text-stone-900">{entity.name}</p>
					<p class="mt-1 line-clamp-2 text-xs text-stone-600">{entity.tagline}</p>
				</div>
			</div>
		{/each}
	</div>
	<div
		class="hero-float-b absolute right-0 top-24 z-20 w-[78%] rounded-2xl border border-emerald-100 bg-emerald-50/90 p-4 shadow-lg backdrop-blur-sm"
	>
		{#each entities.slice(1, 2) as entity}
			<p class="text-xs font-medium text-emerald-800">{entity.name}</p>
			<p class="mt-1 text-sm text-stone-700">{entity.highlights[0]}</p>
		{/each}
	</div>
	<div
		class="hero-float-c absolute bottom-4 left-[12%] z-30 w-[72%] rounded-2xl border border-stone-200 bg-white p-4 shadow-2xl"
	>
		{#each entities.slice(2, 3) as entity}
			<div class="flex items-center justify-between gap-2">
				<p class="text-sm font-semibold text-stone-900">{entity.name}</p>
				<span class="rounded-full bg-lime-100 px-2 py-0.5 text-[10px] font-bold uppercase text-lime-800"
					>Formation</span
				>
			</div>
			<p class="mt-2 text-xs text-stone-600">{entity.highlights[1]}</p>
		{/each}
	</div>
	<div
		class="pointer-events-none absolute inset-8 rounded-full bg-gradient-to-tr from-emerald-200/40 to-lime-100/30 blur-2xl"
		aria-hidden="true"
	></div>
</div>
