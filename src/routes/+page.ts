import SiteContentService from '#services/site/site_content_service';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	await parent();
	const svc = new SiteContentService();
	return {
		home: svc.getHomePage(),
		entities: svc.getEntities(),
		brand: svc.getBrand()
	};
};
