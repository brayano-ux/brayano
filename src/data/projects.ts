import type { ImageMetadata } from 'astro';
import brayanoIa from '@/assets/projets/brayano-ia.png';
import brayanoIaDashboard from '@/assets/projets/brayano-ia-tableau-de-bord.png';
import baobab from '@/assets/projets/editions-baobab.png';
import baobabCatalogue from '@/assets/projets/editions-baobab-catalogue.png';
import ecole from '@/assets/projets/ecole-mother-rosa.png';
import ecoleFilieres from '@/assets/projets/ecole-mother-rosa-filieres.png';

export interface ProjectImage {
  src: ImageMetadata;
  alt: string;
  caption?: string;
}

export interface Metric {
  label: string;
  value: string;
  note?: string;
}

export interface Project {
  slug: string;
  name: string;
  type: 'produit' | 'site' | 'campagne';
  /** Étiquette affichée sur les cartes. */
  kind: string;
  sector: string;
  /** Description factuelle, tirée de ce qui est visible en ligne ou des captures fournies. */
  summary: string;
  /** Fonctions observables, pas de résultats supposés. */
  highlights: string[];
  skills: string[];
  url?: string;
  image?: ProjectImage;
  /** Étude de cas */
  need: string;
  objective: string;
  solution: string[];
  tools: string[];
  gallery: ProjectImage[];
  /** Résultats mesurés : uniquement des chiffres documentés, avec leur source. */
  metrics: Metric[];
  metricsSource?: string;
  /** Enseignements et limites d'interprétation. */
  lessons: string[];
  /**
   * `false` tant que le projet n'est pas documenté (URL, capture, description).
   * Un projet non vérifié n'est jamais affiché sur le site.
   */
  verified: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'brayano-ia',
    name: 'Brayano IA',
    type: 'produit',
    kind: 'Produit maison',
    sector: 'Logiciel en ligne · Commerce sur WhatsApp',
    summary:
      'Assistant IA qui répond aux clients sur le numéro WhatsApp existant de l’entreprise, enregistre commandes et rendez-vous, et repasse la main au commerçant quand il le faut.',
    highlights: [
      'Réponses en français, anglais et pidgin, y compris aux messages vocaux',
      'Catalogue, commandes, rendez-vous et boîte de réception dans un tableau de bord',
      'Essai gratuit et forfaits payables par Mobile Money',
    ],
    skills: ['Conception produit', 'Développement logiciel', 'Intelligence artificielle'],
    url: 'https://brayanoia.onrender.com',
    image: {
      src: brayanoIa,
      alt: 'Page d’accueil de Brayano IA : titre de présentation et aperçu d’une conversation WhatsApp.',
    },
    need:
      'Vendre sur WhatsApp ne s’arrête jamais : les clients écrivent le soir, posent toujours les mêmes questions sur les prix, l’adresse et les horaires, et le suivi des commandes se disperse dans les discussions.',
    objective:
      'Donner une réponse rapide à chaque client, à toute heure, sans changer de numéro ni de téléphone, tout en laissant le commerçant décider de ce qui compte.',
    solution: [
      'Le commerçant relie son numéro WhatsApp en scannant un code, puis décrit son activité : produits, prix, horaires, ton à adopter. L’assistant s’en sert pour répondre, envoyer les photos des articles, noter les commandes et proposer des créneaux de rendez-vous.',
      'Un tableau de bord regroupe les conversations, les commandes, les rendez-vous et les statistiques. Le commerçant peut reprendre une discussion à tout moment : l’assistant se met alors en pause pour ce client.',
      'Les sujets sensibles restent sous contrôle : le prix négocié est calculé par le serveur dans les limites fixées, et un paiement n’est jamais confirmé par l’IA.',
    ],
    tools: ['Application web avec tableau de bord', 'Connexion à WhatsApp par code', 'Paiement par Mobile Money', 'Hébergement Render'],
    gallery: [
      {
        src: brayanoIaDashboard,
        alt: 'Tableau de bord de Brayano IA : menu latéral, conversations actives, clients à traiter et statut WhatsApp.',
        caption: 'Le tableau de bord, tel que présenté sur le site du produit.',
      },
    ],
    metrics: [],
    lessons: [
      'Le produit est en ligne et s’essaie gratuitement : le plus simple pour juger est de le tester avec votre propre activité.',
      'Aucun chiffre d’usage ou de vente n’est publié ici : les résultats dépendent du catalogue, des prix et du suivi de chaque commerçant.',
      'Brayano IA est un service indépendant, ni affilié à WhatsApp ni approuvé par WhatsApp.',
    ],
    verified: true,
    featured: true,
  },
  {
    slug: 'editions-baobab',
    name: 'Editions Baobab',
    type: 'site',
    kind: 'Site catalogue',
    sector: 'Édition · Livres pour enfants',
    summary:
      'Site d’une maison d’édition de livres illustrés camerounais pour les 4 à 10 ans : présentation de la collection, catalogue et commande directe.',
    highlights: [
      'Fiche par livre : âge conseillé, nombre de pages et d’illustrations, thèmes, prix',
      'Achat du livre au format PDF ou commande sur WhatsApp avec le titre déjà renseigné',
      'Pages Accueil, Catalogue et À propos',
    ],
    skills: ['Conception de site', 'Catalogue en ligne', 'Commande WhatsApp'],
    url: 'https://maison-dedition-co84.vercel.app',
    image: {
      src: baobab,
      alt: 'Page d’accueil des Editions Baobab : titre « Des histoires africaines qui enchantent vos enfants » et illustration d’une enfant lisant sous un baobab.',
    },
    need:
      'Présenter une collection de livres illustrés pour enfants et permettre aux parents de commander simplement, depuis leur téléphone.',
    objective:
      'Faire découvrir chaque livre en quelques secondes et réduire le chemin entre « ce livre me plaît » et « je le commande ».',
    solution: [
      'Une page d’accueil qui installe l’univers de la maison d’édition, met en avant les livres phares et explique à qui ils s’adressent.',
      'Un catalogue où chaque livre a sa fiche : tranche d’âge, nombre de pages et d’illustrations, thèmes et prix.',
      'Deux façons de commander pour chaque titre : l’achat du PDF, ou un bouton WhatsApp qui ouvre la conversation avec le nom du livre déjà écrit.',
    ],
    tools: ['Site multipage adapté au téléphone', 'Liens WhatsApp préremplis par produit', 'Hébergement Vercel'],
    gallery: [
      {
        src: baobabCatalogue,
        alt: 'Catalogue des Editions Baobab : fiches de livres avec couverture, thèmes, prix et boutons de commande.',
        caption: 'Le catalogue, avec un bouton de commande par livre.',
      },
    ],
    metrics: [],
    lessons: [
      'Pour un catalogue court, un bouton WhatsApp par produit avec le titre prérempli évite de construire un tunnel de commande complet.',
      'Aucun chiffre de fréquentation ou de vente n’est publié pour ce projet.',
    ],
    verified: true,
    featured: true,
  },
  {
    slug: 'ecole-mother-rosa',
    name: 'École Mother Rosa',
    type: 'site',
    kind: 'Site vitrine',
    sector: 'Enseignement · Melong',
    summary:
      'Site de présentation d’un établissement scolaire : identité de l’école, filières, conditions d’admission et prise de contact.',
    highlights: [
      'Filières détaillées : matières principales et débouchés',
      'Admissions : conditions, documents à fournir et calendrier',
      'Formulaire de contact et appel à l’inscription',
    ],
    skills: ['Conception de site', 'Structuration de contenu', 'Animations d’interface'],
    url: 'https://site-ecole-ten.vercel.app',
    image: {
      src: ecole,
      alt: 'Page d’accueil de l’École Mother Rosa : titre « Former les leaders de demain » sur une photo de salle de classe, et boutons d’inscription.',
    },
    need:
      'Donner à l’établissement une présence en ligne où parents et élèves trouvent les informations qu’ils demandent le plus : filières, conditions d’admission, dates et contact.',
    objective:
      'Présenter l’école de façon sérieuse et rendre la démarche d’inscription compréhensible sans avoir à se déplacer.',
    solution: [
      'Une page d’accueil qui pose l’identité de l’école, sa philosophie, son histoire et son équipe de direction.',
      'Une section Formations où chaque filière indique sa durée, ses matières principales et ses débouchés.',
      'Une section Admissions qui détaille les conditions, les documents à fournir et le calendrier, suivie d’un formulaire de contact.',
    ],
    tools: ['Site adapté au téléphone', 'Animations au défilement', 'Formulaire de contact', 'Hébergement Vercel'],
    gallery: [
      {
        src: ecoleFilieres,
        alt: 'Section Formations du site de l’École Mother Rosa : cartes des filières Sciences et Lettres.',
        caption: 'La présentation des filières.',
      },
    ],
    metrics: [],
    lessons: [
      'Pour une école, les pages les plus utiles sont les plus pratiques : admissions, documents, calendrier.',
      'Aucun chiffre de fréquentation ou d’inscription n’est publié pour ce projet.',
    ],
    verified: true,
    featured: true,
  },
  {
    slug: 'campagne-pure-molecule',
    name: 'Pure Molecule',
    type: 'campagne',
    kind: 'Campagne publicitaire',
    sector: 'Compléments alimentaires · Douala',
    summary:
      'Campagnes Facebook et Instagram dont l’objectif est de faire démarrer des conversations WhatsApp avec des personnes intéressées par les produits.',
    highlights: [
      'Publicités qui ouvrent directement une conversation WhatsApp',
      'Annonces regroupées par thème de produits pour comparer les audiences',
      'Suivi du coût par conversation dans le Gestionnaire de publicités Meta',
    ],
    skills: ['Publicité Meta', 'Ciblage d’audience', 'Suivi des résultats'],
    need:
      'Faire connaître une gamme de compléments alimentaires à Douala et recevoir les demandes directement sur WhatsApp, là où la vente se conclut.',
    objective:
      'Obtenir des conversations WhatsApp au coût le plus bas possible, et repérer les produits et les audiences qui suscitent le plus de demandes.',
    solution: [
      'Une campagne à objectif Interactions, tournée vers les messages WhatsApp, structurée en trois ensembles de publicités thématiques : stress et sommeil, os et immunité, femmes.',
      'Sept publicités au total, une par produit, afin de comparer les résultats annonce par annonce plutôt que de tout miser sur un seul visuel.',
      'Un suivi dans le Gestionnaire de publicités : conversations démarrées et coût par conversation, campagne par campagne.',
    ],
    tools: ['Gestionnaire de publicités Meta', 'Publicités « Cliquer pour WhatsApp »', 'Facebook et Instagram'],
    gallery: [],
    metrics: [
      { label: 'Conversations démarrées', value: '139', note: 'Campagne principale' },
      { label: 'Coût par conversation', value: '0,19 $', note: 'Campagne principale' },
      { label: 'Conversations démarrées', value: '23', note: 'Campagne « vitamines K2 », à 0,14 $ l’unité' },
      { label: 'Budget publicitaire', value: '40 $', note: 'Total de la période, toutes campagnes confondues' },
    ],
    metricsSource: 'Gestionnaire de publicités Meta, période du 21 octobre au 19 novembre 2026. Budget indiqué par Brayano Service.',
    lessons: [
      'Une conversation démarrée est une prise de contact, pas une vente : aucune donnée de vente n’étant disponible, aucun retour sur investissement n’est calculé.',
      'D’après les coûts par conversation, les deux campagnes détaillées représentent environ 30 $ du budget total ; le reste correspond aux autres campagnes de la période.',
      'Ces résultats valent pour cette offre, cette audience et cette période : ils ne constituent pas une promesse pour une autre campagne.',
    ],
    verified: true,
    featured: true,
  },
  {
    // MIS DE CÔTÉ à la demande du fondateur. Pour le publier : renseigner les champs puis passer `verified` à true.
    slug: 'petits-jobs-express',
    name: 'Petits Jobs Express',
    type: 'site',
    kind: 'Projet numérique',
    sector: 'À préciser',
    summary: 'À compléter.',
    highlights: [],
    skills: [],
    need: '',
    objective: '',
    solution: [],
    tools: [],
    gallery: [],
    metrics: [],
    lessons: [],
    verified: false,
  },
];

export const publishedProjects = projects.filter((project) => project.verified);
export const featuredProjects = publishedProjects.filter((project) => project.featured);
export const getProject = (slug: string) => publishedProjects.find((project) => project.slug === slug);
export const projectPath = (project: Project) => `/realisations/${project.slug}`;
