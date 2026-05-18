import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ShieldCheck, Target, MapPin, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — White Glove Courier" },
      { name: "description", content: "Learn about White Glove Courier, a trusted UK logistics company offering premium courier and removal services." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About us"
        title="A premium standard in UK logistics"
        subtitle="White Glove Courier is a trusted logistics company offering premium courier and removal solutions, built on care, reliability and clear communication."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Who We Are</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We are a team of professional drivers and logistics specialists dedicated to delivering an exceptional standard of service. From single same-day parcels to full office relocations, every job is handled with the same level of attention.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              To raise the bar in courier and removal services across the UK by combining punctual delivery, transparent pricing and genuine care for every item we transport.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold">Why Choose Us</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Trusted & Insured", desc: "Fully covered, secure transport for total peace of mind." },
              { icon: Sparkles, title: "Premium Care", desc: "White-glove handling on every collection and delivery." },
              { icon: Target, title: "Punctual & Precise", desc: "Clear timing, clear communication, every step." },
              { icon: MapPin, title: "Local Knowledge", desc: "Experienced drivers who know the routes." },
            ].map((b) => (
              <div key={b.title} className="rounded-xl border border-border bg-background p-7">
                <b.icon className="h-7 w-7 text-[oklch(0.45_0.10_85)]" />
                <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold">Areas We Serve</h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          London and surrounding areas. We also offer scheduled long-distance services across the UK on request — contact us for tailored coverage.
        </p>
      </section>
    </div>
  );
}
