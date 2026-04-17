import { AdminShell } from "@/components/admin/admin-shell";

export default function AdminUsersPage() {
  return (
    <AdminShell
      title="Utilisateurs"
      description="Vue prête pour distinguer les comptes parent, élève et administrateur."
    >
      <section className="card-surface p-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {["Parent", "Élève", "Admin"].map((role) => (
            <article
              key={role}
              className="rounded-[1.4rem] border border-ink/10 bg-white/55 px-4 py-6"
            >
              <p className="eyebrow">{role}</p>
              <p className="mt-3 text-sm leading-7 text-ink/62">
                Le filtrage et la gestion fine seront branchés après intégration Supabase.
              </p>
            </article>
          ))}
        </div>
      </section>
    </AdminShell>
  );
}
