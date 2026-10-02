<script lang="ts">
	let { labels }: { labels: string[] } = $props();
	const track = $derived([...labels, ...labels]);
</script>

<div class="marquee-mask overflow-hidden py-3">
	<div class="marquee-track marquee-track--fast gap-8">
		{#each track as label, i (i)}
			<span
				class="shrink-0 rounded-xl border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-stone-800 shadow-sm"
			>
				{label}
			</span>
		{/each}
	</div>
</div>
