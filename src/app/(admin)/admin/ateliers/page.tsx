import { AdminShell } from "@/components/admin/admin-shell";
import { courseOffers } from "@/lib/site-data";

export default function AdminWorkshopsPage() {
  return (
    <AdminShell
      title="Gestion des ateliers"
      description="Les offres visibles cote public peuvent etre pilotees ici, independamment des reglages Calendly."
    >
      <section className="grid gap-5 lg:grid-cols-3">
        {courseOffers.map((course) => (
          <article key={course.id} className="card-surface p-6">
            <p className="eyebrow">{course.duration}</p>
            <h2 className="mt-3 font-display text-3xl text-ink">{course.title}</h2>
            <p className="mt-2 text-sm font-semibold text-ink/55">{course.audience}</p>
            <p className="mt-4 text-sm leading-7 text-ink/68">{course.description}</p>
          </article>
        ))}
      </section>
    </AdminShell>
  );
}
