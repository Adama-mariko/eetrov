/** Images hébergées sur Wix (sites officiels ECOVERSION). */
const CDN = 'https://static.wixstatic.com/media';

export type WixMediaFile = `${string}~mv2.${'jpg' | 'jpeg' | 'png'}`;

export function wixImage(
	file: WixMediaFile,
	opts: { w?: number; h?: number; q?: number; fp?: string } = {}
): string {
	const w = opts.w ?? 1600;
	const q = opts.q ?? 90;
	const parts = [`w_${w}`];
	if (opts.h) parts.push(`h_${opts.h}`);
	parts.push('al_c');
	if (opts.fp) parts.push(`fp_${opts.fp}`);
	parts.push(`q_${q}`);
	return `${CDN}/${file}/v1/fill/${parts.join(',')}/${file}`;
}

/** Identifiants extraits de ecoversiongroup.com, ecoversion.org, eetroov.org */
export const wixAssets = {
	cabinet: {
		heroBanner: 'b56b91_6aa11af2ad9348a8b6377de299f8ce78~mv2.jpg' as WixMediaFile,
		about: 'b56b91_11e09ea3af3a47cd8af4cfbae1a0a389~mv2.jpeg' as WixMediaFile,
		vision: 'b56b91_add3840b856547df8cb4e19eeae90aa1~mv2.jpg' as WixMediaFile,
		coaching: 'b56b91_d371219c973e4799a1861f26b36c780b~mv2.jpg' as WixMediaFile,
		environment: 'b56b91_9eaf6ff4d8364179a8acbe48dada32c0~mv2.png' as WixMediaFile,
		resourceA: 'b56b91_8569081b13de457aadd53970a829aa5c~mv2.jpg' as WixMediaFile,
		resourceB: 'b56b91_f4e0f96c8f82492a81cc37c70a5d0de2~mv2.jpg' as WixMediaFile,
		partners: 'b56b91_02447123d50b4369a2f949a7dbc39f1f~mv2.png' as WixMediaFile
	},
	ong: {
		hero: 'b56b91_a9930cce403f48838e51a5ef2f8b85c6~mv2.jpeg' as WixMediaFile,
		donation: 'b56b91_b747ee4163b14bfcb0e3d880026374cb~mv2.jpg' as WixMediaFile,
		community: 'b56b91_e31806acbfe642459318d28dcc00cba6~mv2.jpg' as WixMediaFile
	},
	eetroov: {
		hero: 'b56b91_e4f09b4b9c1d4cf38c6cf6e0454ec07f~mv2.jpg' as WixMediaFile,
		courseHydroponie: 'b56b91_2b5994b9b56a491cb04467d71bc10f19~mv2.jpg' as WixMediaFile,
		courseBasilic: 'b56b91_ae93c9af0eac4f56a6a4fbc154b62214~mv2.jpg' as WixMediaFile,
		courseBpa: 'b56b91_ca51424e557244ac8b53f836a041d486~mv2.jpg' as WixMediaFile,
		coursePhyto: 'b56b91_d98c68abfd1c4fabb3e1486a60f4d2a9~mv2.jpg' as WixMediaFile
	}
} as const;
