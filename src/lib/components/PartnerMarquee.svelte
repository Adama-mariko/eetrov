<script lang="ts">
	import type { Partner } from '#services/site/types';

	let { partners }: { partners: Partner[] } = $props();

	const track = $derived([...partners, ...partners]);
</script>

<div class="marquee-mask overflow-hidden py-2">
	<div class="marquee-track">
		{#each track as partner, i (i)}
			<span
				class="shrink-0 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-emerald-50/95 backdrop-blur-sm"
			>
				{partner.name}
				<span class="text-emerald-200/60">· {partner.type}</span>
			</span>
		{/each}
	</div>
</div>
