<script lang="ts">
	let {
		src,
		alt = '',
		class: className = '',
		loading = 'lazy',
		fetchpriority,
		fallback
	}: {
		src: string;
		alt?: string;
		class?: string;
		loading?: 'lazy' | 'eager';
		fetchpriority?: 'high' | 'low' | 'auto';
		fallback?: string;
	} = $props();

	let failed = $state(false);

	const current = $derived(failed && fallback ? fallback : src);

	function onError() {
		if (fallback) failed = true;
	}

	$effect(() => {
		src;
		failed = false;
	});
</script>

<img
	src={current}
	{alt}
	class={className}
	{loading}
	fetchpriority={fetchpriority}
	decoding="async"
	referrerpolicy="no-referrer"
	crossorigin="anonymous"
	onerror={onError}
/>
