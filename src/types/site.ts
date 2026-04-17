export type NavItem = {
  href: string;
  label: string;
};

export type Artwork = {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  medium: string;
  description: string;
  alt: string;
  image: string;
  featured?: boolean;
};

export type CourseOffer = {
  id: string;
  slug: string;
  title: string;
  audience: string;
  duration: string;
  description: string;
  benefits: string[];
  calendlyUrl?: string;
};

export type DashboardBooking = {
  id: string;
  student: string;
  course: string;
  dateLabel: string;
  status: "confirme" | "a confirmer" | "replanifie";
};
