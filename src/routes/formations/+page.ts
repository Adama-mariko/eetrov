import SiteContentService from '#services/site/site_content_service';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const shell = await parent();
	const svc = new SiteContentService();
	return {
		page: svc.getEntityPage('eetroov'),
		entities: svc.getEntities(),
		brand: shell.brand
	};
};
