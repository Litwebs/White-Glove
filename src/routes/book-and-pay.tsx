import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
const WHATSAPP_URL = "https://wa.me/447547720911";

export const Route = createFileRoute("/book-and-pay")({
  head: () => ({
    meta: [
      { title: "Book & Pay — White Glove Courier" },
      {
        name: "description",
        content:
          "Book a courier or removal job online. Example pricing for parcels, same-day couriers, furniture and small removals.",
      },
    ],
  }),
  component: BookPage,
});

const steps = [
  { n: "01", t: "Collection details" },
  { n: "02", t: "Delivery details" },
  { n: "03", t: "Item details" },
  { n: "04", t: "Example quote" },
];

const quotes = [
  {
    title: "Small Parcel Delivery",
    price: "From £25",
    desc: "Documents and small parcels across the city.",
  },
  {
    title: "Same-Day Courier",
    price: "From £45",
    desc: "Urgent same-day collection and delivery.",
  },
  {
    title: "Furniture Delivery",
    price: "From £65",
    desc: "Single-item furniture pickup and drop-off.",
  },
  { title: "Small Removal Job", price: "From £120", desc: "Studios, flats and small home moves." },
  {
    title: "Office Move",
    price: "Custom pricing",
    desc: "Tailored quote based on size and access.",
  },
];

function Section({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-7 md:p-9">
      <div className="mb-6 flex items-center gap-4">
        <span className="font-display text-3xl text-[oklch(0.78_0.10_85)]">{step}</span>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">{children}</div>
    </div>
  );
}

function Field({
  id,
  label,
  ...rest
}: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label htmlFor={id} className="mb-2 block text-sm">
        {label}
      </Label>
      <Input id={id} {...rest} />
    </div>
  );
}

function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await fetch("https://formsubmit.co/ajax/Collinsstacy3131@gmail.com", {
      method: "POST",
      body: new FormData(e.currentTarget),
    });
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        <PageHero
          eyebrow="Booking received"
          title="Thank you for your booking request"
          subtitle="We'll review your details and be in touch to confirm via WhatsApp or email as soon as possible."
        />
        <section className="mx-auto max-w-5xl px-6 py-16 text-center">
          <p className="text-muted-foreground">
            Need us now?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline"
            >
              Message us on WhatsApp
            </a>
            .
          </p>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        eyebrow="Book & pay"
        title="Book your collection in minutes"
        subtitle="A simple four-step booking flow. Confirm via WhatsApp or invoice while online payment integration is finalised."
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-lg border border-border bg-card px-4 py-3">
              <div className="font-display text-xl text-[oklch(0.78_0.10_85)]">{s.n}</div>
              <div className="mt-1 text-sm font-medium">{s.t}</div>
            </div>
          ))}
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New Booking Request — White Glove Courier" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <Section step="01" title="Collection details">
            <div className="md:col-span-2">
              <Field
                id="caddr"
                name="collection_address"
                label="Collection address"
                placeholder="Street, city, postcode"
              />
            </div>
            <Field id="cdate" name="collection_date" label="Collection date" type="date" />
            <Field id="ctime" name="collection_time" label="Collection time" type="time" />
            <Field id="cname" name="contact_name" label="Contact name" placeholder="Full name" />
            <Field
              id="cphone"
              name="contact_phone"
              label="Contact phone number"
              placeholder="+44…"
            />
          </Section>

          <Section step="02" title="Delivery details">
            <div className="md:col-span-2">
              <Field
                id="daddr"
                name="delivery_address"
                label="Delivery address"
                placeholder="Street, city, postcode"
              />
            </div>
            <Field id="rname" name="recipient_name" label="Recipient name" />
            <Field
              id="rphone"
              name="recipient_phone"
              label="Recipient phone number"
              placeholder="+44…"
            />
          </Section>

          <Section step="03" title="Item details">
            <div className="md:col-span-2">
              <Label htmlFor="idesc" className="mb-2 block text-sm">
                Item description
              </Label>
              <Textarea
                id="idesc"
                name="item_description"
                rows={3}
                placeholder="What are we collecting?"
              />
            </div>
            <Field
              id="icount"
              name="number_of_items"
              label="Number of items"
              type="number"
              min={1}
              defaultValue={1}
            />
            <Field
              id="iweight"
              name="weight_kg"
              label="Approximate weight (kg)"
              type="number"
              min={0}
            />
            <div className="flex items-center gap-3 pt-2">
              <Checkbox id="fragile" name="fragile" />
              <Label htmlFor="fragile" className="text-sm font-normal">
                Fragile item
              </Label>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <Checkbox id="removal" name="removal_service" />
              <Label htmlFor="removal" className="text-sm font-normal">
                Removal service required
              </Label>
            </div>
          </Section>

          <div className="rounded-xl border border-border bg-card p-7 md:p-9">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-display text-3xl text-[oklch(0.78_0.10_85)]">04</span>
              <h2 className="text-xl font-semibold">Example quote options</h2>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              These are example prices only — final pricing is confirmed after we review your
              details.
            </p>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {quotes.map((q) => (
                <div
                  key={q.title}
                  className="rounded-xl border border-border bg-background p-6 transition hover:border-[oklch(0.78_0.10_85)]/60 hover:shadow-md"
                >
                  <div className="text-sm font-medium text-muted-foreground">{q.title}</div>
                  <div className="mt-2 font-display text-2xl font-semibold">{q.price}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{q.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-dashed border-border bg-secondary/40 p-7 text-center">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-8 text-sm font-semibold text-background transition hover:bg-foreground/90 disabled:opacity-60"
            >
              {loading ? "Sending…" : "Submit Booking Request"}
            </button>
            <p className="mt-4 text-sm text-muted-foreground">
              Or{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="font-medium underline"
              >
                message us on WhatsApp
              </a>{" "}
              to book directly.
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
