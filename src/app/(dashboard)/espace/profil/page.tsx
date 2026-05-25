import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default function UserProfilePage() {
  return (
    <DashboardShell
      title="Profil"
      description="Gardez à jour les informations utiles pour les réservations et le suivi des ateliers."
    >
      <section className="card-surface p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {["Nom complet", "Email", "Téléphone", "Profil parent / élève"].map(
            (field) => (
              <div
                key={field}
                className="rounded-[1.4rem] border border-ink/10 bg-white/55 px-4 py-4"
              >
                <p className="text-sm font-medium text-ink/55">{field}</p>
                <p className="mt-2 text-sm text-ink/68">Non renseigné</p>
              </div>
            ),
          )}
        </div>
      </section>
    </DashboardShell>
  );
}
