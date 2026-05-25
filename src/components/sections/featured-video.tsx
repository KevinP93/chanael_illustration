import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/site-data";

export function FeaturedVideo() {
  return (
    <section className="section-shell pt-16 sm:pt-20">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="space-y-5">
          <p className="eyebrow">Séquence immersive</p>
          <h2 className="section-title">
            Une vidéo dessinée pour entrer dans l&apos;univers de Chanael.
          </h2>
          <p className="section-copy">
            Un format vivant pour montrer le mouvement du trait, l&apos;ambiance
            graphique et la narration qui accompagne les illustrations.
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
              <source src="/media/video/nouveau-plan.mp4" type="video/mp4" />
              Votre navigateur ne peut pas lire cette vidéo.
            </video>
          </div>
          <p className="px-2 pt-4 text-sm leading-7 text-ink/65 sm:px-3">
            Une lecture simple pour découvrir la séquence sur mobile comme sur
            desktop.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
