import { SectionHeader } from "./SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly is a biodigester system?",
    a: "A biodigester uses natural anaerobic bacteria to break down organic waste in a sealed underground chamber. The output is clean effluent and small amounts of biogas — with no odor, no chemicals, and no active mechanical parts inside the tank.",
  },
  {
    q: "How long does installation take?",
    a: "For a single home, installation typically takes 3–5 working days after site assessment. Estate and institutional systems run 2–6 weeks depending on excavation, plumbing complexity, and commissioning tests.",
  },
  {
    q: "Do the systems require ongoing maintenance?",
    a: "Very little. A typical service visit is once every 12–18 months for inspection and desludging. We offer maintenance contracts with priority response for institutional and industrial clients.",
  },
  {
    q: "Are they compliant with environmental regulations?",
    a: "Yes. Every SolekTech installation is engineered and documented to meet local environmental and public-health standards. We handle permitting and effluent-quality reporting as part of the delivery.",
  },
  {
    q: "How much space does a system need?",
    a: "Because our systems are underground and modular, footprint above ground is essentially zero — just an access hatch. The buried footprint is sized to your daily load; we confirm this during site assessment.",
  },
  {
    q: "Can you retrofit an existing property?",
    a: "In most cases, yes. We survey your existing drainage and layout, and design a solution that ties into it with minimal disruption. Retrofit projects usually run 5–10 days on-site.",
  },
];

export function FaqSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions clients ask us most."
          description="If you don't see your question here, our engineering team is one message away."
          align="center"
        />
        <div className="mt-14">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-6 shadow-soft data-[state=open]:shadow-elegant transition"
              >
                <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
