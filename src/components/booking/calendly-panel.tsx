import Link from "next/link";
import { CalendarClock, CircleAlert } from "lucide-react";
import { buildCalendlyEmbedUrl } from "@/lib/calendly";
import { hasCalendlyEnv, siteEnv } from "@/lib/env";
import { siteContent } from "@/lib/site-data";

type CalendlyPanelProps = {
  title: string;
  name?: string;
  email?: string;
};

export function CalendlyPanel({ title, name, email }: CalendlyPanelProps) {
  if (!hasCalendlyEnv()) {
    return (
      <div className="card-surface p-5 sm:p-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <div className="rounded-full bg-terracotta/12 p-3 text-terracotta">
            <CircleAlert size={18} />
          </div>
          <div className="min-w-0 space-y-3">
            <h3 className="font-display text-2xl text-ink sm:text-3xl">{title}</h3>
            <p className="max-w-2xl text-sm leading-7 text-ink/68">
              La réservation en ligne sera disponible prochainement. Pour
              organiser un atelier, vous pouvez contacter Chanael directement.
            </p>
            <p className="text-sm leading-7 text-ink/55">
              Email: {siteContent.contactEmail}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const embedUrl = buildCalendlyEmbedUrl(siteEnv.calendlyUrl!, { name, email });

  return (
    <div className="card-surface overflow-hidden p-2 sm:p-3">
      <div className="flex flex-col gap-4 border-b border-ink/10 px-3 pb-4 pt-2 sm:flex-row sm:items-center sm:justify-between sm:px-4">
        <div className="min-w-0">
          <p className="eyebrow">Réservation</p>
          <h3 className="font-display text-2xl text-ink sm:text-3xl">{title}</h3>
        </div>
        <Link
          href={siteEnv.calendlyUrl!}
          className="pill-link w-full sm:w-auto"
          target="_blank"
        >
          Ouvrir Calendly <CalendarClock className="ml-2" size={16} />
        </Link>
      </div>
      <iframe
        src={embedUrl}
        title="Réservation d'atelier"
        loading="lazy"
        className="mt-2 min-h-[680px] w-full rounded-[1.15rem] bg-paper sm:min-h-[760px] sm:rounded-[1.5rem]"
      />
    </div>
  );
}
