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
npm test           # tests unitaires (liens WhatsApp)
npm run smoke      # contrôle du build dans un navigateur (nécessite `npm i -D playwright`)
```

## Où modifier quoi

| Besoin | Fichier |
| --- | --- |
| Coordonnées, réseaux sociaux, messages WhatsApp, navigation | `src/config/site.ts` |
| Services | `src/data/services.ts` |
| Réalisations (ajouter un projet, le masquer avec `verified: false`) | `src/data/projects.ts` |
| Résultats de campagnes publicitaires | `src/data/campaigns.ts` |
| Contenu de la section Brayano IA et conversation de démonstration | `src/data/brayanoIa.ts` |
| Étapes de la méthode | `src/data/process.ts` |
| Couleurs, typographie, espacements, durées d'animation | `src/styles/tokens.css` |
| Captures des projets, portrait | `src/assets/` |

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

## État d'avancement

Jalon 1 (livré) : fondations techniques, système visuel, page d'accueil complète, page 404, SEO technique.

À venir : pages `/services/[slug]`, `/realisations/[slug]`, `/brayano-ia`, `/formation-ia`, `/a-propos`,
`/contact` avec formulaire de devis vers WhatsApp, mentions légales et confidentialité, version anglaise.
D'ici là, la navigation pointe vers les sections de l'accueil et « Demander un devis » ouvre un e-mail.
