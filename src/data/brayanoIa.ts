/**
 * Contenu de la section Brayano IA.
 * Toutes les capacités listées proviennent de la liste de fonctionnalités fournie par le fondateur.
 */
export const brayanoIa = {
  headline: 'Votre entreprise ne s’arrête pas quand vous êtes occupé. Votre assistant non plus.',
  intro:
    'Brayano IA est notre assistant pour les entreprises qui vendent sur WhatsApp. Il se branche sur votre numéro actuel, répond à partir des informations que vous lui donnez et vous laisse la main sur chaque conversation.',
  capabilities: [
    {
      title: 'Répond à toute heure, dans la langue du client',
      text: 'Français, anglais ou pidgin, par écrit comme en message vocal, sur WhatsApp ou WhatsApp Business.',
    },
    {
      title: 'Présente vos produits et vos prix',
      text: 'Il s’appuie sur votre catalogue et vos horaires, et envoie les photos des articles demandés.',
    },
    {
      title: 'Enregistre commandes et rendez-vous',
      text: 'Chaque commande ou créneau réservé arrive dans votre tableau de bord, avec une alerte par e-mail.',
    },
    {
      title: 'Vous repasse la main au bon moment',
      text: 'Réclamation, demande particulière ou doute : il vous prévient. Un paiement n’est jamais confirmé sans vous.',
    },
  ],
  facts: ['Votre numéro actuel', '3 langues', 'Essai gratuit'],
  /** Conversation fictive, affichée avec la mention « Simulation ». */
  demo: {
    business: 'Boutique de démonstration',
    messages: [
      { from: 'client', text: 'Bonsoir, la robe wax est encore disponible\u00a0?', time: '21:47' },
      { from: 'agent', text: 'Bonsoir\u00a0! Oui, elle est disponible en M et L. Je vous envoie la photo et le prix\u00a0?', time: '21:47' },
      { from: 'client', text: 'Oui, je la prends en M. Livraison à Bonamoussadi.', time: '21:49' },
      { from: 'agent', text: 'C’est noté\u00a0: 1 robe wax, taille M, livraison à Bonamoussadi. La boutique vous confirme le paiement.', time: '21:49' },
    ],
    events: ['Commande enregistrée', 'Commerçant prévenu par e-mail'],
  },
} as const;
