<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import type { FaqItem } from '#services/site/types';

	let { items }: { items: FaqItem[] } = $props();

	let openIndex = $state<number | null>(0);

	function toggle(i: number) {
		openIndex = openIndex === i ? null : i;
	}
</script>

<div class="divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
	{#each items as item, i}
		<div class="faq-item">
			<button
				type="button"
				class="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-stone-50/80 sm:px-6"
				aria-expanded={openIndex === i}
				onclick={() => toggle(i)}
			>
				<span class="font-semibold text-stone-900">{item.q}</span>
				<Icon
					icon="material-symbols:expand-more"
					class="h-6 w-6 shrink-0 text-emerald-700 transition duration-300 {openIndex === i
						? 'rotate-180'
						: ''}"
				/>
			</button>
			<div
				class="faq-panel grid transition-[grid-template-rows] duration-500 ease-out"
				style="grid-template-rows: {openIndex === i ? '1fr' : '0fr'};"
			>
				<div class="overflow-hidden">
					<p class="px-5 pb-5 text-sm leading-relaxed text-stone-600 sm:px-6">{item.a}</p>
				</div>
			</div>
		</div>
	{/each}
</div>
