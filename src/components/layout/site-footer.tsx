import Link from "next/link";
import { Camera, Mail } from "lucide-react";
import { siteContent } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-ink/10 bg-paper/80 sm:mt-24">
      <div className="section-shell py-10 text-center sm:py-12">
        <div className="mx-auto max-w-3xl space-y-4">
          <p className="eyebrow">Chanael Illustration</p>
          <h2 className="font-display text-2xl leading-tight text-ink sm:text-3xl">
            Un site vitrine pensé pour montrer les œuvres, accueillir les élèves
            et simplifier la réservation.
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-ink/65">
            Portfolio public, page de réservation dédiée et point de contact
            simple pour guider les futures demandes d&apos;atelier.
          </p>
        </div>

        <div className="mt-8 grid gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-12">
          <div className="space-y-3 text-center text-sm text-ink/70">
            <p className="font-semibold text-ink">Navigation</p>
            <Link href="/illustrations" className="block hover:text-ink">
              Illustrations
            </Link>
            <Link href="/ateliers" className="block hover:text-ink">
              Ateliers
            </Link>
            <Link href="/reservation" className="block hover:text-ink">
              Réservation
            </Link>
          </div>

          <div className="flex flex-col items-center gap-3 text-center text-sm text-ink/70">
            <p className="font-semibold text-ink">Contact</p>
            <Link
              href={`mailto:${siteContent.contactEmail}`}
              className="inline-flex items-center gap-2 text-center hover:text-ink"
            >
              <Mail size={14} />
              {siteContent.contactEmail}
            </Link>
            <Link
              href="https://www.instagram.com/chanael_illustration"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-ink"
            >
              <Camera size={14} />
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
