import type { ImageMetadata } from 'astro';
import type { ServiceSlug } from './services';
import hero from '@/assets/photos/hero.jpg';
import campagne from '@/assets/photos/campagne.jpg';
import formationIa from '@/assets/photos/formation-ia.png';
import sitesWeb from '@/assets/photos/sites-web.png';
import publicite from '@/assets/photos/publicite.png';
import logiciels from '@/assets/photos/logiciels.png';
import automatisationIa from '@/assets/photos/automatisation-ia.png';
import visibiliteGoogle from '@/assets/photos/visibilite-google.png';

/**
 * Images d'illustration du site.
 * - Les photos issues de Wikimedia Commons portent un `credit` (auteur, licence, source), repris
 *   automatiquement dans les mentions légales : la licence CC BY impose de citer l'auteur.
 * - Les images sans `credit` ont été fournies par Brayano Service, qui en assume les droits d'utilisation.
 * Un emplacement sans image affiche un fond neutre : le site reste publiable.
 */
export type PhotoKey = 'hero' | 'campagne' | ServiceSlug;

export interface Photo {
  src: ImageMetadata;
  alt: string;
  /** « contain » montre l'image entière (utile quand elle contient du texte), sur la couleur `background`. */
  fit?: 'cover' | 'contain';
  background?: string;
  credit?: {
    title: string;
    author: string;
    license: string;
    licenseUrl: string;
    /** Page d'origine de la photo. */
    source: string;
  };
}

const ccBy2 = { license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/' };

export const photos: Partial<Record<PhotoKey, Photo>> = {
  hero: {
    src: hero,
    alt: 'Deux personnes se serrent la main au-dessus d’un ordinateur portable.',
    credit: {
      title: 'Agreeing on a business plan at home',
      author: 'Shixart1985',
      ...ccBy2,
      source: 'https://commons.wikimedia.org/wiki/File:Agreeing_on_a_business_plan_at_home.jpg',
    },
  },
  'formation-ia': {
    src: formationIa,
    alt: 'Des mains tapent sur le clavier d’un ordinateur portable, dans une salle où d’autres personnes travaillent sur ordinateur.',
  },
  campagne: {
    src: campagne,
    alt: 'Une personne assise tient un smartphone à deux mains, un ordinateur portable posé à côté d’elle.',
    credit: {
      title: 'Businessman holds smartphone while sitting with a laptop closeup',
      author: 'Shixart1985',
      ...ccBy2,
      source: 'https://commons.wikimedia.org/wiki/File:Businessman_holds_smartphone_while_sitting_with_a_laptop_closeup.jpg',
    },
  },
  'sites-web': {
    src: sitesWeb,
    alt: 'Des mains sur le clavier d’un ordinateur portable dont l’écran affiche la création d’un site internet professionnel.',
  },
  publicite: {
    src: publicite,
    alt: 'Visuel « Campagne publicitaire Facebook et Instagram Ads » avec les logos des deux réseaux.',
    fit: 'contain',
    background: '#0d2f5f',
  },
  logiciels: {
    src: logiciels,
    alt: 'Illustration d’un ordinateur portable affichant des tableaux de bord, avec la mention « Logiciel sur mesure ».',
  },
  'automatisation-ia': {
    src: automatisationIa,
    alt: 'Des mains tapent sur un ordinateur portable ; des interfaces d’agents IA sont affichées en surimpression.',
  },
  'visibilite-google': {
    src: visibiliteGoogle,
    alt: 'Une loupe posée devant la page d’accueil de Google.',
  },
};

/** Photos à créditer dans les mentions légales. */
export const creditedPhotos = Object.values(photos).filter((photo) => photo.credit !== undefined);
