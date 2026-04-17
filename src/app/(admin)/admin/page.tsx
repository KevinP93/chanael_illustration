import { AdminShell } from "@/components/admin/admin-shell";
import { dashboardBookings } from "@/lib/site-data";

export default function AdminDashboardPage() {
  return (
    <AdminShell
      title="Dashboard admin"
      description="Le back-office est pret pour piloter les oeuvres, les ateliers, les messages et le miroir des reservations."
    >
      <section className="grid gap-5 md:grid-cols-4">
        {[
          ["Oeuvres importees", "8"],
          ["Offres d'ateliers", "3"],
          ["Reservations visibles", `${dashboardBookings.length}`],
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
