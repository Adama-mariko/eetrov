<script lang="ts">
	import Iconify from '@iconify/svelte';

	let {
		icon,
		class: className = 'h-4 w-4',
		label
	}: {
		icon: string;
		class?: string;
		/** Si défini, l’icône n’est plus decorative (aria-hidden). */
		label?: string;
	} = $props();
</script>

<Iconify {icon} class={className} aria-hidden={label ? undefined : true} role={label ? 'img' : undefined} aria-label={label} />
