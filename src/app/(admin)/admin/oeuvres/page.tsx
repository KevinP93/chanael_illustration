import { AdminShell } from "@/components/admin/admin-shell";
import { artworks } from "@/lib/site-data";

export default function AdminArtworksPage() {
  return (
    <AdminShell
      title="Gestion des œuvres"
      description="Cette page est prête à devenir le CRUD principal des illustrations via Supabase."
    >
      <section className="card-surface p-6">
        <div className="space-y-4">
          {artworks.map((artwork) => (
            <article
              key={artwork.id}
              className="flex flex-col gap-2 rounded-[1.4rem] border border-ink/10 bg-white/55 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="font-semibold text-ink">{artwork.title}</h2>
                <p className="text-sm text-ink/62">
                  {artwork.category} · {artwork.medium}
                </p>
              </div>
              <p className="text-sm text-ink/55">Slug: {artwork.slug}</p>
            </article>
          ))}
        </div>
      </section>
    </AdminShell>
  );
}
