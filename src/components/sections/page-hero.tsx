type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="section-shell pt-12 sm:pt-20">
      <div className="card-surface noise-overlay overflow-hidden px-5 py-8 sm:px-10 sm:py-14">
        <div className="relative z-10 max-w-3xl space-y-5">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-display text-[clamp(2.25rem,8vw,4.5rem)] leading-[0.98] tracking-tight text-ink">
            {title}
          </h1>
          <p className="section-copy">{description}</p>
        </div>
      </div>
    </section>
  );
}
