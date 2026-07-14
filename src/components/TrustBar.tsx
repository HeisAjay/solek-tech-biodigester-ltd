import { Leaf, Wind, Wrench, Timer, HardHat } from "lucide-react";

const items = [
  { icon: Leaf, label: "Eco-Friendly" },
  { icon: Wind, label: "Odor-Free" },
  { icon: Wrench, label: "Low Maintenance" },
  { icon: Timer, label: "Long Service Life" },
  { icon: HardHat, label: "Expert Installation" },
];

export function TrustBar() {
  const doubled = [...items, ...items, ...items];
  return (
    <section className="relative border-y border-border bg-muted/40 py-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex w-max animate-marquee gap-14 whitespace-nowrap pl-8">
        {doubled.map((it, i) => (
          <div key={i} className="flex items-center gap-3 text-foreground/75">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-soft text-primary">
              <it.icon className="h-4 w-4" />
            </span>
            <span className="font-medium tracking-wide text-sm md:text-base">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
