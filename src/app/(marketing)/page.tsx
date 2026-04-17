import Link from "next/link";
import {
  ArrowRight,
  BrushCleaning,
  CalendarClock,
  GraduationCap,
} from "lucide-react";
import { ArtworkMasonry } from "@/components/gallery/artwork-masonry";
import { HomeHero } from "@/components/sections/home-hero";
import { Reveal } from "@/components/ui/reveal";
import { artworks, courseOffers, siteContent } from "@/lib/site-data";

const featuredArtworks = [
  "portrait-sous-les-nuages",
  "illustration-671",
  "illustration-740",
  "illustration-680",
]
  .map((slug) => artworks.find((artwork) => artwork.slug === slug))
  .filter((artwork) => artwork !== undefined);

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section-shell pt-16 sm:pt-20">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-5">
            <p className="eyebrow">Une double promesse</p>
            <h2 className="section-title">
              Montrer un univers d&apos;artiste sans perdre la clarte attendue
              pour les ateliers.
            </h2>
            <p className="section-copy">{siteContent.aboutText}</p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: BrushCleaning,
                title: "Galerie publique",
                text: "Les oeuvres restent visibles librement, sans friction ni creation de compte.",
              },
              {
                icon: GraduationCap,
                title: "Pedagogie lisible",
                text: "Les ateliers sont expliques clairement pour rassurer parents et eleves.",
              },
              {
                icon: CalendarClock,
                title: "Reservation fluide",
                text: "La disponibilite reelle de Chantal reste pilotee via Calendly et Google Calendar.",
              },
            ].map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.08}
                className="card-surface p-5"
              >
                <item.icon className="text-terracotta" size={20} />
                <h3 className="mt-4 font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-16 sm:pt-20">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="eyebrow">Selection d&apos;oeuvres</p>
            <h2 className="section-title">
              Une galerie editoriale, consultable sans inscription.
            </h2>
            <p className="section-copy">
              Les premiers visuels existants sont deja branches au projet. La
              structure est prete pour un futur import Supabase Storage et une
              edition depuis l&apos;admin.
            </p>
          </div>
          <Link href="/illustrations" className="pill-link w-full sm:w-auto">
            Explorer toute la galerie <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>

        <ArtworkMasonry artworks={featuredArtworks} compact />
      </section>

      <section className="section-shell pt-16 sm:pt-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {courseOffers.map((course, index) => (
            <Reveal key={course.id} delay={index * 0.08} className="card-surface p-6">
              <p className="eyebrow">{course.duration}</p>
              <h3 className="mt-3 font-display text-3xl text-ink">{course.title}</h3>
              <p className="mt-2 text-sm font-semibold text-ink/55">{course.audience}</p>
              <p className="mt-4 text-sm leading-7 text-ink/68">{course.description}</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-ink/68">
                {course.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
