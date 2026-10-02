import SiteContentService from '#services/site/site_content_service';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	await parent();
	const svc = new SiteContentService();
	return {
		contactPage: svc.getContactPage(),
		contact: svc.getContact(),
		entities: svc.getEntities()
	};
};
