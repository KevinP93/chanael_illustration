import type { Artwork, CourseOffer, DashboardBooking } from "@/types/site";

export const siteContent = {
  heroTitle:
    "Illustration sensible, ateliers en ligne et univers graphique singulier.",
  heroText:
    "Chanael Illustration mele regard narratif, douceur graphique et exigence pedagogique pour accompagner les eleves dans une pratique creative structuree.",
  aboutText:
    "Le site presente a la fois une artiste et une professeure: une direction artistique editoriale, des oeuvres visibles librement et un parcours de reservation tres clair.",
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
    medium: "Illustration numerique",
    description:
      "Piece atmospherique utilisee comme repere visuel fort pour l'identite sociale du projet.",
    alt: "Portrait en noir et blanc sous un ciel nuageux avec un feuillage detaille.",
    image: "/media/gallery/illustration-reseau.png",
    featured: true,
  },
  {
    id: "art-2",
    slug: "illustration-671",
    title: "Illustration 671",
    category: "Portfolio",
    year: "2026",
    medium: "Illustration numerique",
    description: "Oeuvre issue des assets initiaux a enrichir dans l'admin.",
    alt: "Illustration du portfolio de Chanael, visuel 671.",
    image: "/media/gallery/illustration-671.png",
  },
  {
    id: "art-3",
    slug: "illustration-674",
    title: "Illustration 674",
    category: "Portfolio",
    year: "2026",
    medium: "Illustration numerique",
    description: "Oeuvre issue des assets initiaux a enrichir dans l'admin.",
    alt: "Illustration du portfolio de Chanael, visuel 674.",
    image: "/media/gallery/illustration-674.png",
  },
  {
    id: "art-4",
    slug: "illustration-680",
    title: "Illustration 680",
    category: "Portfolio",
    year: "2026",
    medium: "Illustration numerique",
    description: "Oeuvre issue des assets initiaux a enrichir dans l'admin.",
    alt: "Illustration du portfolio de Chanael, visuel 680.",
    image: "/media/gallery/illustration-680.jpeg",
  },
  {
    id: "art-5",
    slug: "illustration-740",
    title: "Illustration 740",
    category: "Portfolio",
    year: "2026",
    medium: "Illustration numerique",
    description: "Oeuvre issue des assets initiaux a enrichir dans l'admin.",
    alt: "Illustration du portfolio de Chanael, visuel 740.",
    image: "/media/gallery/illustration-740.png",
  },
  {
    id: "art-6",
    slug: "illustration-747",
    title: "Illustration 747",
    category: "Portfolio",
    year: "2026",
    medium: "Illustration numerique",
    description: "Oeuvre issue des assets initiaux a enrichir dans l'admin.",
    alt: "Illustration du portfolio de Chanael, visuel 747.",
    image: "/media/gallery/illustration-747.png",
  },
  {
    id: "art-7",
    slug: "illustration-753",
    title: "Illustration 753",
    category: "Portfolio",
    year: "2026",
    medium: "Illustration numerique",
    description: "Oeuvre issue des assets initiaux a enrichir dans l'admin.",
    alt: "Illustration du portfolio de Chanael, visuel 753.",
    image: "/media/gallery/illustration-753.png",
  },
  {
    id: "art-8",
    slug: "portrait-archive",
    title: "Portrait archive",
    category: "Etude",
    year: "2026",
    medium: "Illustration numerique",
    description: "Image d'archive a utiliser en respirations editoriales.",
    alt: "Portrait issu des assets initiaux de Chanael.",
    image: "/media/gallery/portrait-cloud.jpeg",
  },
];

export const courseOffers: CourseOffer[] = [
  {
    id: "course-1",
    slug: "atelier-decouverte",
    title: "Atelier decouverte",
    audience: "Debutant, enfant ou adulte",
    duration: "45 min",
    description:
      "Une premiere seance pour decouvrir l'approche pedagogique, poser les bases et evaluer le rythme ideal.",
    benefits: [
      "Presentation du materiel",
      "Echange sur les objectifs",
      "Conseils personnalises",
    ],
  },
  {
    id: "course-2",
    slug: "atelier-individuel",
    title: "Atelier individuel en ligne",
    audience: "Eleve regulier",
    duration: "1 h",
    description:
      "Un format suivi pour progresser techniquement, travailler la narration visuelle et developper un univers personnel.",
    benefits: [
      "Suivi d'exercices",
      "Corrections ciblees",
      "Progression structuree",
    ],
  },
  {
    id: "course-3",
    slug: "point-parent-eleve",
    title: "Point parent / eleve",
    audience: "Parents et accompagnement",
    duration: "30 min",
    description:
      "Un creneau court pour faire le point sur le suivi, les attentes pedagogiques et l'organisation des prochaines seances.",
    benefits: [
      "Visibilite sur la progression",
      "Organisation simple",
      "Echange rassurant",
    ],
  },
];

export const dashboardBookings: DashboardBooking[] = [
  {
    id: "booking-1",
    student: "Lou Martin",
    course: "Atelier individuel en ligne",
    dateLabel: "Mardi 22 avril - 18:00",
    status: "confirme",
  },
  {
    id: "booking-2",
    student: "Camille Durand",
    course: "Atelier decouverte",
    dateLabel: "Vendredi 25 avril - 17:30",
    status: "a confirmer",
  },
  {
    id: "booking-3",
    student: "Emile Robert",
    course: "Point parent / eleve",
    dateLabel: "Lundi 28 avril - 19:00",
    status: "replanifie",
  },
];

export function getArtworkBySlug(slug: string) {
  return artworks.find((artwork) => artwork.slug === slug);
}
