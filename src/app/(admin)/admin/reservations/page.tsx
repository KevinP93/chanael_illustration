import { AdminShell } from "@/components/admin/admin-shell";
import { dashboardBookings } from "@/lib/site-data";

export default function AdminReservationsPage() {
  return (
    <AdminShell
      title="Reservations"
      description="Le tableau est pret pour refleter les bookings synchronises depuis Calendly, sans faire du site la source de verite du planning."
    >
      <section className="card-surface p-6">
        <div className="space-y-4">
          {dashboardBookings.map((booking) => (
            <article
              key={booking.id}
              className="rounded-[1.4rem] border border-ink/10 bg-white/55 px-4 py-4"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-semibold text-ink">{booking.student}</h2>
                  <p className="text-sm text-ink/62">{booking.course}</p>
                </div>
                <div className="text-sm text-ink/62">{booking.dateLabel}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AdminShell>
  );
}
