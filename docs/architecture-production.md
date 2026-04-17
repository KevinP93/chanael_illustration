# Architecture de production - Chanael Illustration

Date de référence: 17 avril 2026

Contexte de départ:
- Dépôt initialement vide.
- Assets source actuellement hors projet dans `C:\Users\Kevin\Desktop\Chantaldesign`.
- Inventaire initial constaté: 8 images et 1 vidéo source `.mov`.
- Asset clé identifié: `IllustrationReseau.png`.

## A. Recommandation technique claire

### Recommandation tranchée

Je recommande cette stack:

- Frontend: `Next.js` App Router + `TypeScript`
- UI: `Tailwind CSS` + composants maison + animations légères avec `Motion`
- Backend applicatif: `Next.js` Server Actions + Route Handlers
- Auth / BDD / Storage: `Supabase`
- Réservation: `Calendly`
- Déploiement: `Vercel`
- Email contact: `Resend` plus tard si nécessaire, sinon envoi simple via backend

### Pourquoi cette stack

Cette combinaison est la plus réaliste pour ce projet parce qu'elle couvre:

- un site vitrine haut de gamme et très customisable,
- un espace utilisateur simple,
- un espace administrateur léger,
- une vraie évolutivité pour ajouter un paiement plus tard,
- un coût raisonnable,
- une maintenance simple.

### Ce qui doit être géré en custom

À développer dans l'application:

- le site vitrine public,
- la galerie et les fiches œuvres,
- l'espace élève / parent,
- l'espace administrateur,
- la gestion des contenus du site,
- la gestion des œuvres,
- le formulaire de contact,
- le miroir local des réservations si on veut les afficher dans le dashboard.

### Ce qui doit être externalisé

À ne pas reconstruire en custom en V1:

- la logique de disponibilités,
- la synchronisation calendrier,
- les emails de confirmation / annulation / replanification de rendez-vous,
- la gestion des conflits d'agenda,
- le moteur de réservation.

Tout cela doit être confié à `Calendly`, relié au calendrier Google de Chantal.

### Base de données: oui, mais minimale

Il faut une base de données légère, non pas pour gérer les créneaux, mais pour gérer:

- les comptes utilisateurs,
- les profils,
- les œuvres,
- les contenus administrables,
- éventuellement le miroir des réservations,
- les messages de contact.

### Recommandation Calendly

Je recommande `Calendly Standard`, pas seulement l'offre gratuite.

Raison:

- l'offre gratuite est trop limitée pour un vrai site de cours,
- elle ne permet qu'`1 event type`,
- elle ne connecte qu'`1 calendar`,
- les `webhooks` sont côté offre Standard,
- si on veut plusieurs types de cours et un dashboard fiable, l'offre gratuite devient vite un faux bon plan.

### Décision finale

La meilleure architecture réaliste est:

- `Next.js` pour tout le site,
- `Supabase` pour auth + données + stockage média,
- `Calendly` comme source de vérité pour la réservation,
- `Google Calendar` comme calendrier principal de Chantal,
- dashboard admin et dashboard utilisateur développés dans le même projet.

## B. Architecture complète du projet

### Arborescence fonctionnelle des pages

- `/`
- `/a-propos`
- `/illustrations`
- `/illustrations/[slug]`
- `/cours`
- `/reservation`
- `/contact`
- `/connexion`
- `/inscription`
- `/espace`
- `/espace/profil`
- `/espace/reservations`
- `/admin`
- `/admin/oeuvres`
- `/admin/cours`
- `/admin/reservations`
- `/admin/contenu`
- `/admin/messages`
- `/admin/utilisateurs`
- `/mentions-legales`
- `/politique-de-confidentialite`

### Structure de dossiers recommandée

```text
src/
  app/
    (marketing)/
      page.tsx
      a-propos/page.tsx
      illustrations/page.tsx
      illustrations/[slug]/page.tsx
      cours/page.tsx
      reservation/page.tsx
      contact/page.tsx
    (auth)/
      connexion/page.tsx
      inscription/page.tsx
    (dashboard)/
      espace/layout.tsx
      espace/page.tsx
      espace/profil/page.tsx
      espace/reservations/page.tsx
    (admin)/
      admin/layout.tsx
      admin/page.tsx
      admin/oeuvres/page.tsx
      admin/cours/page.tsx
      admin/reservations/page.tsx
      admin/contenu/page.tsx
      admin/messages/page.tsx
      admin/utilisateurs/page.tsx
    api/
      contact/route.ts
      calendly/webhook/route.ts
      cron/sync-bookings/route.ts
  components/
    layout/
    navigation/
    sections/
    gallery/
    booking/
    forms/
    dashboard/
    admin/
    ui/
  lib/
    supabase/
    calendly/
    auth/
    validators/
    utils/
    seo/
  actions/
  styles/
  types/
supabase/
  migrations/
  seed.sql
scripts/
  import-assets.ts
  optimize-media.ts
public/
  favicons/
  social/
docs/
  architecture-production.md
```

