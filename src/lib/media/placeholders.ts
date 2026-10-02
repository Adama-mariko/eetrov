import type { EntityId } from '#services/site/types';
import { wixAssets, wixImage } from '#lib/media/wix';

const local = (name: string) => `/media/${name}`;

const heroRemote = wixImage(wixAssets.cabinet.heroBanner, {
	w: 1920,
	h: 1080,
	fp: '0.50_0.50'
});

export const media = {
	hero: {
		poster: heroRemote,
		posterLocal: local('hero.jpg')
	},
	why: wixImage(wixAssets.cabinet.vision, { w: 1200, h: 1500 }),
	partner: wixImage(wixAssets.cabinet.partners, { w: 900, h: 600 }),
	entity: {
		cabinet: wixImage(wixAssets.cabinet.about, { w: 1400, h: 900 }),
		ong: wixImage(wixAssets.ong.hero, { w: 1400, h: 900 }),
		eetroov: wixImage(wixAssets.eetroov.hero, { w: 1400, h: 900 })
	} satisfies Record<EntityId, string>,
	services: [
		wixImage(wixAssets.cabinet.coaching, { w: 1200, h: 800 }),
		wixImage(wixAssets.eetroov.hero, { w: 1200, h: 800 }),
		wixImage(wixAssets.ong.donation, { w: 1200, h: 800 }),
		wixImage(wixAssets.cabinet.environment, { w: 800, h: 600 }),
		wixImage(wixAssets.eetroov.courseHydroponie, { w: 1200, h: 800 }),
		wixImage(wixAssets.ong.community, { w: 1200, h: 800 })
	],
	programs: [
		wixImage(wixAssets.eetroov.courseBasilic, { w: 1200, h: 800 }),
		wixImage(wixAssets.cabinet.resourceA, { w: 1200, h: 800 }),
		wixImage(wixAssets.ong.hero, { w: 1200, h: 800 })
	]
} as const;

export function entityImage(id: EntityId): string {
	return media.entity[id];
}

export function entityImageLocal(id: EntityId): string {
	return local(`${id}.jpg`);
}

export function serviceImageLocal(index: number): string {
	return local(`service-${index + 1}.jpg`);
}

export function programImageLocal(index: number): string {
	return local(`program-${index + 1}.jpg`);
}

export const mediaLocal = {
	why: local('why.jpg'),
	partner: local('partner.jpg')
} as const;

/** URLs Wix pour téléchargement local (static/media). */
export const mediaDownloadMap: Record<string, string> = {
	'hero.jpg': heroRemote,
	'why.jpg': media.why,
	'partner.jpg': media.partner,
	'cabinet.jpg': media.entity.cabinet,
	'ong.jpg': media.entity.ong,
	'eetroov.jpg': media.entity.eetroov,
	'service-1.jpg': media.services[0]!,
	'service-2.jpg': media.services[1]!,
	'service-3.jpg': media.services[2]!,
	'service-4.jpg': media.services[3]!,
	'service-5.jpg': media.services[4]!,
	'service-6.jpg': media.services[5]!,
	'program-1.jpg': media.programs[0]!,
	'program-2.jpg': media.programs[1]!,
	'program-3.jpg': media.programs[2]!
};
