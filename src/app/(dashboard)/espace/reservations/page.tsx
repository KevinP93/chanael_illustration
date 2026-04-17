import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { dashboardBookings } from "@/lib/site-data";

export default function UserReservationsPage() {
  return (
    <DashboardShell
      title="Mes reservations"
      description="La liste est prete pour accueillir les reservations synchronisees depuis Calendly Standard via webhook."
    >
      <section className="card-surface p-6">
        <div className="space-y-4">
          {dashboardBookings.map((booking) => (
            <article
              key={booking.id}
              className="rounded-[1.4rem] border border-ink/10 bg-white/55 px-4 py-4"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-semibold text-ink">{booking.course}</h2>
                  <p className="text-sm text-ink/62">{booking.dateLabel}</p>
                </div>
                <span className="rounded-full border border-ink/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                  {booking.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </DashboardShell>
  );
}
