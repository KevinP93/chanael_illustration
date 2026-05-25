import { AdminShell } from "@/components/admin/admin-shell";
import { dashboardBookings } from "@/lib/site-data";

export default function AdminDashboardPage() {
  return (
    <AdminShell
      title="Tableau de bord"
      description="Vue d'ensemble des contenus, ateliers, réservations et messages du site."
    >
      <section className="grid gap-5 md:grid-cols-4">
        {[
          ["Œuvres publiées", "8"],
          ["Offres d'ateliers", "3"],
          ["Réservations visibles", `${dashboardBookings.length}`],
          ["Messages", "0"],
        ].map(([label, value]) => (
          <article key={label} className="card-surface p-5">
            <p className="text-sm font-medium text-ink/55">{label}</p>
            <p className="mt-4 font-display text-4xl text-ink">{value}</p>
          </article>
        ))}
      </section>
    </AdminShell>
  );
}
