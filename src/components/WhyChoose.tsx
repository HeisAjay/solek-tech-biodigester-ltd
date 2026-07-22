import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import { ShieldCheck, Leaf, Cpu, Award, Clock, Users } from "lucide-react";

const points = [
  {
    icon: Award,
    title: "12+ years of field-proven engineering",
    desc: "Installations across residential, hospitality, and industrial sites — running quietly for over a decade.",
  },
  {
    icon: Leaf,
    title: "Genuinely sustainable design",
    desc: "Anaerobic digestion converts waste into clean effluent and biogas — with no chemicals and no smell.",
  },
  {
    icon: Cpu,
    title: "Modern monitoring & control",
    desc: "Optional sensors and remote diagnostics keep your system optimized without site visits.",
  },
  {
    icon: ShieldCheck,
    title: "Regulator-ready compliance",
    desc: "Systems designed and documented to meet local environmental and public-health standards.",
  },
  {
    icon: Clock,
    title: "Fast, disciplined installation",
    desc: "Structured project delivery — from survey to commissioning — with defined milestones and hand-off.",
  },
  {
    icon: Users,
    title: "Dedicated maintenance partnership",
    desc: "Ongoing service contracts, priority response, and a technical team that knows your site.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Why SolekTech"
          title="Engineering discipline meets environmental purpose."
          description="Every SolekTech system is designed, installed, and supported by engineers — not resellers. That shows up in how the systems perform for years."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-6 md:auto-rows-[minmax(0,1fr)]">
          {points.map((p, i) => (
            <Card
              key={p.title}
              {...p}
              span={
                i === 0
                  ? "md:col-span-3"
                  : i === 1
                    ? "md:col-span-3"
                    : i === 4
                      ? "md:col-span-3"
                      : i === 5
                        ? "md:col-span-3"
                        : "md:col-span-2"
              }
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  icon: Icon,
  title,
  desc,
  span,
  index,
}: {
  icon: typeof Leaf;
  title: string;
  desc: string;
  span: string;
  index: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`reveal ${span} group rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition`}
    >
      <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 font-display text-lg md:text-xl font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
