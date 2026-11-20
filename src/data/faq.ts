/**
 * Questions fréquentes.
 * Les réponses marquées `draft: true` décrivent des conditions commerciales (délais, acompte, tarifs)
 * qui restent à valider par le fondateur : ce sont des exemples plausibles, pas des engagements.
 */
export interface FaqItem {
  question: string;
  answer: string;
  category: 'Avant de commencer' | 'Déroulement' | 'Après la livraison' | 'Brayano IA';
  draft?: boolean;
}

export const faq: FaqItem[] = [
  {
    category: 'Avant de commencer',
    question: 'Combien coûte un site web ?',
    answer:
      'Le prix dépend du nombre de pages, des fonctionnalités et des contenus à préparer. Un site vitrine simple démarre autour de 100 000 FCFA ; un catalogue ou une application se chiffre sur devis après un échange.',
    draft: true,
  },
  {
    category: 'Avant de commencer',
    question: 'Garantissez-vous des ventes ou une première place sur Google ?',
    answer:
      'Non. Je m’engage sur le travail réalisé et sur des indicateurs mesurables, comme le nombre de conversations démarrées par une campagne. Les ventes dépendent aussi de votre offre, de vos prix et de votre réponse aux clients ; le classement sur Google est décidé par Google.',
  },
  {
    category: 'Avant de commencer',
    question: 'Travaillez-vous avec des entreprises hors de Douala ?',
    answer:
      'Oui. Les échanges se font par WhatsApp, appel ou visioconférence, et la plupart des projets se réalisent entièrement à distance. Un rendez-vous sur place est possible à Douala.',
    draft: true,
  },
  {
    category: 'Déroulement',
    question: 'Combien de temps faut-il pour créer un site ?',
    answer:
      'Comptez une à deux semaines pour un site vitrine une fois vos textes et vos photos réunis, et trois à six semaines pour un site plus complet. Le délai est précisé dans le devis.',
    draft: true,
  },
  {
    category: 'Déroulement',
    question: 'Comment se passe le paiement ?',
    answer:
      'Un acompte de 50 % est demandé au démarrage et le solde à la livraison. Le règlement se fait par Orange Money, MTN Mobile Money ou virement bancaire.',
    draft: true,
  },
  {
    category: 'Déroulement',
    question: 'Le formulaire de devis enregistre-t-il mes informations ?',
    answer:
      'Non. Le formulaire prépare un message dans votre navigateur ; rien n’est envoyé ni conservé par le site. La demande part uniquement lorsque vous l’envoyez vous-même depuis WhatsApp ou votre messagerie.',
  },
  {
    category: 'Après la livraison',
    question: 'Le site m’appartient-il ?',
    answer:
      'Oui. À la fin du projet, vous disposez des accès au site, au nom de domaine et à l’hébergement, ouverts à votre nom.',
    draft: true,
  },
  {
    category: 'Après la livraison',
    question: 'Proposez-vous la maintenance ?',
    answer:
      'Oui, sous forme de forfait mensuel ou d’interventions ponctuelles : mises à jour, corrections, ajout de contenus. Les conditions figurent dans le devis.',
    draft: true,
  },
  {
    category: 'Brayano IA',
    question: 'Dois-je changer de numéro WhatsApp pour utiliser Brayano IA ?',
    answer:
      'Non. Brayano IA se relie à votre numéro actuel en scannant un code, comme pour WhatsApp Web. Il fonctionne avec WhatsApp et WhatsApp Business.',
  },
  {
    category: 'Brayano IA',
    question: 'Puis-je répondre moi-même à un client ?',
    answer:
      'Oui, à tout moment, depuis le tableau de bord ou votre téléphone. L’assistant se met alors en pause pour ce client pendant 24 heures, ou jusqu’à ce que vous le réactiviez.',
  },
];

export const faqCategories: FaqItem['category'][] = ['Avant de commencer', 'Déroulement', 'Après la livraison', 'Brayano IA'];
