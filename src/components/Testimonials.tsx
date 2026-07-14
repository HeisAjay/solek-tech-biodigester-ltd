import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import { Quote } from "lucide-react";

const items = [
  {
    quote: "Ten years in and the system still runs like day one. Zero odor, minimal service, and the SolekTech team is a phone call away.",
    name: "Ade Okonkwo",
    role: "Facilities Director, Palmview Estate",
  },
  {
    quote: "Their engineers actually listened. The system sits under our garden — guests never notice, and we've cut water discharge costs sharply.",
    name: "Marta Silva",
    role: "GM, Bayline Resort & Spa",
  },
  {
    quote: "Compliance paperwork, commissioning, staff training — SolekTech handled everything. Our operations team just runs the plant now.",
    name: "Dr. Ibrahim Yusuf",
    role: "Head of Estates, Greenfield Academy",
  },
];

export function Testimonials() {
  return (
    <section className="bg-muted/40 py-24 md:py-32 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Clients"
          title="What our clients say."
          description="Long-standing partnerships with the operators who rely on our systems every day."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Card key={t.name} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ quote, name, role, index }: { quote: string; name: string; role: string; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <figure
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className="reveal relative rounded-3xl bg-white border border-border p-8 shadow-soft hover:shadow-elegant transition"
    >
      <Quote className="h-8 w-8 text-primary/30" />
      <blockquote className="mt-4 text-foreground text-base leading-relaxed">
        "{quote}"
      </blockquote>
      <figcaption className="mt-6 pt-6 border-t border-border">
        <div className="font-semibold text-foreground text-sm">{name}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{role}</div>
      </figcaption>
    </figure>
  );
}
