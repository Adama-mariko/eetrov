export type EntityId = 'cabinet' | 'ong' | 'eetroov';

export type NavItem = {
	label: string;
	href: string;
	/** Lien externe officiel (redirection directe depuis le menu). */
	externalUrl?: string;
};

export type Brand = {
	name: string;
	tagline: string;
	slogan: string;
	intro: string;
};

export type ContactInfo = {
	address: string;
	city: string;
	phones: { label: string; number: string; tel: string }[];
	whatsapp: { label: string; number: string; waMe: string };
	emails: { label: string; address: string }[];
	leadership: { name: string; role: string; bio: string };
	hours: string;
};

export type EntityPortal = {
	id: EntityId;
	name: string;
	shortName: string;
	websiteUrl: string;
	landingPath: string;
	tagline: string;
	description: string;
	mission: string;
	audience: string;
	highlights: string[];
	services: string[];
	ctaLabel: string;
	ctaSecondaryLabel: string;
	accentClass: string;
};

export type HomeStat = { value: string; label: string; detail: string };

export type HomePillar = {
	title: string;
	body: string;
	icon: 'leaf' | 'people' | 'graduation';
};

export type Testimonial = {
	quote: string;
	/** Nom complet de la personne */
	name: string;
	role: string;
	organization: string;
};

export type Partner = { name: string; type: string };

export type SectionIntro = { title: string; subtitle: string };

export type HomeSector = {
	title: string;
	description: string;
	icon: string;
};

export type FaqItem = { q: string; a: string };

export type CtaPair = {
	primary: { label: string; href: string };
	secondary?: { label: string; href: string };
};

export type ValueProp = { title: string; description: string; icon: string };

export type ServiceOffer = {
	title: string;
	description: string;
	href: string;
	linkLabel: string;
	imageIndex: number;
	/** `contain` pour logos / visuels entiers (évite le crop dans la carte). */
	imageFit?: 'cover' | 'contain';
};

export type FeaturedProgram = {
	title: string;
	badge: string;
	meta: string;
	detail: string;
	href: string;
	imageIndex: number;
};

export type HomePageContent = {
	hero: {
		eyebrow: string;
		title: string;
		subtitle: string;
		primaryCta: { label: string; href: string };
		secondaryCta: { label: string; href: string };
	};
	solutions: SectionIntro;
	why: {
		eyebrow: string;
		title: string;
		body: string;
		link: { label: string; href: string };
		features: ValueProp[];
	};
	serviceOffers: { intro: SectionIntro; items: ServiceOffer[] };
	featured: { intro: SectionIntro; items: FeaturedProgram[] };
	partnerInvite: {
		title: string;
		body: string;
		primary: { label: string; href: string };
		secondary: { label: string; href: string };
	};
	stats: HomeStat[];
	midCta: { title: string } & CtaPair;
	sectors: { intro: SectionIntro; items: HomeSector[] };
	testimonials: SectionIntro;
	testimonialItems: Testimonial[];
	trustOrganizations: string[];
	partners: SectionIntro;
	partnerItems: Partner[];
	faq: SectionIntro;
	faqItems: FaqItem[];
	finalCta: { title: string; subtitle: string } & CtaPair;
	/** @deprecated conservé pour compat — non affiché sur la home */
	pillars: HomePillar[];
	whyUs: { title: string; paragraphs: string[]; bullets: string[] };
	commitment: { title: string; body: string; cta: { label: string; href: string } };
};

export type EntityPagePresentation = {
	heroEyebrow: string;
	stats?: HomeStat[];
	mission: { title: string; subtitle: string };
	programs?: { title: string; subtitle: string };
	crossLinks: { title: string; subtitle: string };
	action: { title: string; subtitle: string };
	cta: { title: string; subtitle: string };
	footerNote: string;
};

export type EntityPageContent = {
	entity: EntityPortal;
	presentation: EntityPagePresentation;
	sections: {
		id: string;
		eyebrow?: string;
		title: string;
		paragraphs: string[];
		items?: string[];
	}[];
	programs?: { title: string; duration: string; outcome: string }[];
	faq: { q: string; a: string }[];
};

export type ContactPageContent = {
	title: string;
	intro: string;
	formTopics: { value: string; label: string }[];
};

export type ContactFormPayload = {
	name: string;
	email: string;
	phone: string;
	topic: string;
	message: string;
	company?: string;
};

export type SiteShell = {
	brand: Brand;
	contact: ContactInfo;
	navigation: NavItem[];
	footerTagline: string;
};
