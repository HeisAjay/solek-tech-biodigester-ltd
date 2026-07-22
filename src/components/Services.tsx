import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import { Home, Building2, Factory, Hotel, School, Stethoscope, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Biodigesters",
    desc: "Compact, odor-free biodigester systems for single homes, villas, and family estates.",
  },
  {
    icon: Building2,
    title: "Estate & Community Systems",
    desc: "Scalable treatment plants for gated estates, apartment complexes and mixed-use developments.",
  },
  {
    icon: Hotel,
    title: "Hospitality Solutions",
    desc: "Discreet, high-capacity systems engineered for hotels, resorts, and short-let properties.",
  },
  {
    icon: School,
    title: "Institutional Systems",
    desc: "Reliable wastewater treatment for schools, universities, and campus environments.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Facilities",
    desc: "Compliant, low-maintenance treatment for hospitals, clinics, and diagnostic centers.",
  },
  {
    icon: Factory,
    title: "Industrial & Government",
    desc: "Heavy-duty engineered systems for factories, agro-processors, and public infrastructure.",
  },
];

export function Services() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Services"
          title="Purpose-built systems for every scale."
          description="From a single home to a hospital campus, our biodigester technology is engineered around your site, load profile, and operational goals."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: typeof Home;
  title: string;
  desc: string;
  index: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className="reveal group relative rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
    >
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/[0.03] to-ocean/[0.05]" />
      <div className="relative">
        <span className="inline-grid h-12 w-12 place-items-center rounded-2xl gradient-emerald text-white shadow-elegant">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
}
