import SiteContentService from '#services/site/site_content_service';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = async () => {
	const svc = new SiteContentService();
	return svc.getShell();
};
