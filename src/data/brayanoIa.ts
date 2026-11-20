/**
 * Contenu relatif à Brayano IA.
 * Toutes les capacités listées proviennent de la liste de fonctionnalités fournie par le fondateur
 * et du site du produit. Ne rien ajouter qui n'existe pas dans le produit.
 */
export const brayanoIa = {
  headline: 'Votre entreprise ne s’arrête pas quand vous êtes occupé. Votre assistant non plus.',
  intro:
    'Brayano IA est l’assistant que j’ai conçu pour les entreprises qui vendent sur WhatsApp. Il se branche sur votre numéro actuel, répond à partir des informations que vous lui donnez et vous laisse la main sur chaque conversation.',
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
      { from: 'client', text: 'Bonsoir, la robe wax est encore disponible ?', time: '21:47' },
      { from: 'agent', text: 'Bonsoir ! Oui, elle est disponible en M et L. Je vous envoie la photo et le prix ?', time: '21:47' },
      { from: 'client', text: 'Oui, je la prends en M. Livraison à Bonamoussadi.', time: '21:49' },
      { from: 'agent', text: 'C’est noté : 1 robe wax, taille M, livraison à Bonamoussadi. La boutique vous confirme le paiement.', time: '21:49' },
    ],
    events: ['Commande enregistrée', 'Commerçant prévenu par e-mail'],
  },

  /** Page /brayano-ia */
  problems: [
    { title: 'Les clients écrivent le soir', text: 'Sans réponse, la demande attend le lendemain, et le client a parfois changé d’avis.' },
    { title: 'Toujours les mêmes questions', text: '«\u00a0C’est combien\u00a0?\u00a0», «\u00a0Vous êtes où\u00a0?\u00a0», «\u00a0Vous ouvrez à quelle heure\u00a0?\u00a0»' },
    { title: 'Le suivi se disperse', text: 'Qui a commandé, qui devait revenir, qui attend une réponse : tout est noyé dans les discussions.' },
  ],
  setup: [
    { title: 'Créez votre compte', text: 'Quelques informations sur vous et votre entreprise. L’essai est gratuit, sans carte bancaire.' },
    { title: 'Reliez votre WhatsApp', text: 'Vous scannez un code, comme pour WhatsApp Web. Vous gardez votre numéro et votre téléphone.' },
    { title: 'Décrivez votre activité', text: 'Produits, prix, horaires, ton à adopter. Un assistant de configuration peut extraire ces informations d’un texte, d’un site ou d’un PDF.' },
  ],
  featureGroups: [
    {
      title: 'Réponses automatiques',
      items: [
        'Réponses 24 h/24 sur votre numéro existant, WhatsApp ou WhatsApp Business',
        'Trois langues : français, anglais et pidgin, selon celle du client',
        'Transcription des messages vocaux avant de répondre',
        'Analyse des photos et documents reçus, avec repérage des captures de paiement',
        'Rythme naturel : indicateur « en train d’écrire », délai réglable, longues réponses découpées',
      ],
    },
    {
      title: 'Réglage de l’assistant',
      items: [
        'Nom, rôle et ton de l’assistant : vendeur, support, conseiller, accueil',
        'Base de connaissances en texte libre sur votre entreprise',
        'Horaires d’ouverture, avec une réponse adaptée hors horaires',
        'Position de la boutique envoyée en localisation WhatsApp',
        'Simulateur pour tester les réponses sans rien envoyer',
      ],
    },
    {
      title: 'Catalogue et négociation',
      items: [
        'Fiches produits avec photo, description, catégorie, prix et disponibilité',
        'Envoi des photos avec nom et prix à la demande du client',
        'Remise maximale fixée par vous, en pourcentage ou en montant',
        'Calcul du prix effectué par le serveur, jamais par l’IA, et jamais sous votre prix plancher',
      ],
    },
    {
      title: 'Commandes et rendez-vous',
      items: [
        'Prise de commande à la confirmation du client : produits, quantités, nom, adresse',
        'Suivi des statuts : nouvelle, confirmée, livrée, annulée, payée ou à encaisser',
        'Paiement jamais confirmé par l’IA : vous validez vous-même',
        'Agenda configurable, seuls les créneaux libres sont proposés',
        'Alerte e-mail à chaque commande et à chaque rendez-vous',
      ],
    },
    {
      title: 'Boîte de réception',
      items: [
        'Toutes les conversations, avec recherche, filtres et étiquettes',
        'Réponse manuelle à tout moment : l’assistant se met en pause pour ce client',
        '« Pourquoi cette réponse ? » sous chaque message, avec possibilité de corriger',
        'Respect du STOP : plus aucune relance pour le client qui le demande',
      ],
    },
    {
      title: 'Passage de main et apprentissage',
      items: [
        'Transfert au commerçant en cas de réclamation, de demande spéciale ou d’incertitude',
        'Mémorisation de vos corrections pour les questions semblables',
        'Règles manuelles : « quand le client demande X, réponds Y »',
      ],
    },
    {
      title: 'Relances et messages groupés',
      items: [
        'Relance des clients intéressés devenus silencieux, une ou deux fois au maximum',
        'Annonces groupées filtrées par étiquette et par date du dernier message',
        'Protections intégrées : envoi lent, plafond quotidien, mention STOP',
        'Disponible à partir du forfait Pro',
      ],
    },
    {
      title: 'Équipe et statistiques',
      items: [
        'Comptes employés avec accès limité, selon le forfait',
        'Transmission du prospect qualifié au commercial de sa zone',
        'Statistiques sur 1, 7 ou 30 jours : conversations, commandes, rendez-vous, passages de main',
        'Articles les plus demandés et questions restées sans réponse',
        'Export des prospects en fichier',
      ],
    },
  ],
  audiences: ['Boutiques', 'Salons de coiffure', 'Restaurants', 'Cliniques', 'Écoles', 'Prestataires de services'],
  disclaimer:
    'Brayano IA est un service indépendant. WhatsApp est une marque de Meta : Brayano IA n’est ni affilié à WhatsApp ni approuvé par WhatsApp.',
} as const;
