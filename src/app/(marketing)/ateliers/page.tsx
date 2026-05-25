import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { courseOffers } from "@/lib/site-data";

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ateliers"
        title="Des ateliers en ligne pour progresser en dessin et développer sa créativité."
        description="Un accompagnement pour progresser en dessin, explorer la narration visuelle et développer sa créativité à son rythme."
      />

      <section className="section-shell pt-12 sm:pt-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {courseOffers.map((course) => (
            <article key={course.id} className="card-surface p-6">
              <p className="eyebrow">{course.duration}</p>
              <h2 className="mt-4 font-display text-3xl text-ink">{course.title}</h2>
              <p className="mt-2 text-sm font-semibold text-ink/55">{course.audience}</p>
              <p className="mt-4 text-sm leading-7 text-ink/68">{course.description}</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-ink/68">
                {course.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[1.6rem] border border-ink/10 bg-paper/90 p-5 sm:rounded-[2rem] sm:p-8">
          <p className="eyebrow">Organisation</p>
          <h3 className="mt-3 font-display text-3xl text-ink">
            Des créneaux simples à choisir, pour avancer sans contrainte.
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-ink/68">
            La réservation permet de sélectionner un horaire disponible et de
            préparer sereinement la prochaine séance avec Chanael.
          </p>
          <Link href="/reservation" className="primary-link mt-6 w-full sm:w-auto">
            Accéder à la réservation
          </Link>
        </div>
      </section>
    </>
  );
}
