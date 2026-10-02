<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import type { Testimonial } from '#services/site/types';
	import { initialsFromName } from '#lib/utils/initials';

	let { testimonial }: { testimonial: Testimonial } = $props();

	const initials = $derived(initialsFromName(testimonial.name));
</script>

<blockquote
	class="card-lift flex h-full flex-col rounded-3xl border border-stone-200 bg-white p-8 shadow-sm md:p-9"
>
	<Icon icon="material-symbols:format-quote" class="h-8 w-8 text-emerald-200" />
	<p class="mt-5 flex-1 text-base leading-relaxed text-stone-700">« {testimonial.quote} »</p>
	<footer class="mt-8 flex items-center gap-4 border-t border-stone-100 pt-6">
		<div
			class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-lime-500 text-sm font-bold text-white"
			aria-hidden="true"
		>
			{initials}
		</div>
		<div class="min-w-0">
			<p class="truncate text-base font-semibold text-stone-900">{testimonial.name}</p>
			<p class="text-xs text-stone-600">{testimonial.role}</p>
			<p class="mt-0.5 text-xs text-emerald-800/90">{testimonial.organization}</p>
		</div>
	</footer>
</blockquote>
