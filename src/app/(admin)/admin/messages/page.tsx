import { AdminShell } from "@/components/admin/admin-shell";

export default function AdminMessagesPage() {
  return (
    <AdminShell
      title="Messages"
      description="Retrouvez ici les demandes envoyées depuis le formulaire de contact."
    >
      <section className="card-surface p-6">
        <article className="rounded-[1.4rem] border border-dashed border-ink/15 bg-white/45 px-4 py-8 text-center text-sm leading-7 text-ink/58">
          Aucun message enregistré pour le moment.
        </article>
      </section>
    </AdminShell>
  );
}
