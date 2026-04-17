import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/site-data";

export function FeaturedVideo() {
  return (
    <section className="section-shell pt-16 sm:pt-20">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="space-y-5">
          <p className="eyebrow">Sequence immersive</p>
          <h2 className="section-title">
            La video bande dessinee trouve naturellement sa place dans l&apos;accueil.
          </h2>
          <p className="section-copy">
            Le projet est pret a mettre en avant la video de la cliente dans une
            section forte. La version `.mp4` web est maintenant integree au site
            pour une lecture plus fiable sur desktop et mobile.
          </p>
          <Link
            href={`mailto:${siteContent.contactEmail}`}
            className="pill-link w-full sm:w-auto"
          >
            Parler du storyboard <PlayCircle className="ml-2" size={16} />
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="card-surface overflow-hidden p-2 sm:p-3">
          <div className="overflow-hidden rounded-[1.1rem] bg-ink sm:rounded-[1.5rem]">
            <video
              className="aspect-video w-full object-cover"
              controls
              playsInline
              poster="/media/social/illustration-reseau.png"
            >
              <source src="/media/video/bande-dessinee-hero.mp4" type="video/mp4" />
              <source
                src="/media/video/bande-dessinee-hero.mov"
                type="video/quicktime"
              />
              Votre navigateur ne peut pas lire cette video.
            </video>
          </div>
          <p className="px-2 pt-4 text-sm leading-7 text-ink/65 sm:px-3">
            La version `.mp4` est servie en priorite. Le `.mov` peut rester en
            secours ou etre supprime plus tard si tu veux alleger le depot.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