### Structure composants

Exemples de composants à prévoir:

- `HeroImmersive`
- `ArtworkMasonry`
- `FeaturedVideoSection`
- `TeachingHighlights`
- `CalendlyInlineWidget`
- `CourseOfferCard`
- `ContactForm`
- `InstagramBlock`
- `UserDashboardShell`
- `AdminDashboardShell`
- `ArtworkUploader`
- `BookingTable`
- `ContentEditorPanel`

### Gestion des assets

Je recommande cette logique:

- conserver les originaux dans un dossier non servi publiquement,
- convertir la vidéo source en `.mp4` web avant intégration publique,
- stocker les médias finaux dans `Supabase Storage`,
- garder un script d'import initial pour les œuvres existantes.

Organisation proposée:

- bucket `artworks`
- bucket `site-media`
- bucket `avatars` si nécessaire plus tard

Organisation locale recommandée avant import:

```text
assets-source/
  raw/
    illustrations/
    video/
  optimized/
    illustrations/
    video/
```

### Gestion auth

Je recommande `Supabase Auth`.

Mode conseillé:

- email + mot de passe en V1,
- confirmation email,
- réinitialisation de mot de passe,
- possibilité d'ajouter magic link plus tard si utile.

### Gestion des rôles

Rôles minimaux:

- `admin`
- `parent`
- `student`

Décision pragmatique de V1:

- un seul compte peut réserver,
- un profil parent peut contenir les informations du ou des enfants,
- on ne crée pas encore une relation complexe multi-enfants tant que le besoin réel n'est pas confirmé.

### Gestion réservation

Le principe doit être clair:

- `Calendly` gère les créneaux, la disponibilité, la réservation, les annulations et les replanifications.
- `Google Calendar` de Chantal est la source de disponibilité opérationnelle.
- l'application conserve seulement un miroir local des réservations utiles à l'interface.

Conséquence:

- on ne développe pas de moteur de planning custom en V1,
- on ne stocke pas les slots disponibles en base,
- on ne calcule pas les conflits côté site.

## C. Logique de base de données

## Ce qui doit réellement être stocké

À stocker en base:

- utilisateurs authentifiés,
- profils,
- œuvres,
- offres de cours,
- contenu éditable du site,
- messages de contact,
- réservations si on synchronise Calendly.

À ne pas stocker comme source de vérité:

- disponibilités du calendrier,
- logique d'ouverture de créneaux,
- état métier principal de réservation si Calendly le gère déjà.

### Tables minimales recommandées

#### `auth.users`

Géré nativement par Supabase.

#### `profiles`

Colonnes minimales:

- `id`
- `user_id`
- `role`
- `full_name`
- `email`
- `phone`
- `child_name`
- `notes`
- `created_at`
- `updated_at`

#### `artworks`

Colonnes minimales:

- `id`
- `title`
- `slug`
- `description`
- `category`
- `tags`
- `image_path`
- `alt_text`
- `is_featured`
- `sort_order`
- `published`
- `created_at`
- `updated_at`

#### `course_offers`

Table utile dès la V1 si plusieurs cours existent.

Colonnes minimales:

- `id`
- `title`
- `slug`
- `short_description`
- `long_description`
- `duration_minutes`
- `target_audience`
- `level`
- `calendly_url`
- `is_featured`
- `is_active`
- `sort_order`

#### `site_settings`

Singleton ou table de configuration.

Colonnes minimales:

- `id`
- `hero_title`
- `hero_subtitle`
- `about_intro`
- `pedagogy_text`
- `instagram_url`
- `contact_email`
- `featured_artwork_id`
- `hero_video_path`
- `booking_intro`

#### `contact_messages`

Colonnes minimales:

- `id`
- `name`
- `email`
- `subject`
- `message`
- `status`
- `created_at`

#### `bookings`

Table recommandée si `Calendly Standard` est retenu.

Cette table n'est qu'un miroir local.

Colonnes minimales:

