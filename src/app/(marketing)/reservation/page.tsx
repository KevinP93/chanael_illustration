import { CalendlyPanel } from "@/components/booking/calendly-panel";
import { PageHero } from "@/components/sections/page-hero";
import { courseOffers } from "@/lib/site-data";

export default function ReservationPage() {
  return (
    <>
      <PageHero
        eyebrow="Reservation"
        title="Une page dediee au booking, claire pour l&apos;utilisateur et simple a administrer."
        description="Cette page est prete pour accueillir le widget Calendly inline. Les offres restent editables cote application, tandis que les disponibilites sont gerees dans Calendly."
      />

      <section className="section-shell pt-12 sm:pt-16">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-4">
            {courseOffers.map((course) => (
              <article key={course.id} className="card-surface p-5">
                <p className="eyebrow">{course.duration}</p>
                <h2 className="mt-3 font-display text-3xl text-ink">{course.title}</h2>
                <p className="mt-2 text-sm font-semibold text-ink/55">{course.audience}</p>
                <p className="mt-4 text-sm leading-7 text-ink/68">{course.description}</p>
              </article>
            ))}
          </div>

          <CalendlyPanel title="Reserver un creneau d'atelier" />
        </div>
      </section>
    </>
  );
}
