import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="card-surface p-6 sm:p-8">
        <p className="eyebrow">Connexion</p>
        <h1 className="mt-4 font-display text-4xl text-ink">
          Espace eleve / parent
        </h1>
        <p className="mt-4 text-sm leading-8 text-ink/68">
          Le shell de connexion est en place. Il sera relie a Supabase Auth des
          que les variables d&apos;environnement du projet seront renseignees.
        </p>
      </section>

      <section className="card-surface p-6 sm:p-8">
        <form className="grid gap-4">
          <input
            className="rounded-2xl border border-ink/10 bg-white/70 px-4 py-3"
            placeholder="Email"
          />
          <input
            className="rounded-2xl border border-ink/10 bg-white/70 px-4 py-3"
            placeholder="Mot de passe"
            type="password"
          />
          <button type="button" className="primary-link w-full sm:w-auto">
            Connexion a brancher
          </button>
        </form>
        <p className="mt-5 text-sm text-ink/62">
          Pas encore de compte ?{" "}
          <Link href="/inscription" className="font-semibold text-ink">
            Creer un espace
          </Link>
        </p>
      </section>
    </div>
  );
}