- `id`
- `user_id`
- `course_offer_id`
- `calendly_event_uri`
- `calendly_invitee_uri`
- `invitee_name`
- `invitee_email`
- `status`
- `start_at`
- `end_at`
- `timezone`
- `cancel_url`
- `reschedule_url`
- `created_at`
- `updated_at`

### Règles de sécurité

À prévoir avec `Row Level Security`:

- lecture publique uniquement pour les œuvres publiées et le contenu public,
- un utilisateur lit et modifie uniquement son propre profil,
- un utilisateur lit uniquement ses propres réservations,
- l'admin a accès complet au back-office.

## D. Parcours utilisateurs

### 1. Visiteur

Parcours recommandé:

- arrive sur la home,
- découvre l'univers visuel,
- voit la vidéo mise en avant,
- consulte la galerie,
- lit la présentation de Chantal,
- consulte les cours,
- réserve un créneau via `Calendly`,
- ou envoie un message via le formulaire de contact.

Important:

- la galerie doit être entièrement consultable sans inscription,
- la réservation peut être publique,
- le compte sert surtout au suivi et au confort d'usage.

### 2. Élève / Parent

Parcours recommandé:

- création de compte,
- connexion,
- accès à l'espace utilisateur,
- consultation des informations de profil,
- consultation des réservations à venir et passées si synchronisation activée,
- accès rapide aux liens `replanifier` et `annuler` fournis par Calendly.

Décision produit recommandée:

- ne pas bloquer la réservation derrière une obligation de compte en V1,
- mais relier automatiquement une réservation au compte si l'email correspond.

### 3. Administrateur Chantal

Parcours recommandé:

- connexion sécurisée,
- tableau de bord résumé,
- consultation des futures réservations,
- gestion des œuvres,
- gestion des offres de cours,
- gestion du contenu principal,
- consultation des messages de contact.

Limite volontaire:

- l'admin modifie les disponibilités et les règles de réservation dans `Calendly`,
- pas dans le dashboard custom.

## E. Direction design

## Intention visuelle

Le site doit se situer entre:

- un portfolio d'artiste,
- un studio éditorial,
- un espace pédagogique rassurant.

Il faut éviter:

- le rendu template,
- le look trop corporate,
- les couleurs génériques,
- les interfaces froides.

### Direction recommandée

Ambiance:

- éditoriale,
- aérienne,
- sensible,
- contemporaine,
- premium mais chaleureuse.

Référence issue de `IllustrationReseau`:

- noir encre,
- gris nuage,
- blanc cassé,
- accent doux plus organique pour réchauffer l'ensemble.

Palette suggérée:

- `Ink` `#111111`
- `Cloud` `#D8D6D1`
- `Paper` `#F5F0E8`
- `Sage` `#8A9584`
- `Terracotta` `#B56E56`

### Typographie

Je recommande une combinaison:

- titre éditorial serif: `Cormorant Garamond` ou équivalent premium,
- texte / UI sans-serif: `Manrope` ou `Plus Jakarta Sans`.

### UI / layout

Principes:

- grandes respirations,
- compositions asymétriques,
- alternance pleine largeur / colonnes,
- galerie type masonry raffinée,
- cartes simples mais très bien espacées,
- beaucoup de soin sur les marges, la typo et l'image.

### Motion

Animations recommandées:

- entrées progressives au scroll,
- parallaxe discrète,
- transitions fondues lentes,
- hover légers sur les œuvres.

À éviter:

- effets gadgets,
- sliders lourds,
- animations trop agressives.

### Home page recommandée

Sections proposées:

- hero visuel immersif avec message fort et CTA,
- bloc vidéo bande dessinée,
- présentation rapide de Chantal,
- sélection d'œuvres,
- présentation des cours,
- appel à la réservation,
- lien Instagram,
- contact.

## F. Plan de développement

### Étape 1 - Architecture

- initialiser `Next.js`
- brancher `Supabase`
- poser la structure App Router
- créer les layouts public / user / admin
- configurer les tables minimales

### Étape 2 - UI globale

- définir le design system
- intégrer la navigation
- construire la home
- poser les templates des pages internes
- intégrer responsive mobile / tablet / desktop

### Étape 3 - Galerie

- importer les œuvres existantes
- créer le modèle `artworks`
- construire la page galerie
- créer une fiche œuvre SEO-friendly
- mettre en avant `IllustrationReseau`

### Étape 4 - Auth

- inscription / connexion
- protection des routes privées
- création automatique du profil
- gestion des rôles

### Étape 5 - Réservation

