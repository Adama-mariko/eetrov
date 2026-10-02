import type {
	Brand,
	ContactInfo,
	ContactPageContent,
	EntityId,
	EntityPageContent,
	EntityPortal,
	HomePageContent,
	NavItem,
	SiteShell,
	Testimonial
} from './types';

const WEB = {
	cabinet: 'https://www.ecoversiongroup.com/',
	ong: 'https://www.ecoversion.org/',
	eetroov: 'https://www.eetroov.org/'
} as const;

export default class SiteContentService {
	getShell(): SiteShell {
		return {
			brand: this.getBrand(),
			contact: this.getContact(),
			navigation: this.getNavigation(),
			footerTagline:
				'Conseil, impact social et formations — un même engagement pour la durabilité en Afrique et au-delà.'
		};
	}

	getBrand(): Brand {
		return {
			name: 'ECOVERSION',
			tagline: 'Savoir est un Pouvoir',
			slogan: 'Transformer les territoires par le conseil, l’action et la formation',
			intro:
				'ECOVERSION réunit un cabinet de conseil en développement durable, une ONG de terrain et un centre de formations (EETROOV). Ensemble, nous accompagnons entreprises, collectivités et citoyens vers des pratiques responsables et performantes.'
		};
	}

	getContact(): ContactInfo {
		return {
			address: 'BP 53',
			city: 'Akoupé, Côte d’Ivoire',
			phones: [
				{ label: 'Mobile', number: '+225 07 07 77 71 99', tel: '+2250707777199' },
				{ label: 'Fixe', number: '+225 01 01 05 06 82', tel: '+2250101050682' }
			],
			whatsapp: {
				label: 'WhatsApp',
				number: '+225 07 07 77 71 99',
				waMe: '2250707777199'
			},
			emails: [
				{ label: 'Cabinet — ECOVERSION Group', address: 'contact@ecoversiongroup.com' },
				{ label: 'ONG — ECOVERSION', address: 'ongecoversion@gmail.com' },
				{ label: 'Formations — EETROOV', address: 'info@eetroov.org' }
			],
			leadership: {
				name: 'Rodolphe GBELE',
				role: 'Directeur général',
				bio: 'Porte la vision d’un écosystème où expertise conseil, engagement associatif et transmission des savoirs agricoles renforcent la résilience des territoires.'
			},
			hours: 'Lundi – vendredi, 8h – 17h (GMT)'
		};
	}

	getNavigation(): NavItem[] {
		return [
			{ label: 'Accueil', href: '/' },
			{
				label: 'Cabinet',
				href: '/cabinet',
				externalUrl: WEB.cabinet
			},
			{ label: 'ONG', href: '/ong', externalUrl: WEB.ong },
			{ label: 'Formations', href: '/formations', externalUrl: WEB.eetroov },
			{ label: 'Contact', href: '/contact' }
		];
	}

	getEntities(): EntityPortal[] {
		return [this.getEntity('cabinet'), this.getEntity('ong'), this.getEntity('eetroov')];
	}

