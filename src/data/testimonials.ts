/**
 * Témoignages clients.
 * ⚠ Tous les témoignages ci-dessous sont des EXEMPLES de mise en page (`draft: true`).
 * Les remplacer par de vrais avis, publiés avec l'accord écrit du client, puis retirer `draft`.
 * Ne jamais attribuer un texte inventé à un client réel.
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** Service ou projet concerné. */
  context: string;
  draft?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Nous avions besoin d’un site clair pour répondre aux parents. Tout a été expliqué étape par étape, et le site a été livré dans le délai annoncé.',
    name: 'Nom du client',
    role: 'Responsable d’un établissement scolaire',
    context: 'Création de site web',
    draft: true,
  },
  {
    quote:
      'Les clientes m’écrivent maintenant directement sur WhatsApp depuis les publicités. Je sais chaque semaine combien j’ai dépensé et combien de messages j’ai reçus.',
    name: 'Nom de la cliente',
    role: 'Gérante d’une boutique en ligne, Douala',
    context: 'Publicité Facebook et Instagram',
    draft: true,
  },
  {
    quote:
      'L’assistant répond le soir quand la boutique est fermée. Le matin, je retrouve les commandes notées et je n’ai plus qu’à confirmer.',
    name: 'Nom du client',
    role: 'Commerçant, utilisateur de Brayano IA',
    context: 'Brayano IA',
    draft: true,
  },
];
