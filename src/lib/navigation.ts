import type { NavItem } from "@/types/site";

export const mainNavigation: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/illustrations", label: "Illustrations" },
  { href: "/ateliers", label: "Ateliers" },
  { href: "/reservation", label: "Reservation" },
];

export const userNavigation: NavItem[] = [
  { href: "/espace", label: "Vue d'ensemble" },
  { href: "/espace/profil", label: "Profil" },
  { href: "/espace/reservations", label: "Reservations" },
];

export const adminNavigation: NavItem[] = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/oeuvres", label: "Oeuvres" },
  { href: "/admin/ateliers", label: "Ateliers" },
  { href: "/admin/reservations", label: "Reservations" },
  { href: "/admin/contenu", label: "Contenu" },
  { href: "/admin/messages", label: "Messages" },
  { href: "/admin/utilisateurs", label: "Utilisateurs" },
];
