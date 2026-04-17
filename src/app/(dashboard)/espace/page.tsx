import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { dashboardBookings } from "@/lib/site-data";

export default function UserDashboardPage() {
  return (
    <DashboardShell
      title="Bonjour, parent / eleve"
      description="Le dashboard utilisateur est structure pour afficher le profil, les reservations a venir et les liens utiles de replanification une fois la sync Calendly branchee."
    >
      <section className="grid gap-5 md:grid-cols-3">
        {[
          ["Role", "Parent"],
          ["Reservations a venir", "2"],
          ["Derniere activite", "Aujourd'hui"],
        ].map(([label, value]) => (
          <article key={label} className="card-surface p-5">
            <p className="text-sm font-medium text-ink/55">{label}</p>
            <p className="mt-4 font-display text-4xl text-ink">{value}</p>
          </article>
        ))}
      </section>

      <section className="card-surface p-6">
        <p className="eyebrow">Reservations</p>
        <div className="mt-5 space-y-4">
          {dashboardBookings.map((booking) => (
            <article
              key={booking.id}
              className="rounded-[1.4rem] border border-ink/10 bg-white/55 px-4 py-4"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-semibold text-ink">{booking.course}</h2>
                  <p className="text-sm text-ink/62">{booking.student}</p>
                </div>
                <div className="text-sm text-ink/62">{booking.dateLabel}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </DashboardShell>
  );
}
