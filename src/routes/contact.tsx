import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/447547720911";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — White Glove Courier" },
      {
        name: "description",
        content:
          "Contact White Glove Courier on WhatsApp for bookings, quotes and general enquiries.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Get in touch"
        title="Contact White Glove Courier"
        subtitle="For bookings, quotes and general enquiries, contact us directly on WhatsApp."
      />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-2xl border border-border bg-card p-10 text-center md:p-14">
          <MessageCircle className="mx-auto h-12 w-12 text-[#25D366]" />
          <h2 className="mt-5 font-display text-3xl font-semibold">Message Us on WhatsApp</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            The fastest way to reach our team. We'll respond promptly with a tailored quote or
            confirm your booking.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-14 items-center justify-center rounded-md bg-[#25D366] px-8 text-base font-semibold text-white transition hover:bg-[#1ebe5d]"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Message Us on WhatsApp
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <Mail className="h-6 w-6 text-[oklch(0.45_0.10_85)]" />
            <div className="mt-4 text-sm font-medium text-muted-foreground">Email</div>
            <div className="mt-1 font-medium">
              <a href="mailto:Collinsstacy3131@gmail.com" className="hover:underline">
                Collinsstacy3131@gmail.com
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <Phone className="h-6 w-6 text-[oklch(0.45_0.10_85)]" />
            <div className="mt-4 text-sm font-medium text-muted-foreground">Phone</div>
            <div className="mt-1 font-medium">
              <a
                href="https://wa.me/447547720911"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                07547 720911
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <MapPin className="h-6 w-6 text-[oklch(0.45_0.10_85)]" />
            <div className="mt-4 text-sm font-medium text-muted-foreground">Location</div>
            <div className="mt-1 font-medium">London, United Kingdom</div>
          </div>
        </div>
      </section>
    </div>
  );
}
