export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="border-b border-border bg-[oklch(0.22_0.01_250)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-widest text-[oklch(0.85_0.06_85)]">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/75">{subtitle}</p>}
      </div>
    </section>
  );
}
