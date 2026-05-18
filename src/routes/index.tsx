import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Truck, ShieldCheck, Clock, BadgePoundSterling, Users, Building2,
  Package, Sofa, CreditCard, ArrowRight, CheckCircle2, Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-courier.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "White Glove Courier — Premium Courier & Removal Services" },
      { name: "description", content: "Reliable, secure courier and removal services across London and the UK. Same-day delivery, removals and business logistics, delivered with care." },
    ],
  }),
  component: HomePage,
});

const benefits = [
  { icon: Clock, title: "Same-Day Delivery", desc: "Urgent items collected and delivered the same day." },
  { icon: ShieldCheck, title: "Careful Handling", desc: "Every parcel treated as if it were our own." },
  { icon: Users, title: "Professional Drivers", desc: "Uniformed, vetted and courteous at every step." },
  { icon: BadgePoundSterling, title: "Transparent Pricing", desc: "Clear quotes with no hidden fees." },
  { icon: Truck, title: "Secure Transport", desc: "Tracked, insured vehicles for total peace of mind." },
  { icon: Building2, title: "Business & Residential", desc: "Trusted by individuals and businesses alike." },
];

const services = [
  { icon: Package, title: "Courier Services", desc: "Same-day and scheduled deliveries across the city." },
  { icon: Sofa, title: "Removal Services", desc: "Home and office moves handled end-to-end." },
  { icon: CreditCard, title: "Book & Pay", desc: "Quick online bookings with example pricing." },
  { icon: Building2, title: "Business Logistics", desc: "Reliable support for your operations." },
];

const steps = [
  "Request a quote",
  "Confirm your booking",
  "We collect your items",
  "Safe delivery completed",
];

const testimonials = [
  "Excellent service from start to finish. Professional, punctual and careful with every item.",
  "White Glove Courier helped with our office move and made the process stress-free.",
  "Fast, reliable and fairly priced. I would definitely use them again.",
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[oklch(0.22_0.01_250)] text-white">
        <div className="absolute inset-0 opacity-40">
          <img src={heroImg} alt="White Glove Courier delivery" width={1600} height={1024} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.02_250)] via-[oklch(0.18_0.02_250)]/80 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-[oklch(0.85_0.06_85)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.10_85)]" />
              Premium UK Courier & Removals
            </div>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
              Reliable Courier &amp; Removal Services, Delivered with Care
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              White Glove Courier provides professional, secure and efficient courier and removal services for individuals and businesses.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/request-quote" className="inline-flex h-12 items-center justify-center rounded-md bg-[oklch(0.78_0.10_85)] px-6 text-sm font-semibold text-[oklch(0.18_0.02_250)] transition hover:bg-[oklch(0.82_0.10_85)]">
                Request a Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <Link to="/book-and-pay" className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10">
                Book &amp; Pay
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-[oklch(0.55_0.10_85)]">Why choose us</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">A standard of service you can rely on</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="group rounded-xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-[oklch(0.78_0.10_85)]/60 hover:shadow-lg">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[oklch(0.97_0.02_85)] text-[oklch(0.45_0.10_85)]">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[oklch(0.55_0.10_85)]">Our services</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">Complete logistics, end to end</h2>
            </div>
            <Link to="/removal-service" className="inline-flex items-center text-sm font-semibold text-foreground hover:text-[oklch(0.45_0.10_85)]">
              Explore all services <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-background p-7 transition hover:shadow-xl">
                <s.icon className="h-7 w-7 text-[oklch(0.45_0.10_85)]" />
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-[oklch(0.55_0.10_85)]">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">Simple, transparent, dependable</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step} className="relative rounded-xl border border-border bg-card p-7">
              <div className="font-display text-4xl text-[oklch(0.78_0.10_85)]">0{i + 1}</div>
              <div className="mt-4 flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-[oklch(0.45_0.10_85)]" />
                <p className="text-sm font-medium text-foreground">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[oklch(0.22_0.01_250)] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-[oklch(0.85_0.06_85)]">Testimonials</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Trusted by clients across the UK</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-7">
                <Quote className="h-6 w-6 text-[oklch(0.78_0.10_85)]" />
                <p className="mt-4 leading-relaxed text-white/85">"{t}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary to-background p-10 md:p-16 text-center">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Ready to ship with confidence?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Get a tailored quote in minutes, or book your collection today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/request-quote" className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-6 text-sm font-semibold text-background hover:bg-foreground/90">
              Request a Quote
            </Link>
            <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background px-6 text-sm font-semibold hover:bg-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
