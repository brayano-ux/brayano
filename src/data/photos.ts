import type { ImageMetadata } from 'astro';
import type { ServiceSlug } from './services';

/**
 * Photographies du site.
 * Chaque photo provient d'une banque d'images sous licence libre : son auteur, sa licence et sa source
 * sont renseignés ici et repris automatiquement dans les mentions légales.
 * Un emplacement sans photo affiche un fond neutre : le site reste publiable.
 */
export type PhotoKey = 'hero' | 'campagne' | ServiceSlug;

export interface Photo {
  src: ImageMetadata;
  alt: string;
  credit: {
    author: string;
    license: string;
    licenseUrl?: string;
    /** Page d'origine de la photo. */
    source: string;
  };
}

export const photos: Partial<Record<PhotoKey, Photo>> = {};
