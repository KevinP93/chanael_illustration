# Chanael Illustration

Site vitrine + reservation d'ateliers en ligne + espace utilisateur + base de back-office pour `chanael illustration`.

## Stack

- `Next.js` App Router
- `TypeScript`
- `Tailwind CSS v4`
- `Supabase` pret a brancher pour auth / data / storage
- `Calendly` pret a brancher pour la reservation

## Lancement local

```bash
npm install
npm run dev
```

Build de production:

```bash
npm run lint
npm run typecheck
npm run build
```

## Variables d'environnement

Copier `.env.example` vers `.env.local` puis renseigner:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_CALENDLY_URL=
```

## Structure actuelle

- `/` home editoriale
- `/a-propos`
- `/illustrations`
- `/illustrations/[slug]`
- `/ateliers`
- `/reservation`
- `/contact`
- `/connexion`
- `/inscription`
- `/espace`
- `/espace/profil`
- `/espace/reservations`
- `/admin`
- `/admin/oeuvres`
- `/admin/ateliers`
- `/admin/reservations`
- `/admin/contenu`
- `/admin/messages`
- `/admin/utilisateurs`

Compatibilite:

- `/cours` redirige vers `/ateliers`
- `/admin/cours` redirige vers `/admin/ateliers`

## Assets

Les assets source ont ete integres dans:

- `assets-source/raw/gallery`
- `assets-source/raw/video`

Les medias actuellement servis par le site sont dans:

- `public/media/gallery`
- `public/media/social`
- `public/media/video`

Note importante:

- la version web `.mp4` est maintenant integree dans `public/media/video`
- le `.mov` source peut etre conserve en archive ou retire plus tard

## Ce qui est deja en place

- direction artistique de base
- galerie connectee aux visuels existants
- page de reservation dediee
- shell d'espace utilisateur
- shell d'espace administrateur
- helpers Supabase
- point d'entree API pour contact
- point d'entree webhook Calendly

## Ce qu'il reste a brancher

- authentification Supabase reelle
- tables Supabase et policies RLS
- widget Calendly via `NEXT_PUBLIC_CALENDLY_URL`
- synchronisation webhook des reservations
- persistance du formulaire de contact
- CRUD admin connecte a la base

## Documentation projet

- Architecture: [docs/architecture-production.md](docs/architecture-production.md)
