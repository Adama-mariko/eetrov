<script lang="ts">
	import { onMount } from 'svelte';

	type Variant = 'up' | 'fade' | 'scale' | 'right';

	let {
		delay = 0,
		variant = 'up',
		class: className = '',
		children
	}: {
		delay?: number;
		variant?: Variant;
		class?: string;
		children: import('svelte').Snippet;
	} = $props();

	let node = $state<HTMLDivElement | null>(null);
	let shown = $state(false);

	function revealIfVisible(el: HTMLElement) {
		const rect = el.getBoundingClientRect();
		const vh = window.innerHeight || document.documentElement.clientHeight;
		if (rect.top < vh * 0.92 && rect.bottom > 0) {
			shown = true;
			return true;
		}
		return false;
	}

	onMount(() => {
		const el = node;
		if (!el) return;

		document.documentElement.classList.add('reveal-ready');

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			shown = true;
			return;
		}

		if (revealIfVisible(el)) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) {
					shown = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.06, rootMargin: '0px 0px 8% 0px' }
		);

		observer.observe(el);
		requestAnimationFrame(() => revealIfVisible(el));
		return () => observer.disconnect();
	});
</script>

<div
	bind:this={node}
	class="motion-reveal motion-reveal--{variant} {shown ? 'motion-reveal--in' : ''} {className}"
	style="--reveal-delay: {delay}ms"
>
	{@render children()}
</div>
