import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SolekTech — Request a Free Site Assessment" },
      {
        name: "description",
        content:
          "Book a free site assessment with SolekTech's engineers. We design biodigester wastewater systems sized precisely for your site.",
      },
      { property: "og:title", content: "Contact SolekTech" },
      {
        property: "og:description",
        content: "Request a free site assessment for your biodigester wastewater system.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's design your system."
        description="Tell us about your site. Our engineering team will follow up within one business day to schedule a free assessment."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Reach us directly
            </h2>
            <p className="mt-3 text-muted-foreground">
              Prefer to talk first? Our team is available across email, phone, and WhatsApp.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold text-foreground">Head Office</div>
                  <div className="text-sm text-muted-foreground">
                    No 52, Community Road, Ago Palace Way, Okota, Isolo
                    <br />
                    Lagos, Nigeria
                  </div>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <a
                    href="mailto:Olaifasolomonadeleke2@gmail.com"
                    className="text-sm text-primary hover:underline break-all"
                  >
                    Olaifasolomonadeleke2@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <a href="tel:+2347066602480" className="text-sm text-primary hover:underline">
                    +234 7066602480
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-emerald text-white">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold text-foreground">WhatsApp</div>
                  <a
                    href="https://wa.me/2347066602480"
                    className="text-sm text-primary hover:underline"
                  >
                    Message our team
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant"
          >
            <h3 className="font-display text-xl font-semibold text-foreground">
              Request a free site assessment
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">We reply within one business day.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field id="contact-name" label="Full name" name="name" placeholder="Jane Doe" required />
              <Field
                id="contact-email"
                label="Email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                required
              />
              <Field id="contact-phone" label="Phone" name="phone" placeholder="+234 7066602480" />
              <Field id="contact-type" label="Property type" name="type" placeholder="Home, estate, hotel, school…" />
            </div>
            <div className="mt-4">
              <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                Tell us about your site
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Approximate users, existing drainage, timeline, location…"
                className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition"
              />
            </div>

            <button
              type="submit"
              className="mt-6 group inline-flex items-center gap-2 rounded-full gradient-emerald px-6 py-3.5 text-sm font-semibold text-white shadow-elegant hover:opacity-95 transition"
            >
              <Send className="h-4 w-4" />
              {sent ? "Thanks — we'll be in touch" : "Send request"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition"
      />
    </div>
  );
}