	getEntity(id: EntityId): EntityPortal {
		const map: Record<EntityId, EntityPortal> = {
			cabinet: {
				id: 'cabinet',
				name: 'ECOVERSION Group',
				shortName: 'Cabinet conseil',
				websiteUrl: WEB.cabinet,
				landingPath: '/cabinet',
				tagline: 'Audits, conseil et formations certifiantes pour organisations exigeantes',
				description:
					'Cabinet spécialisé en développement durable : diagnostic, stratégie, coaching et montée en compétences. Accompagnement SGI, conformité et dispositifs de financement de la formation (FDFP).',
				mission:
					'Permettre aux organisations de concilier performance économique, exigences réglementaires et impact positif sur l’environnement et les personnes.',
				audience: 'Entreprises, industries, institutions, ONG partenaires et dirigeants',
				highlights: [
					'Audits environnementaux et sociaux',
					'Conseil stratégique & conduite du changement',
					'Coaching de managers et équipes',
					'Formations certifiantes et plans FDFP',
					'Systèmes de management intégrés (qualité, environnement, sécurité)'
				],
				services: [
					'Diagnostic initial et feuille de route RSE',
					'Accompagnement certification et audits de suivi',
					'Ateliers sur mesure en entreprise',
					'Abonnements conseil et assistance continue'
				],
				ctaLabel: 'Visiter ecoversiongroup.com',
				ctaSecondaryLabel: 'Demander un devis',
				accentClass: 'from-teal-800 to-emerald-950'
			},
			ong: {
				id: 'ong',
				name: 'ECOVERSION ONG',
				shortName: 'Impact social',
				websiteUrl: WEB.ong,
				landingPath: '/ong',
				tagline: 'Durabilité, droits humains et action communautaire',
				description:
					'Organisation créée en 2022 pour porter des projets concrets en faveur de l’environnement, de l’inclusion et de la cohésion sociale, en Côte d’Ivoire et avec des partenaires internationaux.',
				mission:
					'Mobiliser les communautés, sensibiliser les jeunes et déployer des initiatives durables qui améliorent le quotidien des populations vulnérables.',
				audience: 'Communautés locales, bénévoles, donateurs, partenaires institutionnels',
				highlights: [
					'Projets environnementaux et agricoles',
					'Sensibilisation éducative',
					'Plaidoyer droits humains & inclusion',
					'Campagnes de mobilisation citoyenne',
					'Transparence et redevabilité'
				],
				services: [
					'Programmes de reboisement et gestion des déchets',
					'Appui aux groupements de producteurs',
					'Actions de sensibilisation en milieu scolaire',
					'Collectes et partenariats de mécénat'
				],
				ctaLabel: 'Visiter ecoversion.org',
				ctaSecondaryLabel: 'Soutenir l’ONG',
				accentClass: 'from-green-800 to-emerald-900'
			},
			eetroov: {
				id: 'eetroov',
				name: 'EETROOV',
				shortName: 'Formations',
				websiteUrl: WEB.eetroov,
				landingPath: '/formations',
				tagline: 'Agriculture durable & compétences pour demain',
				description:
					'Plateforme de formations portée par ECOVERSION Group : pratiques agricoles responsables, certification et entrepreneuriat vert, pour transformer les filières et les carrières.',
				mission:
					'Diffuser des savoirs actionnables — du champ à l’entreprise — pour une agriculture productive, résiliente et respectueuse des écosystèmes.',
				audience: 'Agriculteurs, techniciens, entrepreneurs agricoles, structures de formation',
				highlights: [
					'Modules agriculture durable et agroécologie',
					'Parcours certifiants reconnus',
					'Formations présentielles et blended',
					'Accompagnement à la mise en pratique',
					'Inscription et paiement simplifiés'
				],
				services: [
					'Formation continue et initiale',
					'Ateliers techniques (sols, eau, phyto responsable)',
					'Modules management de la qualité agricole',
					'Passerelles vers l’emploi et l’auto-entrepreneuriat'
				],
				ctaLabel: 'Visiter eetroov.org',
				ctaSecondaryLabel: 'S’inscrire à une formation',
				accentClass: 'from-lime-800 to-green-950'
			}
		};
		return map[id];
	}

