import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import { PhoneCall, Search, PencilRuler, HardHat, LifeBuoy } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Consultation", desc: "We understand your site, users, and goals." },
  { icon: Search, title: "Site Assessment", desc: "Soil, load, layout and utility survey." },
  { icon: PencilRuler, title: "System Design", desc: "Sized, permitted engineering package." },
  { icon: HardHat, title: "Installation", desc: "Disciplined build, tested and commissioned." },
  { icon: LifeBuoy, title: "Maintenance Support", desc: "Ongoing service and priority response." },
];

export function Timeline() {
  return (
    <section className="relative bg-muted/40 py-24 md:py-32 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="How It Works"
          title="A clear path from first call to long-term care."
          description="Every project follows the same structured journey — so you always know what happens next."
        />

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <ol className="grid gap-8 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Step key={s.title} step={i + 1} {...s} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Step({
  icon: Icon,
  title,
  desc,
  step,
}: {
  icon: typeof Search;
  title: string;
  desc: string;
  step: number;
}) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li ref={ref} style={{ transitionDelay: `${step * 80}ms` }} className="reveal relative">
      <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white shadow-elegant border border-border">
        <Icon className="h-6 w-6 text-primary" />
        <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full gradient-emerald text-[11px] font-bold text-white shadow-soft">
          {step}
        </span>
      </div>
      <div className="mt-5 text-center lg:text-left">
        <h4 className="font-display text-base font-semibold text-foreground">{title}</h4>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </li>
  );
}
