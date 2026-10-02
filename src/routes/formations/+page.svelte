<script lang="ts">
	import EntityPageView from '#lib/components/EntityPageView.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.page.entity.name} — Formations agriculture durable</title>
	<meta name="description" content={data.page.entity.description} />
</svelte:head>

<EntityPageView content={data.page} entities={data.entities} payAction="inscription-eetroov" />