	getHomePage(): HomePageContent {
		const testimonialItems = this.getTestimonials();
		return {
			hero: {
				eyebrow: 'ECOVERSION · ONG · EETROOV',
				title: 'Accélérez votre impact durable, du conseil à la formation.',
				subtitle:
					'Une offre unifiée pour structurer votre RSE, mener des actions sur le terrain et former vos équipes — avec la conviction que le savoir est un pouvoir.',
				primaryCta: { label: 'Explorer nos solutions', href: '#solutions' },
				secondaryCta: { label: 'Demander une démo', href: '/contact' }
			},
			solutions: {
				title: 'Renforcez votre organisation grâce à des expertises complémentaires',
				subtitle:
					'Tout ce dont vous avez besoin pour auditer, agir et former — cabinet conseil, ONG et campus EETROOV.'
			},
			why: {
				eyebrow: 'Pourquoi ECOVERSION',
				title: 'La référence que nos clients attendent',
				body: 'Des équipes formées, des livrables clairs, un ancrage terrain et un suivi dans la durée — du diagnostic à la mise en pratique, pour l’entreprise comme pour la communauté.',
				link: { label: 'En savoir plus', href: '/cabinet' },
				features: [
					{
						title: 'Expertise certifiée',
						description: 'Audits, SGI et formations alignées sur les standards internationaux.',
						icon: 'material-symbols:verified-outline'
					},
					{
						title: 'Impact mesurable',
						description: 'Indicateurs, rapports et transparence pour l’ONG et les partenaires.',
						icon: 'material-symbols:monitoring-outline'
					},
					{
						title: 'Ancrage ivoirien',
						description: 'Akoupé et réseaux nationaux — compréhension fine des réalités locales.',
						icon: 'material-symbols:public-outline'
					},
					{
						title: 'Accompagnement 360°',
						description: 'Conseil, action associative et montée en compétences via EETROOV.',
						icon: 'material-symbols:hub-outline'
					}
				]
			},
			serviceOffers: {
				intro: {
					title: 'Une réponse à chaque besoin',
					subtitle:
						'Du conseil stratégique à la formation agricole, en passant par l’impact social — choisissez le parcours adapté.'
				},
				items: [
					{
						title: 'Audit & conseil RSE',
						description: 'Diagnostic, feuille de route et accompagnement certification.',
						href: '/cabinet',
						linkLabel: 'Cabinet',
						imageIndex: 0
					},
					{
						title: 'Agriculture durable',
						description: 'Formations EETROOV et mise en pratique sur le terrain.',
						href: '/formations',
						linkLabel: 'Formations',
						imageIndex: 1
					},
					{
						title: 'Projets ONG',
						description: 'Environnement, éducation et inclusion — agir avec les communautés.',
						href: '/ong',
						linkLabel: 'ONG',
						imageIndex: 2
					},
					{
						title: 'Corporate & PME',
						description: 'Performance durable et dispositifs FDFP pour vos équipes.',
						href: '/cabinet',
						linkLabel: 'Demander un devis',
						imageIndex: 3,
						imageFit: 'contain'
					},
					{
						title: 'Formations certifiantes',
						description: 'Parcours modulaires, présentiel ou blended.',
						href: 'https://www.eetroov.org/',
						linkLabel: 'eetroov.org',
						imageIndex: 4
					},
					{
						title: 'Mécénat & partenariats',
						description: 'Co-construire des programmes à impact avec l’ONG.',
						href: '/ong',
						linkLabel: 'Soutenir',
						imageIndex: 5
					}
				]
			},
			featured: {
				intro: {
					title: 'Parcours phares',
					subtitle:
						'Des formats structurés issus de nos sites ecoversiongroup.com, ecoversion.org et eetroov.org.'
				},
				items: [
					{
						title: 'Fondamentaux agroécologie',
						badge: 'EETROOV',
						meta: '5 jours · Présentiel',
						detail: 'Sols vivants, eau, intrants responsables — plan de transition parcelle.',
						href: '/formations',
						imageIndex: 0
					},
					{
						title: 'Pack diagnostic RSE',
						badge: 'Cabinet',
						meta: '2–4 semaines',
						detail: 'Cartographie des écarts et priorisation des actions.',
						href: '/cabinet',
						imageIndex: 1
					},
					{
						title: 'Programme jeunesse & environnement',
						badge: 'ONG',
						meta: 'Sur mesure',
						detail: 'Sensibilisation, ateliers et suivi communautaire.',
						href: '/ong',
						imageIndex: 2
					}
				]
			},
			partnerInvite: {
				title: 'Renforcez l’impact avec nous',
				body: 'Entreprises, institutions, donateurs et centres de formation : co-créons des programmes durables en Côte d’Ivoire.',
				primary: { label: 'Devenir partenaire', href: '/contact' },
				secondary: { label: 'Visiter ecoversion.org', href: 'https://www.ecoversion.org/' }
			},
			stats: [
				{
					value: '3',
					label: 'Pôles intégrés',
					detail: 'Conseil, impact social et formations certifiantes, orchestrés par un même groupe.'
				},
				{
					value: '100+',
					label: 'Organisations accompagnées',
					detail: 'PME, industries, collectivités et partenaires associatifs.'
				},
				{
					value: '2022',
					label: 'Engagement ONG',
					detail: 'Des projets concrets pour l’environnement et les communautés ivoiriennes.'
				}
			],
			midCta: {
				title: 'Prêt à transformer votre territoire ou votre entreprise ?',
				primary: { label: 'Parler à un expert', href: '/contact' },
				secondary: { label: 'Voir les formations', href: '/formations' }
			},
			sectors: {
				intro: {
					title: 'Stimuler la transition dans tous les secteurs',
					subtitle:
						'Des PME aux institutions, nos méthodes s’adaptent à vos enjeux environnementaux, sociaux et humains.'
				},
				items: [
					{
						title: 'Agro-industrie & filières',
						description:
							'Audits, traçabilité et bonnes pratiques agricoles pour sécuriser vos chaînes de valeur.',
						icon: 'material-symbols:agriculture-outline'
					},
					{
						title: 'Industrie & PME',
						description:
							'Conseil RSE, systèmes de management et plans de formation FDFP pour performer durablement.',
						icon: 'material-symbols:factory-outline'
					},
					{
						title: 'Collectivités & territoires',
						description:
							'Programmes locaux, sensibilisation et résilience écologique avec les populations.',
						icon: 'material-symbols:location-city-outline'
					},
					{
						title: 'ONG & société civile',
						description:
							'Co-construction de projets, mécénat et suivi d’impact pour vos actions de terrain.',
						icon: 'material-symbols:volunteer-activism-outline'
					},
					{
						title: 'Éducation & jeunesse',
						description:
							'Ateliers, formations courtes et parcours certifiants via EETROOV.',
						icon: 'material-symbols:school-outline'
					},
					{
						title: 'Commerce & services',
						description:
							'Accompagnement opérationnel, coaching d’équipes et démarches qualité-environnement.',
						icon: 'material-symbols:storefront-outline'
					}
				]
			},
			testimonials: {
				title: 'Ils nous font confiance',
				subtitle:
					'Dirigeants, responsables QHSE et leaders associatifs qui collaborent avec ECOVERSION au quotidien.'
			},
			testimonialItems,
			trustOrganizations: [
				...new Set(testimonialItems.map((t) => t.organization))
			],
			partners: {
				title: 'Notre écosystème',
				subtitle: 'Secteurs publics, privés, académiques et associatifs.'
			},
			partnerItems: [
				{ name: 'Collectivités & préfectures', type: 'Secteur public' },
				{ name: 'PME & industries', type: 'Secteur privé' },
				{ name: 'Organisations de la société civile', type: 'OSC' },
				{ name: 'Centres de formation', type: 'Éducation' },
				{ name: 'Coopératives agricoles', type: 'Filières' },
				{ name: 'Partenaires internationaux', type: 'Réseau' }
			],
			faq: {
				title: 'Questions fréquentes',
				subtitle:
					'Tout ce qu’il faut savoir sur ECOVERSION Group, l’ONG et les formations EETROOV.'
			},
			faqItems: [
				{
					q: 'Comment démarrer avec ECOVERSION ?',
					a: 'Contactez-nous via la page Contact ou le pôle qui vous correspond (cabinet, ONG, formations). Nous cadrons votre besoin et proposons un plan d’action ou un parcours adapté.'
				},
				{
					q: 'Quelle est la différence entre le cabinet, l’ONG et EETROOV ?',
					a: 'Le cabinet conseille les organisations ; l’ONG mène des actions sociales et environnementales ; EETROOV forme et certifie autour de l’agriculture durable. Les trois sont complémentaires.'
				},
				{
					q: 'Comment accéder aux sites officiels ?',
					a: 'Depuis l’accueil ou le menu, utilisez les liens vers ecoversiongroup.com, ecoversion.org et eetroov.org.'
				},
				{
					q: 'Proposez-vous des formations finançables (FDFP) ?',
					a: 'Oui — ECOVERSION Group accompagne la montée en compétences et les dispositifs de financement de la formation pour les entreprises éligibles.'
				},
				{
					q: 'Puis-je soutenir l’ONG ou m’inscrire à une formation en ligne ?',
					a: 'Oui. Utilisez les boutons « Soutenir l’ONG » ou « S’inscrire » sur les pages dédiées, ou contactez-nous pour un accompagnement personnalisé.'
				},
				{
					q: 'Où êtes-vous basés ?',
					a: 'Siège administratif à Akoupé (Côte d’Ivoire), interventions sur l’ensemble du territoire et avec des partenaires à l’international.'
				}
			],
			finalCta: {
				title: 'Passez à l’action en toute simplicité',
				subtitle:
					'Choisissez votre univers — conseil, impact ou formation — et échangez avec nos équipes dès aujourd’hui.',
				primary: { label: 'Prendre contact', href: '/contact' },
				secondary: { label: 'Découvrir le cabinet', href: '/cabinet' }
			},
			pillars: [],
			whyUs: { title: '', paragraphs: [], bullets: [] },
			commitment: {
				title: '',
				body: '',
				cta: { label: '', href: '/contact' }
			}
		};
	}

