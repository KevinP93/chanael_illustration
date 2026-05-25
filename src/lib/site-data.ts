import type { Artwork, CourseOffer, DashboardBooking } from "@/types/site";

export const siteContent = {
  heroTitle:
    "Illustration sensible, ateliers en ligne et univers graphique singulier.",
  heroText:
    "Chanael Illustration mêle regard narratif, douceur graphique et accompagnement attentif pour guider les élèves dans leur pratique créative.",
  aboutText:
    "Un espace pour découvrir les illustrations de Chanael, comprendre son approche pédagogique et réserver un atelier en ligne en toute simplicité.",
  instagramUrl: "https://www.instagram.com/chanael_illustration",
  contactEmail: "chantal.piergentili@gmail.com",
};

export const artworks: Artwork[] = [
  {
    id: "art-1",
    slug: "portrait-sous-les-nuages",
    title: "Portrait sous les nuages",
    category: "Encre",
    year: "2026",
    medium: "Illustration numérique",
    description:
      "Un portrait sensible, entre ciel chargé et feuillage délicat, pensé comme une entrée dans l'univers de Chanael.",
    alt: "Portrait en noir et blanc sous un ciel nuageux avec un feuillage détaillé.",
    image: "/media/gallery/illustration-reseau.png",
    featured: true,
  },
  {
    id: "art-2",
    slug: "illustration-671",
    title: "Illustration 671",
    category: "Portfolio",
    year: "2026",
    medium: "Illustration numérique",
    description: "Une illustration de portfolio aux lignes douces et à l'atmosphère intimiste.",
    alt: "Illustration du portfolio de Chanael, visuel 671.",
    image: "/media/gallery/illustration-671.png",
  },
  {
    id: "art-3",
    slug: "illustration-674",
    title: "Illustration 674",
    category: "Portfolio",
    year: "2026",
    medium: "Illustration numérique",
    description: "Une composition expressive qui met en avant le goût du détail et de la narration visuelle.",
    alt: "Illustration du portfolio de Chanael, visuel 674.",
    image: "/media/gallery/illustration-674.png",
  },
  {
    id: "art-4",
    slug: "illustration-680",
    title: "Illustration 680",
    category: "Portfolio",
    year: "2026",
    medium: "Illustration numérique",
    description: "Une étude graphique autour du personnage, de la posture et de l'expression.",
    alt: "Illustration du portfolio de Chanael, visuel 680.",
    image: "/media/gallery/illustration-680.jpeg",
  },
  {
    id: "art-5",
    slug: "illustration-740",
    title: "Illustration 740",
    category: "Portfolio",
    year: "2026",
    medium: "Illustration numérique",
    description: "Un visuel de portfolio qui explore les contrastes, les formes et la sensibilité du trait.",
    alt: "Illustration du portfolio de Chanael, visuel 740.",
    image: "/media/gallery/illustration-740.png",
  },
  {
    id: "art-6",
    slug: "illustration-747",
    title: "Illustration 747",
    category: "Portfolio",
    year: "2026",
    medium: "Illustration numérique",
    description: "Une illustration pensée comme une scène courte, entre observation et imaginaire.",
    alt: "Illustration du portfolio de Chanael, visuel 747.",
    image: "/media/gallery/illustration-747.png",
  },
  {
    id: "art-7",
    slug: "illustration-753",
    title: "Illustration 753",
    category: "Portfolio",
    year: "2026",
    medium: "Illustration numérique",
    description: "Une image délicate qui prolonge l'univers graphique de la galerie.",
    alt: "Illustration du portfolio de Chanael, visuel 753.",
    image: "/media/gallery/illustration-753.png",
  },
  {
    id: "art-8",
    slug: "portrait-archive",
    title: "Portrait archive",
    category: "Étude",
    year: "2026",
    medium: "Illustration numérique",
    description: "Un portrait d'ambiance, idéal pour saisir la douceur et la profondeur du travail présenté.",
    alt: "Portrait issu des assets initiaux de Chanael.",
    image: "/media/gallery/portrait-cloud.jpeg",
  },
];

export const courseOffers: CourseOffer[] = [
  {
    id: "course-1",
    slug: "atelier-decouverte",
    title: "Atelier découverte",
    audience: "Débutant, enfant ou adulte",
    duration: "45 min",
    description:
      "Une première séance pour découvrir l'approche pédagogique, poser les bases et évaluer le rythme idéal.",
    benefits: [
      "Présentation du matériel",
      "Échange sur les objectifs",
      "Conseils personnalisés",
    ],
  },
  {
    id: "course-2",
    slug: "atelier-individuel",
    title: "Atelier individuel en ligne",
    audience: "Élève régulier",
    duration: "1 h",
    description:
      "Un accompagnement pour progresser en dessin, explorer la narration visuelle et développer sa créativité à son rythme.",
    benefits: [
      "Exercices adaptés au niveau",
      "Retours personnalisés et bienveillants",
      "Suivi pour évoluer en confiance",
    ],
  },
  {
    id: "course-3",
    slug: "point-parent-eleve",
    title: "Point parent / élève",
    audience: "Parents et accompagnement",
    duration: "30 min",
    description:
      "Un créneau court pour faire le point sur le suivi, les attentes pédagogiques et l'organisation des prochaines séances.",
    benefits: [
      "Visibilité sur la progression",
      "Organisation simple",
      "Échange rassurant",
    ],
  },
];

export const dashboardBookings: DashboardBooking[] = [
  {
    id: "booking-1",
    student: "Lou Martin",
    course: "Atelier individuel en ligne",
    dateLabel: "Mardi 22 avril - 18:00",
    status: "confirmé",
  },
  {
    id: "booking-2",
    student: "Camille Durand",
    course: "Atelier découverte",
    dateLabel: "Vendredi 25 avril - 17:30",
    status: "à confirmer",
  },
  {
    id: "booking-3",
    student: "Émile Robert",
    course: "Point parent / élève",
    dateLabel: "Lundi 28 avril - 19:00",
    status: "replanifié",
  },
];

export function getArtworkBySlug(slug: string) {
  return artworks.find((artwork) => artwork.slug === slug);
}
