import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="card-surface p-6 sm:p-8">
        <p className="eyebrow">Inscription</p>
        <h1 className="mt-4 font-display text-4xl text-ink">
          Créer un compte élève ou parent
        </h1>
        <p className="mt-4 text-sm leading-8 text-ink/68">
          Créez un espace pour suivre les ateliers, retrouver les réservations
          et faciliter les échanges autour des séances.
        </p>
      </section>

      <section className="card-surface p-6 sm:p-8">
        <form className="grid gap-4 sm:grid-cols-2">
          <input
            className="rounded-2xl border border-ink/10 bg-white/70 px-4 py-3 sm:col-span-2"
            placeholder="Nom complet"
          />
          <input
            className="rounded-2xl border border-ink/10 bg-white/70 px-4 py-3"
            placeholder="Email"
          />
          <input
            className="rounded-2xl border border-ink/10 bg-white/70 px-4 py-3"
            placeholder="Téléphone"
          />
          <input
            className="rounded-2xl border border-ink/10 bg-white/70 px-4 py-3 sm:col-span-2"
            placeholder="Nom de l&apos;enfant si compte parent"
          />
          <button type="button" className="primary-link w-full sm:col-span-2 sm:w-auto">
            Créer mon espace
          </button>
        </form>
        <p className="mt-5 text-sm text-ink/62">
          Déjà inscrit ?{" "}
          <Link href="/connexion" className="font-semibold text-ink">
            Se connecter
          </Link>
        </p>
      </section>
    </div>
  );
}
