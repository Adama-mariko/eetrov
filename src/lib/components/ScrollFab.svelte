<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { onMount } from 'svelte';

	let pointingUp = $state(false);
	let show = $state(false);

	function updateDirection() {
		const y = window.scrollY;
		const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
		show = maxScroll > 120;
		pointingUp = y > window.innerHeight * 0.4;
	}

	function scrollToFooter() {
		const footer = document.querySelector('footer');
		if (footer) {
			footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
			return;
		}
		const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
		window.scrollTo({ top: maxScroll, behavior: 'smooth' });
	}

	function scrollStep() {
		if (pointingUp) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}
		scrollToFooter();
	}

	onMount(() => {
		updateDirection();
		const onScroll = () => updateDirection();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		};
	});
</script>

{#if show}
	<button
		type="button"
		class="scroll-fab"
		class:scroll-fab--up={pointingUp}
		aria-label={pointingUp ? 'Remonter en haut de la page' : 'Aller jusqu’au pied de page'}
		onclick={scrollStep}
	>
		<span class="scroll-fab__ring" aria-hidden="true"></span>
		<Icon icon="material-symbols:keyboard-arrow-down-rounded" class="scroll-fab__icon h-8 w-8" />
	</button>
{/if}
