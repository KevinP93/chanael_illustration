import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/lib/site-data";
import { Reveal } from "@/components/ui/reveal";

export function HomeHero() {
  return (
    <section className="section-shell pt-6 sm:pt-10">
      <Reveal className="relative">
        <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-terracotta/18 blur-2xl sm:-left-12 sm:h-40 sm:w-40" />
        <div className="absolute -right-4 bottom-12 h-28 w-28 rounded-full bg-sage/18 blur-2xl sm:-right-10 sm:h-44 sm:w-44" />

        <div className="relative overflow-hidden rounded-[1.9rem] border border-ink/10 bg-[#0b0b0b] p-2 shadow-[0_28px_90px_rgba(17,17,17,0.18)] sm:rounded-[2.8rem] sm:p-3">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.45rem] bg-[#0b0b0b] sm:aspect-[16/8.8] sm:rounded-[2.2rem] lg:aspect-[16/7.2]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
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
        </div>
      </Reveal>

      <div className="mt-6">
        <Reveal className="card-surface noise-overlay overflow-hidden px-5 py-8 sm:px-10 sm:py-14">
          <div className="relative z-10 max-w-2xl space-y-6">
            <p className="eyebrow">Artiste peintre - Illustratrice - Ateliers en ligne</p>
            <h1 className="font-display text-[clamp(2.9rem,12vw,5.7rem)] leading-[0.92] tracking-tight text-ink">
              {siteContent.heroTitle}
            </h1>
            <p className="max-w-xl text-base leading-7 text-ink/72 sm:text-lg sm:leading-8">
              {siteContent.heroText}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/illustrations" className="primary-link w-full sm:w-auto">
                Voir les oeuvres
              </Link>
              <Link href="/reservation" className="pill-link w-full sm:w-auto">
                Reserver un atelier <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
