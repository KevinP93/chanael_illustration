import type { NavItem } from "@/types/site";

export const mainNavigation: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/illustrations", label: "Illustrations" },
  { href: "/ateliers", label: "Ateliers" },
  { href: "/reservation", label: "Réservation" },
];

export const userNavigation: NavItem[] = [
  { href: "/espace", label: "Vue d'ensemble" },
  { href: "/espace/profil", label: "Profil" },
  { href: "/espace/reservations", label: "Réservations" },
];

export const adminNavigation: NavItem[] = [
  { href: "/admin", label: "Tableau de bord" },
  { href: "/admin/oeuvres", label: "Œuvres" },
  { href: "/admin/ateliers", label: "Ateliers" },
  { href: "/admin/reservations", label: "Réservations" },
  { href: "/admin/contenu", label: "Contenu" },
  { href: "/admin/messages", label: "Messages" },
  { href: "/admin/utilisateurs", label: "Utilisateurs" },
];