- configurer `Calendly`
- connecter le Google Calendar de Chantal
- créer les offres de cours
- intégrer le widget sur `/reservation`
- préremplir les données utilisateur quand il est connecté
- ajouter sync webhook si plan Standard

### Étape 6 - Admin

- dashboard admin
- CRUD œuvres
- CRUD offres de cours
- édition du contenu principal
- liste des messages
- liste des réservations synchronisées

### Étape 7 - Finitions

- SEO technique
- métadonnées Open Graph
- performances image / vidéo
- accessibilité
- responsive final
- analytics
- politique de confidentialité

## G. Calendly: intégration recommandée

### Pourquoi je recommande Calendly ici

Parce que Calendly remplace immédiatement tout ce qui serait coûteux à développer:

- choix de créneaux,
- gestion des indisponibilités,
- synchronisation calendrier,
- confirmation de réservation,
- liens de replanification et d'annulation,
- prévention des doubles réservations.

### Ce que le plan gratuit permet

D'après la documentation publique Calendly consultée le 17 avril 2026:

- `1 event type`
- `1 calendar`
- réservation illimitée
- personnalisation de base
- embed sur le site

Conclusion:

- exploitable pour un test simple,
- trop limité pour une vraie montée en gamme du projet.

### Ce que l'offre Standard apporte et justifie

D'après la page de pricing Calendly consultée le 17 avril 2026:

- `unlimited event types`
- connexion de plusieurs calendriers
- `webhooks`
- intégrations plus sérieuses

Conclusion:

- c'est le meilleur point d'équilibre coût / capacité pour ce projet.

### Comment l'intégrer dans le site

Approche recommandée:

- page dédiée `/reservation`,
- cartes d'offres de cours,
- sélection d'une offre,
- widget `Calendly` inline,
- préremplissage du nom et de l'email quand l'utilisateur est connecté,
- message de confirmation in-app après événement `calendly.event_scheduled`.

### Ce que Calendly remplace côté backend

Calendly remplace:

- le moteur de réservation,
- la logique de disponibilité,
- les conflits de planning,
- la logique de replanification / annulation,
- les emails transactionnels de réservation.

### Ce qu'il faut stocker ou non en base

À stocker:

- l'URL Calendly de chaque offre,
- le miroir des réservations si sync activée,
- les URLs utiles de replanification et annulation si disponibles,
- la relation éventuelle entre réservation et utilisateur.

À ne pas stocker:

- la grille des créneaux disponibles,
- le moteur de calcul des créneaux,
- les règles métier de calendrier.

### Comment connecter le calendrier Google de Chantal

Procédure recommandée:

- créer le compte `Calendly` de Chantal,
- aller dans `Availability`,
- ouvrir `Calendar settings`,
- connecter le compte `Google Calendar`,
- choisir les calendriers à vérifier pour les conflits,
- choisir le calendrier principal où les rendez-vous sont ajoutés.

### Comment afficher proprement la réservation

Approche UI recommandée:

- page `/cours` pour expliquer les offres,
- page `/reservation` centrée conversion,
- widget inline sur desktop,
- bloc plus compact sur mobile,
- résumé pédagogique au-dessus du widget,
- rappel rassurant sous le widget sur annulation et replanification.

## Décisions éliminées

Je déconseille en V1:

- un moteur de réservation custom,
- une architecture backend séparée type `NestJS` ou `Express`,
- un CMS lourd séparé,
- une logique de paiement dès maintenant,
- une obligation de compte avant toute réservation.

## Résumé décisionnel

Le meilleur choix production est:

- `Next.js` App Router
- `Supabase`
- `Calendly Standard`
- `Google Calendar`
- `Vercel`

Et le cadre produit le plus sain est:

- galerie publique,
- réservation gérée par Calendly,
- espace utilisateur léger mais propre,
- admin simple pour les œuvres, contenus, messages et réservations synchronisées,
- base prête pour ajouter le paiement plus tard sans refaire toute l'architecture.

## Sources officielles utilisées

- Calendly Pricing: https://calendly.com/pricing
- Calendly - How to connect your Google Calendar: https://calendly.com/help/how-to-connect-your-google-calendar
- Calendly - Embed and API: https://calendly.com/help/calendly-embed-and-the-api
- Calendly - Embed options overview: https://calendly.com/help/embed-options-overview
- Next.js App Router docs: https://nextjs.org/docs/app
- Supabase Auth with Next.js: https://supabase.com/docs/guides/auth/quickstarts/nextjs
