import { ArtworkMasonry } from "@/components/gallery/artwork-masonry";
import { PageHero } from "@/components/sections/page-hero";
import { artworks } from "@/lib/site-data";

export default function IllustrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="Illustrations, portraits et fragments d'histoires."
        description="Parcourez une sélection d'œuvres de Chanael, entre douceur du trait, narration visuelle et compositions sensibles."
      />

      <section className="section-shell pt-12 sm:pt-16">
        <ArtworkMasonry artworks={artworks} />
      </section>
    </>
  );
}
