"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Camera, Menu, X } from "lucide-react";
import { mainNavigation } from "@/lib/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur-xl">
      <div className="section-shell py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center"
            onClick={closeMenu}
          >
            <Image
              src="/branding/logo-chanael-header-v2.png"
              alt="Chanael Illustration"
              width={948}
              height={1202}
              priority
              unoptimized
              className="h-12 w-auto object-contain sm:h-14"
            />
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-ink/70 lg:flex">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-ink ${
                  pathname === item.href ? "text-ink" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              href="https://www.instagram.com/chanael_illustration"
              target="_blank"
              rel="noreferrer"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink transition hover:border-ink/30 hover:bg-ink hover:text-white lg:inline-flex lg:h-11 lg:w-11"
              aria-label="Instagram de Chanael Illustration"
            >
              <Camera size={18} />
            </Link>
            <div className="hidden lg:flex">
              <Link href="/reservation" className="primary-link whitespace-nowrap">
                Reserver un atelier
              </Link>
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink transition hover:border-ink/30 hover:bg-white/80 lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-navigation"
            className="mt-4 rounded-[1.4rem] border border-ink/10 bg-white/92 p-3 shadow-[0_24px_70px_rgba(26,24,20,0.12)] lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {mainNavigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    style={isActive ? { color: "var(--paper)" } : undefined}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-ink text-paper hover:text-paper"
                        : "text-ink/80 hover:bg-paper-strong hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-3 space-y-3 border-t border-ink/10 pt-3">
              <Link
                href="/reservation"
                onClick={closeMenu}
                className="primary-link flex w-full"
              >
                Reserver un atelier
              </Link>
              <Link
                href="https://www.instagram.com/chanael_illustration"
                target="_blank"
                rel="noreferrer"
                className="pill-link flex w-full"
              >
                Instagram
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
