import type { WhatsAppIntent } from '@/config/site';

export type ServiceSlug =
  | 'sites-web'
  | 'publicite'
  | 'logiciels'
  | 'automatisation-ia'
  | 'visibilite-google'
  | 'formation-ia';

export interface Service {
  slug: ServiceSlug;
  /** Adresse de la page détaillée. */
  path: string;
  title: string;
  summary: string;
  /** Bénéfice commercial concret, formulé sans promesse de résultat. */
  benefit: string;
  cta: string;
  intent: WhatsAppIntent;
  /** Page détaillée */
  intro: string;
  audience: string;
  offers: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  /** Limites et précisions : ce qui n'est pas promis. */
  notes: string[];
  /** Réalisations liées (slugs de src/data/projects.ts). */
  relatedProjects: string[];
}

export const services: Service[] = [
  {
    slug: 'sites-web',
    path: '/services/sites-web',
    title: 'Création de sites web',
    summary: 'Sites vitrines, sites d’entreprise, catalogues en ligne et applications accessibles depuis un navigateur.',
    benefit: 'Vos clients trouvent vos informations, vos offres et le moyen de vous écrire, à toute heure.',
    cta: 'Parler de mon site web',
    intent: 'site',
    intro:
      'Un site clair, rapide sur téléphone, qui présente votre activité et amène le visiteur à vous contacter. Vous pouvez envoyer son lien à un prospect au lieu de tout réexpliquer.',
    audience:
      'Entreprises, commerces, écoles, indépendants et organisations qui veulent une présence professionnelle en ligne, ou remplacer un site qui ne leur ressemble plus.',
    offers: [
      { title: 'Site vitrine', text: 'Quelques pages pour présenter votre activité, vos services, vos coordonnées et vos horaires.' },
      { title: 'Site d’entreprise', text: 'Une structure plus complète : offres détaillées, équipe, actualités, formulaires de contact ou d’inscription.' },
      { title: 'Catalogue en ligne', text: 'Vos produits avec photos, descriptions et prix, et une commande directe sur WhatsApp pour chaque article.' },
      { title: 'Page de présentation', text: 'Une page unique pour une offre, un événement ou une campagne publicitaire, pensée pour un seul objectif.' },
      { title: 'Application web', text: 'Un outil utilisable depuis un navigateur, étudié au cas par cas après analyse de votre besoin.' },
    ],
    steps: [
      { title: 'Cadrage', text: 'Votre activité, vos clients, les pages nécessaires et les contenus dont vous disposez déjà.' },
      { title: 'Maquette', text: 'Une proposition de structure et de style que vous validez avant le développement.' },
      { title: 'Développement', text: 'Intégration des contenus, adaptation au téléphone, boutons de contact et de commande.' },
      { title: 'Mise en ligne', text: 'Tests, publication, connexion de votre nom de domaine et prise en main.' },
    ],
    notes: [
      'Les textes et les photos de votre activité viennent de vous : je vous aide à les structurer et à les mettre en valeur.',
      'Le nom de domaine et l’hébergement sont des frais distincts, précisés dans le devis.',
      'Un site rend votre entreprise visible et joignable ; il ne garantit pas à lui seul un volume de ventes.',
    ],
    relatedProjects: ['editions-baobab', 'ecole-mother-rosa'],
  },
  {
    slug: 'publicite',
    path: '/services/publicite',
    title: 'Publicité Facebook et Instagram',
    summary: 'Définition de l’audience, préparation des visuels et des messages, mise en ligne puis suivi de la campagne.',
    benefit: 'Des personnes intéressées vous écrivent sur WhatsApp, avec un coût par conversation que vous suivez.',
    cta: 'Discuter de ma campagne',
    intent: 'publicite',
    intro:
      'Des campagnes Meta construites autour d’un objectif précis : faire venir des demandes sur votre WhatsApp, faire connaître une offre ou amener des visiteurs sur votre site.',
    audience:
      'Commerces et entreprises qui vendent déjà, savent à qui ils s’adressent et veulent recevoir davantage de demandes qualifiées.',
    offers: [
      { title: 'Objectif commercial', text: 'On part de ce que vous voulez obtenir : des messages, des commandes, des visites. Le reste en découle.' },
      { title: 'Audience', text: 'Zone géographique, tranche d’âge, centres d’intérêt : à qui la publicité doit être montrée.' },
      { title: 'Visuels et messages', text: 'Préparation des annonces à partir de vos produits, avec plusieurs variantes à comparer.' },
      { title: 'Mise en place', text: 'Création de la campagne, des ensembles de publicités et des annonces dans le Gestionnaire de publicités.' },
      { title: 'Suivi', text: 'Lecture régulière des résultats : conversations démarrées, coût par conversation, annonces qui fonctionnent.' },
      { title: 'Optimisation', text: 'Ajustements selon les données disponibles : on renforce ce qui marche, on arrête ce qui ne marche pas.' },
    ],
    steps: [
      { title: 'Comprendre l’offre', text: 'Ce que vous vendez, à quel prix, à qui, et comment vous répondez aux messages aujourd’hui.' },
      { title: 'Préparer', text: 'Audience, annonces et budget quotidien validés ensemble avant le lancement.' },
      { title: 'Lancer et suivre', text: 'La campagne tourne ; je surveille les indicateurs et je vous tiens informé.' },
      { title: 'Faire le bilan', text: 'Un point clair en fin de période : dépenses, résultats obtenus, décisions pour la suite.' },
    ],
    notes: [
      'Le budget publicitaire est payé directement à Meta, en plus de la prestation.',
      'Une conversation démarrée est une prise de contact, pas une vente : la suite dépend de votre offre et de votre réponse.',
      'Aucun volume de messages ni de ventes n’est garanti. Les résultats passés ne préjugent pas des suivants.',
    ],
    relatedProjects: ['campagne-pure-molecule'],
  },
  {
    slug: 'logiciels',
    path: '/services/logiciels',
    title: 'Développement logiciel',
    summary: 'Applications et outils de gestion conçus à partir de votre manière de travailler, testés avant la livraison.',
    benefit: 'Un outil adapté à votre activité, au lieu d’adapter votre activité à un outil générique.',
    cta: 'Présenter mon projet',
    intent: 'logiciel',
    intro:
      'Quand un tableur ou une application du commerce ne suffit plus, un outil conçu pour votre façon de travailler peut faire gagner du temps chaque jour. Brayano IA, développé ici, en est l’exemple.',
    audience:
      'Entreprises qui ont un processus précis à outiller : suivi de commandes, de clients, de rendez-vous, de stocks ou d’équipes.',
    offers: [
      { title: 'Analyse du besoin', text: 'Qui utilise l’outil, pour faire quoi, avec quelles informations : on écrit cela avant de coder.' },
      { title: 'Application sur mesure', text: 'Interfaces, comptes utilisateurs, tableaux de bord et règles propres à votre activité.' },
      { title: 'Connexions utiles', text: 'WhatsApp, e-mail, paiement mobile ou export de fichiers, lorsque le projet le justifie.' },
      { title: 'Tests', text: 'Vérification des parcours importants avec vous avant toute mise en service.' },
      { title: 'Maintenance', text: 'Corrections et évolutions après la livraison, selon ce qui est convenu au devis.' },
    ],
    steps: [
      { title: 'Évaluation', text: 'Une première discussion pour mesurer la faisabilité, le périmètre et l’ordre de grandeur.' },
      { title: 'Spécification', text: 'Une description écrite de ce que l’outil fera, et de ce qu’il ne fera pas.' },
      { title: 'Développement par étapes', text: 'Des versions intermédiaires que vous pouvez essayer, plutôt qu’une livraison unique à la fin.' },
      { title: 'Mise en service', text: 'Installation, prise en main et période de suivi.' },
    ],
    notes: [
      'Chaque projet commence par une évaluation : certains systèmes complexes dépassent ce qu’une petite structure peut livrer correctement, et je vous le dirai.',
      'Les coûts d’hébergement et de services tiers sont précisés avant le démarrage.',
    ],
    relatedProjects: ['brayano-ia'],
  },
  {
    slug: 'automatisation-ia',
    path: '/services/automatisation-ia',
    title: 'Automatisation et IA',
    summary: 'Réponses aux demandes courantes, préparation de contenus, organisation de l’information : les tâches répétitives d’abord.',
    benefit: 'Moins de temps passé à répéter les mêmes gestes, plus de temps pour vos clients.',
    cta: 'Identifier les tâches à automatiser',
    intent: 'automatisation',
    intro:
      'L’intelligence artificielle est utile quand elle prend en charge une tâche précise et répétitive. On commence par repérer ces tâches dans votre activité, puis on choisit l’outil le plus simple qui fait le travail.',
    audience:
      'Entreprises qui reçoivent beaucoup de messages, rédigent souvent les mêmes contenus ou recopient des informations d’un outil à l’autre.',
    offers: [
      { title: 'Traitement des demandes clients', text: 'Un assistant qui répond aux questions courantes sur WhatsApp à partir de vos informations : c’est le rôle de Brayano IA.' },
      { title: 'Préparation de contenus', text: 'Modèles et méthodes pour produire plus vite descriptions de produits, publications et messages commerciaux.' },
      { title: 'Organisation de l’information', text: 'Classer des demandes, résumer des échanges, extraire les données utiles d’un document.' },
      { title: 'Tâches répétitives', text: 'Automatiser un enchaînement simple : une commande reçue déclenche une alerte, une relance, une mise à jour.' },
    ],
    steps: [
      { title: 'Repérage', text: 'On liste ensemble les tâches qui reviennent chaque jour et le temps qu’elles prennent.' },
      { title: 'Choix', text: 'On retient celles qui se prêtent vraiment à l’automatisation, avec un gain clair.' },
      { title: 'Mise en place', text: 'Configuration de l’outil, essais sur des cas réels, réglages.' },
      { title: 'Contrôle', text: 'Vous gardez la main : règles de validation, passage à un humain, vérification des résultats.' },
    ],
    notes: [
      'L’IA peut se tromper : les décisions sensibles (paiement, engagement, réclamation) restent validées par une personne.',
      'Ce que l’IA sait faire en général n’est pas ce qui est mis en place chez vous : le devis décrit précisément les tâches couvertes.',
      'Les informations confidentielles ne sont transmises à un outil qu’avec votre accord.',
    ],
    relatedProjects: ['brayano-ia'],
  },
  {
    slug: 'visibilite-google',
    path: '/services/visibilite-google',
    title: 'Visibilité sur Google',
    summary: 'Création ou optimisation de votre fiche Google Business Profile : coordonnées, horaires, photos, descriptions, avis.',
    benefit: 'Des informations exactes et cohérentes lorsqu’un client vous cherche. Aucun classement n’est garanti.',
    cta: 'Améliorer ma visibilité locale',
    intent: 'google',
    intro:
      'Quand quelqu’un cherche votre entreprise ou votre métier sur Google et Google Maps, votre fiche d’établissement est souvent la première chose qu’il voit. Autant qu’elle soit complète, exacte et à jour.',
    audience:
      'Commerces, restaurants, salons, cabinets, écoles et prestataires qui reçoivent des clients ou se déplacent dans une zone précise.',
    offers: [
      { title: 'Création ou reprise de la fiche', text: 'Ouverture de votre fiche Google Business Profile, ou récupération d’une fiche existante, si votre entreprise est éligible.' },
      { title: 'Informations de contact', text: 'Adresse, zone desservie, téléphone, WhatsApp, horaires, lien vers votre site.' },
      { title: 'Photos et descriptions', text: 'Présentation de l’activité, catégories, services, photos des lieux et des produits.' },
      { title: 'Gestion des avis', text: 'Une méthode simple pour demander des avis à vos clients et y répondre correctement.' },
      { title: 'Cohérence', text: 'Les mêmes nom, adresse et numéro partout : fiche Google, site, réseaux sociaux.' },
    ],
    steps: [
      { title: 'État des lieux', text: 'Ce que Google affiche aujourd’hui sur votre entreprise, et ce qui manque.' },
      { title: 'Mise à jour', text: 'Création ou correction de la fiche, avec la vérification demandée par Google.' },
      { title: 'Enrichissement', text: 'Photos, descriptions, services et premières demandes d’avis.' },
      { title: 'Prise en main', text: 'Vous apprenez à tenir la fiche à jour vous-même.' },
    ],
    notes: [
      'Une fiche Google Business Profile n’est pas un référencement naturel complet de site web : ce sont deux chantiers différents.',
      'Google décide seul de l’affichage et du classement. Aucune position n’est garantie.',
      'La validation de la fiche dépend de Google et peut prendre du temps.',
    ],
    relatedProjects: [],
  },
  {
    slug: 'formation-ia',
    path: '/formation-ia',
    title: 'Formation pratique en IA',
    summary: 'Pour les entrepreneurs équipés d’un ordinateur : rédiger, préparer des supports, organiser son travail, vérifier les résultats.',
    benefit: 'Vous repartez avec des méthodes applicables à votre activité, adaptées à votre niveau.',
    cta: 'Demander des informations',
    intent: 'formation',
    intro:
      'Une formation orientée vers la pratique : on travaille sur vos propres textes, vos propres documents et vos propres tâches, pas sur des exemples théoriques.',
    audience:
      'Entrepreneurs, commerçants et indépendants qui possèdent un ordinateur et veulent utiliser l’IA dans leur activité, sans connaissances techniques préalables.',
    offers: [
      { title: 'Comprendre les outils', text: 'Ce que les assistants IA savent faire, ce qu’ils ne savent pas faire, et lesquels sont utiles à votre activité.' },
      { title: 'Rédiger', text: 'Produire des textes professionnels : messages aux clients, descriptions de produits, publications, courriers.' },
      { title: 'Préparer des supports', text: 'Présentations, offres commerciales, fiches et documents de travail.' },
      { title: 'Organiser', text: 'Structurer des tâches répétitives et gagner du temps sur ce qui revient chaque semaine.' },
      { title: 'Vérifier et protéger', text: 'Contrôler ce que l’IA produit, repérer ses erreurs et ne pas lui confier d’informations sensibles.' },
    ],
    steps: [
      { title: 'Échange préalable', text: 'Votre secteur, votre niveau et ce que vous aimeriez faire plus vite.' },
      { title: 'Programme adapté', text: 'Un contenu ajusté à votre activité plutôt qu’un cours identique pour tous.' },
      { title: 'Pratique', text: 'Des exercices sur vos cas réels, avec votre ordinateur.' },
      { title: 'Suite', text: 'Des modèles et des méthodes que vous réutilisez seul après la formation.' },
    ],
    notes: [
      'La formation ne délivre pas de certification.',
      'Le format, la durée et le tarif sont définis avec vous selon votre besoin : écrivez-moi pour en discuter.',
      'Les résultats dépendent de la pratique : aucun gain de temps ou de chiffre d’affaires n’est garanti.',
    ],
    relatedProjects: [],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
