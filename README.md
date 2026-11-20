# Brayano Service — site officiel

Site vitrine de Brayano Service (Douala, Cameroun) : sites web, publicité Facebook et Instagram,
intelligence artificielle, logiciels sur mesure, et le produit Brayano IA.

Site statique construit avec [Astro](https://astro.build), TypeScript et CSS natif. Aucun backend,
aucune base de données, aucun outil de suivi.

## Commandes

```bash
npm install        # installer les dépendances
npm run dev        # serveur de développement sur http://localhost:4321
npm run build      # build de production dans dist/
npm run preview    # servir le build localement
npm run check      # vérification des types (Astro + TypeScript)
npm run lint       # ESLint
npm test           # tests unitaires (liens WhatsApp, formulaire de devis)
npm run smoke      # contrôle du build dans un navigateur (nécessite `npm i -D playwright`)
node scripts/shot.mjs <dossier> <largeur> <chemin...>   # captures pleine page du build
```

## Où modifier quoi

| Besoin | Fichier |
| --- | --- |
| Coordonnées, réseaux sociaux, messages WhatsApp, navigation, hébergeur | `src/config/site.ts` |
| Services | `src/data/services.ts` |
| Réalisations, études de cas et résultats de campagnes (masquer avec `verified: false`) | `src/data/projects.ts` |
| Contenu Brayano IA : fonctionnalités, conversation de démonstration | `src/data/brayanoIa.ts` |
| Étapes de la méthode | `src/data/process.ts` |
| Couleurs, typographie, espacements, durées d'animation | `src/styles/tokens.css` |
| Captures des projets, portrait, logo | `src/assets/` |
| Photos d’illustration et leurs crédits | `src/data/photos.ts` |

Règle de contenu : un chiffre, un client ou un projet n'apparaît sur le site que s'il est documenté.
Un projet sans URL ni capture reste à `verified: false` et n'est pas affiché.

## Déploiement sur Vercel

1. Sur [vercel.com](https://vercel.com), « Add New… → Project », importer le dépôt `brayano-ux/brayano`.
2. Vercel détecte Astro : laisser la commande `npm run build` et le dossier de sortie `dist`.
3. Dans « Environment Variables », ajouter `PUBLIC_SITE_URL` avec l'adresse publique du site, sans barre
   oblique finale (par exemple `https://brayano-service.vercel.app`, puis le nom de domaine définitif).
4. Déployer. Chaque `git push` sur la branche de production redéploie le site.

Après la mise en ligne, vérifier : la page d'accueil, une adresse inexistante (page 404), `/robots.txt`,
`/sitemap-index.xml`, un bouton WhatsApp depuis un téléphone, et l'aperçu du lien collé dans WhatsApp.

### Nom de domaine personnalisé

Dans Vercel : Project → Settings → Domains → ajouter le domaine, puis créer chez le registraire les
enregistrements DNS indiqués par Vercel. Mettre ensuite à jour `PUBLIC_SITE_URL` et redéployer, afin que
les balises canoniques, le sitemap et les aperçus de partage utilisent le bon domaine.

## Pages

| Adresse | Contenu |
| --- | --- |
| `/` | Accueil |
| `/services`, `/services/[slug]` | Les six services ; une page détaillée par service |
| `/formation-ia` | Formation pratique en IA |
| `/realisations`, `/realisations/[slug]` | Portfolio et études de cas |
| `/brayano-ia` | Présentation du produit Brayano IA |
| `/a-propos` | Le fondateur et sa façon de travailler |
| `/contact` | Coordonnées et formulaire de demande de devis |
| `/mentions-legales`, `/confidentialite` | Pages légales |

Le formulaire de devis n'envoie rien à un serveur : il valide la saisie, compose un message et ouvre
WhatsApp (ou un e-mail) avec ce message. La logique est dans `src/lib/quote.ts`.

## État d'avancement

Livré : toutes les pages ci-dessus en français, thème blanc, logo Brayano IA, SEO technique, tests.

À venir : version anglaise. À renseigner quand ils existeront : numéro RCCM / NIU et adresse dans
`src/pages/mentions-legales.astro`, nom de domaine dans `PUBLIC_SITE_URL`, projet « Petits Jobs Express »
(`verified: false` dans `src/data/projects.ts`).