	getTestimonials(): Testimonial[] {
		// Remplacer par de vrais témoignages clients lorsque validés par ECOVERSION.
		return [
			{
				quote:
					'ECOVERSION nous a aidés à structurer notre démarche environnementale avec des outils simples et un plan d’action réaliste.',
				name: 'Marie-Claire Kouassi',
				role: 'Directrice QHSE',
				organization: 'Groupe agro-industriel · Abidjan'
			},
			{
				quote:
					'Les formations EETROOV ont changé nos pratiques sur le terrain : moins d’intrants, de meilleurs rendements.',
				name: 'Yao N’Drin',
				role: 'Président du bureau',
				organization: 'Coopérative agricole des Lagunes'
			},
			{
				quote:
					'Une ONG proche des réalités locales, transparente et orientée résultats pour les jeunes et les femmes.',
				name: 'Aminata Diarra',
				role: 'Coordinatrice de programmes',
				organization: 'Partenariat éducation & environnement · Akoupé'
			},
			{
				quote:
					'Le cabinet a su traduire nos objectifs RSE en actions concrètes, avec un suivi régulier et des équipes mobilisées.',
				name: 'Jean-Baptiste Aka',
				role: 'Directeur général adjoint',
				organization: 'PME industrie & services · Yamoussoukro'
			},
			{
				quote:
					'Des formateurs ancrés sur le terrain : nos techniciens appliquent dès le lendemain ce qu’ils apprennent en session.',
				name: 'Salimata Bamba',
				role: 'Responsable formation',
				organization: 'Structure d’appui aux filières agricoles'
			},
			{
				quote:
					'Un interlocuteur unique entre conseil, impact social et montée en compétences — gagnant pour nos projets territoriaux.',
				name: 'Koffi Mensah',
				role: 'Directeur de projet',
				organization: 'Programme développement local · Sud-Comoé'
			}
		];
	}

