import type { EntityId } from '#services/site/types';
import type { HomePillar } from '#services/site/types';

export const pillarIcons: Record<HomePillar['icon'], string> = {
	leaf: 'material-symbols:eco-outline',
	people: 'material-symbols:groups-outline',
	graduation: 'material-symbols:school-outline'
};

export const entityIcons: Record<EntityId, string> = {
	cabinet: 'material-symbols:business-center-outline',
	ong: 'material-symbols:volunteer-activism-outline',
	eetroov: 'material-symbols:agriculture-outline'
};
