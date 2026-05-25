import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { artworks, getArtworkBySlug } from "@/lib/site-data";

type ArtworkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}

export async function generateMetadata({
  params,
}: ArtworkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);

  if (!artwork) {
    return {};
  }

  return {
    title: artwork.title,
    description: artwork.description,
  };
}

export default async function ArtworkDetailPage({
  params,
}: ArtworkDetailPageProps) {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);

  if (!artwork) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={artwork.category}
        title={artwork.title}
        description={artwork.description}
      />

      <section className="section-shell pt-12 sm:pt-16">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="card-surface overflow-hidden p-2 sm:p-3">
            <Image
              src={artwork.image}
              alt={artwork.alt}
              width={1400}
              height={1800}
              className="h-auto w-full rounded-[1.1rem] object-cover sm:rounded-[1.5rem]"
              sizes="(max-width: 1024px) 100vw, 65vw"
              priority
            />
          </div>
          <article className="card-surface p-6 sm:p-8">
            <p className="eyebrow">Détail d&apos;œuvre</p>
            <div className="mt-5 space-y-5 text-sm leading-8 text-ink/68">
              <p>
                <span className="font-semibold text-ink">Année:</span> {artwork.year}
              </p>
              <p>
                <span className="font-semibold text-ink">Technique:</span>{" "}
                {artwork.medium}
              </p>
              <p>
                <span className="font-semibold text-ink">Description:</span>{" "}
                {artwork.description}
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
