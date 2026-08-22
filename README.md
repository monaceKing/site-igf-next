# IGF-SARL — Site Next.js

Refonte du site vitrine IGF-SARL. Next.js 14 (App Router), TypeScript, Tailwind CSS, thème clair/sombre, base PWA.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site sera accessible sur http://localhost:3000

## Structure

- `app/` — pages, layout, metadata SEO, manifest PWA
- `components/layout/` — navbar, footer, toggle de thème
- `components/sections/` — un fichier par section de la homepage
- `components/ui/` — éléments réutilisables (bouton, séparateur "ledger")
- `lib/constants.ts` — **toutes les données du site** (nav, contacts, produits, équipe, événements) : modifiez ce fichier pour changer le contenu sans toucher aux composants
- `lib/actions.ts` — Server Action du formulaire de contact (actuellement un `console.log`, à brancher sur un vrai service d'envoi : Resend, SendGrid, webhook interne...)

## À faire avant mise en production

1. **Remplacer les icônes PWA** dans `public/icons/` — ce sont des placeholders générés automatiquement, pas les vrais visuels IGF
2. **Ajouter les vraies photos** : équipe (`components/sections/team.tsx`), événements (`components/sections/events.tsx`) — actuellement des dégradés placeholder
3. **Brancher le formulaire de contact** sur un service d'envoi réel dans `lib/actions.ts`
4. **Activer le PWA complet** : `npm install next-pwa`, puis décommenter le wrapper dans `next.config.ts`
5. **Adapter les métadonnées** dans `app/layout.tsx` (URL réelle du site, réseaux sociaux)
6. **Vérifier les couleurs de marque** dans `app/globals.css` (variables `--accent`, `--gold`, etc.) et `tailwind.config.ts`

## Notes techniques

- Le formulaire de contact utilise `useActionState` (React 18.3+ / Next 14.2+) avec une Server Action — pas de librairie tierce nécessaire
- Le thème clair/sombre utilise `next-themes`, avec détection automatique de la préférence système au premier chargement
- Toutes les couleurs sont pilotées par variables CSS (voir `globals.css`) pour que le thème s'applique sans dupliquer les classes Tailwind
