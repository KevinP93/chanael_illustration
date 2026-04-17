import Link from "next/link";
import type { PropsWithChildren } from "react";
import { userNavigation } from "@/lib/navigation";

type DashboardShellProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

export function DashboardShell({
  title,
  description,
  children,
}: DashboardShellProps) {
  return (
    <div className="section-shell grid gap-6 py-8 sm:gap-8 sm:py-12 lg:grid-cols-[260px_1fr]">
      <aside className="card-surface h-fit p-5 lg:sticky lg:top-28">
        <p className="eyebrow">Espace utilisateur</p>
        <h1 className="mt-3 font-display text-3xl text-ink">{title}</h1>
        <p className="mt-3 text-sm leading-7 text-ink/65">{description}</p>
        <nav className="hide-scrollbar mt-6 flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-2 lg:overflow-visible">
          {userNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block shrink-0 rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-ink/72 transition hover:border-ink/10 hover:bg-white/60 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="space-y-6">{children}</div>
    </div>
  );
}
