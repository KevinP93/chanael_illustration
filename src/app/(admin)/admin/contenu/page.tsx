import { AdminShell } from "@/components/admin/admin-shell";

export default function AdminContentPage() {
  return (
    <AdminShell
      title="Contenu du site"
      description="Préparez les textes principaux, les accroches pédagogiques et les liens importants."
    >
      <section className="card-surface p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {["Accueil", "À propos", "Réservation", "Instagram"].map((block) => (
            <article
              key={block}
              className="rounded-[1.4rem] border border-ink/10 bg-white/55 px-4 py-4"
            >
              <h2 className="font-semibold text-ink">{block}</h2>
              <p className="mt-2 text-sm leading-7 text-ink/62">
                Contenu à vérifier avant publication.
              </p>
            </article>
          ))}
        </div>
      </section>
    </AdminShell>
  );
}
