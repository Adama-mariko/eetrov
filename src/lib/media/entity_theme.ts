import type { EntityId } from '#services/site/types';

export type EntityTheme = {
	heroGradient: string;
	eyebrowClass: string;
	accentText: string;
	accentBorder: string;
	sectorHover: string;
	itemIcons: string[];
};

export const entityTheme: Record<EntityId, EntityTheme> = {
	cabinet: {
		heroGradient: 'from-teal-950/95 via-emerald-950/75 to-stone-900/40',
		eyebrowClass: 'text-teal-200/95',
		accentText: 'text-teal-800',
		accentBorder: 'border-teal-200/80 hover:border-teal-300',
		sectorHover: 'hover:shadow-teal-900/10',
		itemIcons: [
			'material-symbols:verified-outline',
			'material-symbols:strategy-outline',
			'material-symbols:groups-outline',
			'material-symbols:school-outline',
			'material-symbols:hub-outline'
		]
	},
	ong: {
		heroGradient: 'from-green-950/95 via-emerald-950/70 to-amber-950/35',
		eyebrowClass: 'text-lime-200/95',
		accentText: 'text-green-800',
		accentBorder: 'border-green-200/80 hover:border-green-300',
		sectorHover: 'hover:shadow-green-900/10',
		itemIcons: [
			'material-symbols:forest-outline',
			'material-symbols:menu-book-outline',
			'material-symbols:gavel-outline',
			'material-symbols:campaign-outline',
			'material-symbols:visibility-outline'
		]
	},
	eetroov: {
		heroGradient: 'from-lime-950/90 via-green-950/75 to-emerald-900/30',
		eyebrowClass: 'text-lime-200/95',
		accentText: 'text-lime-900',
		accentBorder: 'border-lime-200/80 hover:border-lime-300',
		sectorHover: 'hover:shadow-lime-900/10',
		itemIcons: [
			'material-symbols:agriculture-outline',
			'material-symbols:workspace-premium-outline',
			'material-symbols:co-present-outline',
			'material-symbols:handyman-outline',
			'material-symbols:payments-outline'
		]
	}
};

export function themeFor(id: EntityId): EntityTheme {
	return entityTheme[id];
}
