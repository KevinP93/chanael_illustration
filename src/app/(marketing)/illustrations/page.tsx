import { ArtworkMasonry } from "@/components/gallery/artwork-masonry";
import { PageHero } from "@/components/sections/page-hero";
import { artworks } from "@/lib/site-data";

export default function IllustrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="Une galerie elegante, responsive et pensee pour accueillir de nouveaux visuels."
        description="Les oeuvres actuelles ont ete integrees directement dans le projet. La page est prete pour un futur branchement a Supabase Storage et un tri par categories depuis l&apos;admin."
      />

      <section className="section-shell pt-12 sm:pt-16">
        <ArtworkMasonry artworks={artworks} />
      </section>
    </>
  );
}
