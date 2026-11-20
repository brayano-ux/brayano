/**
 * Résultats de campagnes publicitaires.
 * Chaque chiffre provient d'une capture du Gestionnaire de publicités Meta fournie par le fondateur.
 * Ne rien ajouter ici sans source : ni dépense totale, ni ventes, ni retour sur investissement.
 */
export interface CampaignResult {
  slug: string;
  /** Nom de l'annonceur. Affiché uniquement si `clientNamePublic` vaut true (accord du client requis). */
  clientName: string;
  clientNamePublic: boolean;
  sector: string;
  objective: string;
  period: string;
  conversations: number;
  /** Coût moyen par conversation, dans la devise du compte publicitaire. */
  costPerConversation: string;
  /** Limite d'interprétation, affichée avec le chiffre. */
  caveat: string;
  source: string;
}

export const campaigns: CampaignResult[] = [
  {
    slug: 'complements-alimentaires-nov-2026',
    // À VALIDER : renseigner le nom de l'annonceur et passer à true uniquement avec son accord.
    clientName: '',
    clientNamePublic: false,
    sector: 'Compléments alimentaires · Douala',
    objective: 'Conversations WhatsApp',
    period: '21 octobre – 19 novembre 2026',
    conversations: 139,
    costPerConversation: '0,19 $',
    caveat: 'Une conversation démarrée est une prise de contact, pas une vente.',
    source: 'Gestionnaire de publicités Meta',
  },
];
