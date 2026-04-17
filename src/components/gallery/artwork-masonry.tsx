import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/types/site";
import { cn } from "@/lib/utils";

type ArtworkMasonryProps = {
  artworks: Artwork[];
  compact?: boolean;
};

export function ArtworkMasonry({
  artworks,
  compact = false,
}: ArtworkMasonryProps) {
  return (
    <div
      className={cn(
        "columns-1 gap-6 md:columns-2 xl:columns-3",
        compact && "xl:columns-2",
      )}
    >
      {artworks.map((artwork) => (
        <Link
          key={artwork.id}
          href={`/illustrations/${artwork.slug}`}
          className="group mb-6 block break-inside-avoid"
        >
          <article className="card-surface overflow-hidden">
            <div className="relative overflow-hidden">
              <Image
                src={artwork.image}
                alt={artwork.alt}
                width={1200}
                height={1600}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
            <div className="space-y-2 px-5 py-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl text-ink">{artwork.title}</h3>
                <span className="text-xs uppercase tracking-[0.24em] text-terracotta">
                  {artwork.year}
                </span>
              </div>
              <p className="text-sm font-semibold text-ink/55">{artwork.category}</p>
              <p className="text-sm leading-7 text-ink/68">{artwork.description}</p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
