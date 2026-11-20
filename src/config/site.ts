/**
 * Configuration centrale de Brayano Service.
 * Toute coordonnée, tout lien social et tout message WhatsApp se modifie ici.
 */

export const site = {
  name: 'Brayano Service',
  tagline: 'Solutions numériques',
  description:
    'Sites web, publicité Facebook et Instagram, intelligence artificielle et logiciels sur mesure pour les entreprises, depuis Douala.',
  locale: 'fr-CM',
  city: 'Douala',
  country: 'Cameroun',
  countryCode: 'CM',

  founder: {
    fullName: 'Brayan Ulrich Nzomo Kameni',
    alias: 'Brayano',
    role: 'Fondateur',
  },
  /** Forme de l'activité, telle que déclarée par le fondateur. */
  legalForm: 'Entreprise individuelle',

  contact: {
    /** Numéro local à 9 chiffres ; l'indicatif est ajouté par `toInternational`. */
    phoneLocal: '683260520',
    phoneCountryCode: '237',
    phoneDisplay: '+237 683 26 05 20',
    email: 'brayanodev@gmail.com',
  },

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/brayan-ulrich-38818b374/' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61591849927534' },
    { label: 'TikTok · Brayano Tech', href: 'https://www.tiktok.com/@brayanotech' },
    { label: 'TikTok · Brayano Service', href: 'https://www.tiktok.com/@brayano.service' },
  ],

  product: {
    name: 'Brayano IA',
    url: 'https://brayanoia.onrender.com',
    pricingUrl: 'https://brayanoia.onrender.com/#tarifs',
    signupUrl: 'https://brayanoia.onrender.com/app/?inscription',
  },
} as const;

/**
 * Mode démonstration.
 * Les contenus marqués `draft: true` (témoignages, prix, réponses de FAQ, programme…) sont des EXEMPLES
 * en attente de données vérifiées. Ils ne s'affichent que si ce mode est actif, avec une étiquette
 * « Exemple » et un bandeau d'avertissement, et les pages ne sont alors pas indexables par Google.
 * Actif en développement ; en production, uniquement avec PUBLIC_SHOW_DRAFTS=true.
 */
export const showDrafts: boolean =
  import.meta.env.PUBLIC_SHOW_DRAFTS === 'true' || (import.meta.env.DEV && import.meta.env.PUBLIC_SHOW_DRAFTS !== 'false');

/** Garde les éléments vérifiés, et les exemples seulement en mode démonstration. */
export function published<T extends { draft?: boolean }>(items: readonly T[]): T[] {
  return items.filter((item) => !item.draft || showDrafts);
}

/** Messages préremplis, un par intention commerciale. */
export const whatsappMessages = {
  general: 'Bonjour Brayano Service, je souhaite vous présenter un projet.',
  devis: 'Bonjour Brayano Service, je souhaite obtenir un devis pour mon projet.',
  site: "Bonjour Brayano Service, je souhaite discuter de la création d'un site web pour mon activité.",
  publicite:
    'Bonjour Brayano Service, je souhaite obtenir des informations sur vos services de publicité Facebook et Instagram.',
  logiciel: 'Bonjour Brayano Service, je souhaite vous présenter un projet de logiciel ou d’application.',
  automatisation:
    'Bonjour Brayano Service, je souhaite identifier les tâches que je peux automatiser dans mon entreprise.',
  google: 'Bonjour Brayano Service, je souhaite améliorer la visibilité de mon entreprise sur Google.',
  brayanoIa: "Bonjour, je souhaite découvrir Brayano IA et comprendre comment l'utiliser pour mon entreprise.",
  formation:
    'Bonjour, je souhaite obtenir des informations sur votre formation pratique en intelligence artificielle.',
} as const;

export type WhatsAppIntent = keyof typeof whatsappMessages;

/** Navigation principale (en-tête). */
export const navigation = [
  { label: 'Services', href: '/services' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Brayano IA', href: '/brayano-ia' },
  { label: 'À propos', href: '/a-propos' },
] as const;

/** Liens complémentaires du pied de page. */
export const footerNavigation = [
  { label: 'Formation pratique en IA', href: '/formation-ia' },
  { label: 'Questions fréquentes', href: '/faq' },
  { label: 'Contact et devis', href: '/contact' },
] as const;

export const legalNavigation = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Confidentialité', href: '/confidentialite' },
] as const;

/** Hébergeur du site, cité dans les mentions légales. */
export const hosting = {
  name: 'Vercel Inc.',
  address: '440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis',
  url: 'https://vercel.com',
} as const;
