import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — White Glove Courier" },
      { name: "description", content: "Request a tailored quote for courier, removal, furniture delivery or office moves across the UK." },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div>
      <PageHero
        eyebrow="Request a quote"
        title="Tell us about your job"
        subtitle="Share a few details and we'll respond as soon as possible with a tailored quote."
      />
      <section className="mx-auto max-w-3xl px-6 py-16">
        {submitted ? (
          <div className="rounded-xl border border-border bg-card p-10 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-[oklch(0.55_0.15_150)]" />
            <h2 className="mt-4 text-2xl font-semibold">Thank you</h2>
            <p className="mt-3 text-muted-foreground">We've received your request and will respond as soon as possible with a tailored quote.</p>
          </div>
        ) : (
          <form
            className="space-y-6 rounded-xl border border-border bg-card p-7 md:p-10"
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <Label htmlFor="fname" className="mb-2 block text-sm">Full name</Label>
                <Input id="fname" required />
              </div>
              <div>
                <Label htmlFor="email" className="mb-2 block text-sm">Email address</Label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="phone" className="mb-2 block text-sm">Phone number</Label>
                <Input id="phone" type="tel" required />
              </div>
              <div>
                <Label htmlFor="service" className="mb-2 block text-sm">Service required</Label>
                <Select>
                  <SelectTrigger id="service"><SelectValue placeholder="Select a service" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="courier">Courier service</SelectItem>
                    <SelectItem value="removal">Removal service</SelectItem>
                    <SelectItem value="furniture">Furniture delivery</SelectItem>
                    <SelectItem value="office">Office move</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="cpost" className="mb-2 block text-sm">Collection postcode</Label>
                <Input id="cpost" required />
              </div>
              <div>
                <Label htmlFor="dpost" className="mb-2 block text-sm">Delivery postcode</Label>
                <Input id="dpost" required />
              </div>
              <div>
                <Label htmlFor="date" className="mb-2 block text-sm">Preferred date</Label>
                <Input id="date" type="date" />
              </div>
            </div>
            <div>
              <Label htmlFor="items" className="mb-2 block text-sm">Item details</Label>
              <Textarea id="items" rows={3} placeholder="What needs collecting and delivering?" />
            </div>
            <div>
              <Label htmlFor="notes" className="mb-2 block text-sm">Additional notes</Label>
              <Textarea id="notes" rows={3} placeholder="Access details, timing, anything else we should know" />
            </div>
            <p className="text-sm text-muted-foreground">We will respond as soon as possible with a tailored quote.</p>
            <button type="submit" className="inline-flex h-12 w-full items-center justify-center rounded-md bg-foreground px-6 text-sm font-semibold text-background hover:bg-foreground/90 md:w-auto">
              Submit Quote Request
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
