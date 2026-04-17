import { AdminShell } from "@/components/admin/admin-shell";

export default function AdminMessagesPage() {
  return (
    <AdminShell
      title="Messages"
      description="Table prévue pour lire les demandes envoyées depuis le formulaire de contact."
    >
      <section className="card-surface p-6">
        <article className="rounded-[1.4rem] border border-dashed border-ink/15 bg-white/45 px-4 py-8 text-center text-sm leading-7 text-ink/58">
          Aucun message enregistré pour le moment. La route API de base est créée,
          mais la persistance côté Supabase ou email reste à brancher.
        </article>
      </section>
    </AdminShell>
  );
}