	getEntityPage(id: EntityId): EntityPageContent {
		const entity = this.getEntity(id);
		const sharedFaq = [
			{
				q: 'Comment accéder au site officiel ?',
				a: `Cliquez sur « ${entity.ctaLabel} » : vous serez redirigé vers ${entity.websiteUrl.replace('https://', '')}.`
			},
			{
				q: 'Puis-je vous contacter directement ?',
				a: 'Oui — utilisez la page Contact ou l’e-mail dédié à votre univers (cabinet, ONG ou formations).'
			}
		];

		if (id === 'cabinet') {
			return {
				entity,
				presentation: {
					heroEyebrow: 'Cabinet · Conseil · Certification',
					stats: [
						{
							value: 'SGI',
							label: 'Systèmes intégrés',
							detail: 'Qualité, environnement et sécurité pilotés avec des outils digitaux.'
						},
						{
							value: 'FDFP',
							label: 'Plans de formation',
							detail: 'Montage et financement de parcours adaptés à vos équipes.'
						},
						{
							value: 'RSE',
							label: 'Performance durable',
							detail: 'Audits, feuilles de route et coaching pour dirigeants.'
						}
					],
					mission: {
						title: 'Notre engagement cabinet',
						subtitle:
							'Concilier compétitivité, conformité réglementaire et impact positif — avec des livrables concrets.'
					},
					crossLinks: {
						title: 'Au-delà du conseil',
						subtitle:
							'L’ONG porte l’impact terrain ; EETROOV forme les acteurs. Découvrez les autres branches du groupe.'
					},
					action: {
						title: 'Lancer votre projet conseil',
						subtitle: 'Devis, abonnement ou premier échange avec un consultant ECOVERSION Group.'
					},
					cta: {
						title: 'Parler à un expert cabinet',
						subtitle: 'Visitez ecoversiongroup.com ou demandez une proposition sur mesure.'
					},
					footerNote:
						'ECOVERSION Group — votre partenaire audits, SGI et stratégie RSE en Côte d’Ivoire et avec vos filières internationales.'
				},
				sections: [
					{
						id: 'expertise',
						eyebrow: 'Expertise',
						title: 'Une expertise cabinet au service de votre performance durable',
						paragraphs: [
							'ECOVERSION Group accompagne les organisations qui veulent avancer concrètement sur l’environnement, la qualité et la responsabilité sociale — sans sacrifier la compétitivité.',
							'De l’audit initial au plan d’actions, en passant par le coaching des équipes et les formations certifiantes, nous restons à vos côtés dans la durée.'
						],
						items: entity.highlights
					},
					{
						id: 'offres',
						eyebrow: 'Offres',
						title: 'Nos offres phares',
						paragraphs: [
							'Des prestations modulaires ou en abonnement, adaptées à votre maturité RSE et à vos contraintes opérationnelles.'
						],
						items: entity.services
					}
				],
				faq: [
					...sharedFaq,
					{
						q: 'Travaillez-vous avec les PME ?',
						a: 'Oui — nos méthodes sont scalables, de la TPE à la grande organisation.'
					}
				]
			};
		}

		if (id === 'ong') {
			return {
				entity,
				presentation: {
					heroEyebrow: 'ONG · Solidarité · Territoires',
					stats: [
						{
							value: '2022',
							label: 'Année de création',
							detail: 'Une organisation née pour l’action de proximité et la transparence.'
						},
						{
							value: 'Jeunesse',
							label: 'Éducation & environnement',
							detail: 'Sensibilisation, ateliers et projets avec les communautés.'
						},
						{
							value: 'Mécénat',
							label: 'Partenaires engagés',
							detail: 'Entreprises et donateurs co-construisent des programmes durables.'
						}
					],
					mission: {
						title: 'Notre engagement associatif',
						subtitle:
							'Des interventions utiles aux bénéficiaires, mesurées dans le temps — au-delà de la simple sensibilisation.'
					},
					crossLinks: {
						title: 'Compléter votre impact',
						subtitle:
							'Le cabinet structure vos projets ; EETROOV forme les acteurs de terrain. Explorez les autres pôles.'
					},
					action: {
						title: 'Soutenir l’ONG',
						subtitle: 'Don, mécénat ou partenariat de programme — chaque geste compte.'
					},
					cta: {
						title: 'Rejoindre l’aventure ECOVERSION ONG',
						subtitle: 'Découvrez les campagnes en cours sur ecoversion.org.'
					},
					footerNote:
						'ECOVERSION ONG — action communautaire, droits humains et environnement, depuis la Côte d’Ivoire.'
				},
				sections: [
					{
						id: 'engagement',
						eyebrow: 'Terrain',
						title: 'Agir là où le besoin est le plus urgent',
						paragraphs: [
							'ECOVERSION ONG déploie des actions visibles : environnement, éducation, inclusion et soutien aux communautés rurales et périurbaines.',
							'Chaque projet est pensé avec les bénéficiaires, mesuré dans le temps et ouvert aux partenariats de mécénat.'
						],
						items: entity.highlights
					},
					{
						id: 'agir',
						eyebrow: 'S’engager',
						title: 'Comment vous pouvez agir',
						paragraphs: [
							'Bénévolat, don, mécénat d’entreprise ou co-construction de programmes : plusieurs façons de renforcer notre impact.'
						],
						items: entity.services
					}
				],
				faq: [
					...sharedFaq,
					{
						q: 'Comment soutenir financièrement ?',
						a: 'Rendez-vous sur ecoversion.org ou contactez-nous pour un don ciblé sur un programme.'
					}
				]
			};
		}

		return {
			entity,
			presentation: {
				heroEyebrow: 'Campus · Agriculture · Certifications',
				stats: [
					{
						value: '100%',
						label: 'Gratuit en ligne',
						detail: 'Modules accessibles pour renforcer les capacités des acteurs de la durabilité.'
					},
					{
						value: '14+',
						label: 'Thématiques',
						detail: 'BPA, agroécologie, SST, cartographie, durabilité cacao…'
					},
					{
						value: 'Pro',
						label: 'Formateurs experts',
						detail: 'Praticiens reconnus des filières agricoles et des programmes certification.'
					}
				],
				mission: {
					title: 'Notre pédagogie',
					subtitle:
						'Des savoirs du champ à l’entreprise — applicables dès la fin de chaque module.'
				},
				programs: {
					title: 'Parcours certifiants à la une',
					subtitle: 'Sessions courtes ou longues — présentiel, blended ou 100 % en ligne sur eetroov.org.'
				},
				crossLinks: {
					title: 'Dans l’écosystème ECOVERSION',
					subtitle:
						'Le cabinet audite et conseille ; l’ONG déploie l’impact social. Découvrez comment ces pôles se complètent.'
				},
				action: {
					title: 'Commencer une formation',
					subtitle: 'Inscription en ligne ou accompagnement par l’équipe EETROOV.'
				},
				cta: {
					title: 'Accéder au catalogue EETROOV',
					subtitle: 'Parcourir les modules et s’inscrire sur eetroov.org.'
				},
				footerNote:
					'EETROOV — la plateforme formations agriculture durable et programmes de certification, par ECOVERSION Group.'
			},
			sections: [
				{
					id: 'pedagogie',
					eyebrow: 'Pédagogie',
					title: 'Former autrement — ancré dans le réel',
					paragraphs: [
						'EETROOV propose des formations conçues avec des praticiens : agriculture durable, gestion des ressources, qualité et insertion professionnelle.',
						'Les apprenants repartent avec des outils applicables immédiatement sur leurs exploitations ou structures.'
					],
					items: entity.highlights
				},
				{
					id: 'catalogue',
					eyebrow: 'Catalogue',
					title: 'Thématiques de formation',
					paragraphs: [
						'Catalogue évolutif — consultez eetroov.org pour les sessions ouvertes et les modalités d’inscription.'
					],
					items: entity.services
				}
			],
			programs: [
				{
					title: 'Fondamentaux agroécologie',
					duration: '5 jours',
					outcome: 'Pratiques de base et plan de transition parcelle'
				},
				{
					title: 'Gestion de la qualité agricole',
					duration: '3 jours',
					outcome: 'Traçabilité et contrôles essentiels'
				},
				{
					title: 'Entrepreneuriat agricole',
					duration: '10 jours',
					outcome: 'Business plan et accès au marché'
				}
			],
			faq: [
				...sharedFaq,
				{
					q: 'Comment m’inscrire ?',
					a: 'Sur eetroov.org ou via notre équipe formations à info@eetroov.org.'
				}
			]
		};
	}

	getContactPage(): ContactPageContent {
		return {
			title: 'Parlons de vos besoins',
			intro:
				'Une question, un devis, un projet ou une formation ? Écrivez-nous — nous vous répondons rapidement.',
			formTopics: [
				{ value: 'cabinet', label: 'Cabinet — audit, conseil, devis' },
				{ value: 'ong', label: 'ONG — partenariat, mécénat, bénévolat' },
				{ value: 'eetroov', label: 'Formations EETROOV — inscription, catalogue' },
				{ value: 'autre', label: 'Autre demande' }
			]
		};
	}
}
