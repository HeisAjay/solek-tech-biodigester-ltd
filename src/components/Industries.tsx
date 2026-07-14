import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import {
  Home,
  Building2,
  Hotel,
  School,
  Stethoscope,
  Store,
  Factory,
  Landmark,
} from "lucide-react";

const items = [
  { icon: Home, label: "Homes" },
  { icon: Building2, label: "Estates" },
  { icon: Hotel, label: "Hotels & Resorts" },
  { icon: School, label: "Schools" },
  { icon: Stethoscope, label: "Hospitals" },
  { icon: Store, label: "Commercial" },
  { icon: Factory, label: "Industries" },
  { icon: Landmark, label: "Government" },
];

export function Industries() {
  return (
    <section className="relative bg-muted/40 py-24 md:py-32 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Industries Served"
          title="Trusted across sectors that can't afford downtime."
          description="Our engineers deploy systems calibrated to the load, footprint, and regulatory context of each environment."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <Tile key={it.label} {...it} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tile({ icon: Icon, label, index }: { icon: typeof Home; label: string; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 40}ms` }}
      className="reveal group rounded-2xl bg-white border border-border p-6 text-center shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition"
    >
      <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary group-hover:gradient-emerald group-hover:text-white transition">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-4 text-sm font-semibold text-foreground">{label}</p>
    </div>
  );
}
