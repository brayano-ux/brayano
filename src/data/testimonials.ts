/**
 * Aucun témoignage client n’est publié pour le moment.
 * Ajouter uniquement des avis authentiques, avec l’accord du client concerné.
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** Service ou projet concerné. */
  context: string;
  draft?: boolean;
}

export const testimonials: Testimonial[] = [];
