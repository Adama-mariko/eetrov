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
			<div class="relative h-full min-h-[14rem] overflow-hidden sm:min-h-[18rem]">
				<MediaImage
					src={media.partner}
					fallback={mediaLocal.partner}
					alt=""
					class="absolute inset-0 h-full w-full object-cover"
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
