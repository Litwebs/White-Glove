import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Home, Building2, GraduationCap, Sofa, Package, ShieldCheck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/removal-service")({
  head: () => ({
    meta: [
      { title: "Removal Service — White Glove Courier" },
      { name: "description", content: "Premium home, flat, student and office removals across the UK. Furniture collection, single-item transport and fragile item handling." },
    ],
  }),
  component: RemovalPage,
});

const services = [
  { icon: Home, title: "Home Removals", desc: "Full-service house moves, packed and handled with care." },
  { icon: Building2, title: "Flat Moves", desc: "Efficient relocations, including walk-ups and tight access." },
  { icon: GraduationCap, title: "Student Moves", desc: "Affordable, flexible moves between terms or houses." },
  { icon: Building2, title: "Office Removals", desc: "Minimal-downtime office relocations and reconfigurations." },
  { icon: Sofa, title: "Furniture Collection & Delivery", desc: "Single items or full rooms, collected and delivered safely." },
  { icon: Package, title: "Single-Item Transport", desc: "From sofas to artwork, transported with attention to detail." },
  { icon: ShieldCheck, title: "Fragile & High-Value", desc: "Specialist handling for delicate and valuable items." },
];

function RemovalPage() {
  return (
    <div>
      <PageHero
        eyebrow="Removal service"
        title="Moves made simple, handled with care"
        subtitle="From a single sofa to a complete office relocation, we manage every detail so you can focus on what matters."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <s.icon className="h-7 w-7 text-[oklch(0.45_0.10_85)]" />
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Need help moving?</h2>
          <p className="mt-5 text-muted-foreground">
            Tell us what you need moved, where from, where to, and when you need it done. We'll respond with a tailored, transparent quote.
          </p>
          <Link to="/request-quote" className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-foreground px-6 text-sm font-semibold text-background hover:bg-foreground/90">
            Request a Removal Quote <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
