import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import { useReveal } from "@/hooks/use-reveal";

const points = [
  "Over a decade of engineering-led installations",
  "In-house design, project management, and service teams",
  "Systems built to run quietly for 15+ years",
];

export function AboutPreview() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div ref={ref} className="reveal relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <img src={aboutImg} alt="SolekTech engineers reviewing wastewater plans on site" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="hidden md:block absolute -bottom-6 -right-6 rounded-2xl glass px-6 py-5 shadow-elegant">
            <div className="font-display text-3xl font-semibold text-foreground">12+ yrs</div>
            <div className="text-xs text-muted-foreground mt-1">Engineering biodigester systems</div>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            About SolekTech
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            An environmental engineering firm — not a supplier.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            SolekTech was founded to solve one problem well: wastewater that is safe, sustainable,
            and doesn't demand attention. We design, build, and maintain biodigester systems used
            by families, estates, hospitality operators, schools, hospitals, and industry.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full gradient-emerald text-white">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="mt-10 group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold hover:opacity-95 transition"
          >
            More about our approach
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
