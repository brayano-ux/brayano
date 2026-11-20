import type { WhatsAppIntent } from '@/config/site';

export interface Service {
  /** Identifiant stable, utilisé pour l'URL de la future page détaillée et le visuel de la carte. */
  slug: 'sites-web' | 'publicite' | 'logiciels' | 'automatisation-ia' | 'visibilite-google' | 'formation-ia';
  title: string;
  summary: string;
  /** Bénéfice commercial concret, formulé sans promesse de résultat. */
  benefit: string;
  cta: string;
  intent: WhatsAppIntent;
}

export const services: Service[] = [
  {
    slug: 'sites-web',
    title: 'Création de sites web',
    summary:
      'Sites vitrines, sites d’entreprise, catalogues en ligne et applications accessibles depuis un navigateur.',
    benefit: 'Vos clients trouvent vos informations, vos offres et le moyen de vous écrire, à toute heure.',
    cta: 'Parler de mon site web',
    intent: 'site',
  },
  {
    slug: 'publicite',
    title: 'Publicité Facebook et Instagram',
    summary:
      'Définition de l’audience, préparation des visuels et des messages, mise en ligne puis suivi de la campagne.',
    benefit: 'Des personnes intéressées vous écrivent sur WhatsApp, avec un coût par conversation que vous suivez.',
    cta: 'Discuter de ma campagne',
    intent: 'publicite',
  },
  {
    slug: 'logiciels',
    title: 'Développement logiciel',
    summary:
      'Applications et outils de gestion conçus à partir de votre manière de travailler, testés avant la livraison.',
    benefit: 'Un outil adapté à votre activité, au lieu d’adapter votre activité à un outil générique.',
    cta: 'Présenter mon projet',
    intent: 'logiciel',
  },
  {
    slug: 'automatisation-ia',
    title: 'Automatisation et IA',
    summary:
      'Réponses aux demandes courantes, préparation de contenus, organisation de l’information : les tâches répétitives d’abord.',
    benefit: 'Moins de temps passé à répéter les mêmes gestes, plus de temps pour vos clients.',
    cta: 'Identifier les tâches à automatiser',
    intent: 'automatisation',
  },
  {
    slug: 'visibilite-google',
    title: 'Visibilité sur Google',
    summary:
      'Création ou optimisation de votre fiche Google Business Profile : coordonnées, horaires, photos, descriptions, avis.',
    benefit: 'Des informations exactes et cohérentes lorsqu’un client vous cherche. Aucun classement n’est garanti.',
    cta: 'Améliorer ma visibilité locale',
    intent: 'google',
  },
  {
    slug: 'formation-ia',
    title: 'Formation pratique en IA',
    summary:
      'Pour les entrepreneurs équipés d’un ordinateur : rédiger, préparer des supports, organiser son travail, vérifier les résultats.',
    benefit: 'Vous repartez avec des méthodes applicables à votre activité, adaptées à votre niveau.',
    cta: 'Demander des informations',
    intent: 'formation',
  },
];
