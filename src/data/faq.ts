/** Questions fréquentes fondées sur les services et conditions actuellement confirmés. */
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
      'Le tarif dépend du nombre de pages, des fonctionnalités et des contenus à préparer. Écrivez-moi pour décrire votre besoin et recevoir un devis adapté.'
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
      'Brayano Service est basé à Douala. Pour un projet dans une autre ville, contactez-moi afin que nous vérifiions ensemble les modalités.'
  },
  {
    category: 'Déroulement',
    question: 'Combien de temps faut-il pour créer un site ?',
    answer:
      'Le délai dépend du périmètre du site et de la disponibilité des textes, photos et autres contenus. Le calendrier est précisé dans le devis avant le démarrage.'
  },
  {
    category: 'Déroulement',
    question: 'Comment se passe le paiement ?',
    answer:
      'Les modalités de paiement sont convenues avant le démarrage et indiquées dans le devis accepté.'
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
      'Les livrables, les accès transmis et les modalités de transfert sont précisés dans le devis avant le démarrage.'
  },
  {
    category: 'Après la livraison',
    question: 'Proposez-vous la maintenance ?',
    answer:
      'La maintenance et les évolutions peuvent être discutées selon le site et les besoins. Les prestations et leur coût sont précisés dans un devis.'
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
