import type { ImageMetadata } from 'astro';
import brayanoIa from '@/assets/projets/brayano-ia.png';
import baobab from '@/assets/projets/editions-baobab.png';
import ecole from '@/assets/projets/ecole-mother-rosa.png';

export interface Project {
  slug: string;
  name: string;
  /** Type de réalisation, affiché en étiquette. */
  kind: string;
  sector: string;
  /** Description factuelle, tirée de ce qui est visible sur le site en ligne. */
  summary: string;
  /** Ce que le visiteur du site peut faire : fonctions observables, pas de résultats supposés. */
  highlights: string[];
  skills: string[];
  url?: string;
  image?: ImageMetadata;
  imageAlt?: string;
  /**
   * `false` tant que le projet n'est pas documenté (URL, capture, description).
   * Un projet non vérifié n'est jamais affiché sur le site.
   */
  verified: boolean;
  /** Mis en avant sur la page d'accueil. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'brayano-ia',
    name: 'Brayano IA',
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
    image: brayanoIa,
    imageAlt: 'Page d’accueil de Brayano IA : titre de présentation et aperçu d’une conversation WhatsApp.',
    verified: true,
    featured: true,
  },
  {
    slug: 'editions-baobab',
    name: 'Editions Baobab',
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
    image: baobab,
    imageAlt: 'Page d’accueil des Editions Baobab : titre « Des histoires africaines qui enchantent vos enfants » et illustration d’une enfant lisant sous un baobab.',
    verified: true,
    featured: true,
  },
  {
    slug: 'ecole-mother-rosa',
    name: 'École Mother Rosa',
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
    image: ecole,
    imageAlt: 'Page d’accueil de l’École Mother Rosa : titre « Former les leaders de demain » et boutons d’inscription.',
    verified: true,
    featured: true,
  },
  {
    // À COMPLÉTER : aucune URL, capture ni description fournie. Masqué tant que `verified` vaut false.
    slug: 'petits-jobs-express',
    name: 'Petits Jobs Express',
    kind: 'Projet numérique',
    sector: 'À préciser',
    summary: 'À compléter.',
    highlights: [],
    skills: [],
    verified: false,
  },
];

export const publishedProjects = projects.filter((project) => project.verified);
export const featuredProjects = publishedProjects.filter((project) => project.featured);
