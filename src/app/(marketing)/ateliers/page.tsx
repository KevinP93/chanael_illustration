import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { courseOffers } from "@/lib/site-data";

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ateliers"
        title="Des ateliers en ligne presentes de facon simple, claire et professionnelle."
        description="Le site distingue la decouverte de l&apos;univers artistique, l&apos;explication pedagogique et la reservation. Cette separation ameliore la comprehension et la conversion."
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
            Calendly gere les creneaux, le site reste concentre sur l&apos;experience.
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-ink/68">
            Les disponibilites doivent rester synchronisees au calendrier de
            Chantal. La page de reservation dediee permet de garder une UX claire
            tout en evitant de reconstruire un moteur de planning complet cote
            site.
          </p>
          <Link href="/reservation" className="primary-link mt-6 w-full sm:w-auto">
            Acceder a la reservation
          </Link>
        </div>
      </section>
    </>
  );
}
