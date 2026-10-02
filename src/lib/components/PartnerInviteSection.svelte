<script lang="ts">
	import MediaImage from '#lib/components/MediaImage.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { media, mediaLocal } from '#lib/media/placeholders';
	import type { HomePageContent } from '#services/site/types';

	let { invite }: { invite: HomePageContent['partnerInvite'] } = $props();
</script>

<section class="section-shell bg-stone-100">
	<div class="page-container">
		<div class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-stone-900/5 lg:grid lg:grid-cols-2">
			<div
				class="relative flex min-h-[16rem] items-center justify-center bg-stone-50 p-8 md:p-12 lg:min-h-[22rem] lg:p-14"
			>
				<MediaImage
					src={media.partner}
					fallback={mediaLocal.partner}
					alt="ECOVERSION Group"
					class="max-h-48 w-full max-w-md object-contain md:max-h-56 lg:max-h-64"
					loading="lazy"
				/>
			</div>
			<Reveal variant="up">
				<div class="flex flex-col justify-center p-10 md:p-14 lg:p-16">
					<h2 class="font-display text-3xl font-bold text-stone-900 md:text-4xl">{invite.title}</h2>
					<p class="mt-6 text-lg leading-relaxed text-stone-600">{invite.body}</p>
					<div class="mt-10 flex flex-wrap gap-4">
						<a href={invite.primary.href} class="btn-primary px-8 py-3.5">{invite.primary.label}</a>
						<a
							href={invite.secondary.href}
							target="_blank"
							rel="noopener noreferrer"
							class="btn-outline px-8 py-3.5"
						>
							{invite.secondary.label}
						</a>
					</div>
				</div>
			</Reveal>
		</div>
	</div>
</section>
