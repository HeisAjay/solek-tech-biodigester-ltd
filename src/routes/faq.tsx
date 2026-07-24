import { createFileRoute } from "@tanstack/react-router";
import { FaqSection, faqs } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — SolekTech Biodigester Systems" },
      {
        name: "description",
        content:
          "Answers to the questions clients ask most about biodigester installation, maintenance, compliance, and retrofits.",
      },
      { property: "og:title", content: "SolekTech FAQ" },
      {
        property: "og:description",
        content: "Everything you need to know about biodigester systems, service, and compliance.",
      },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Answers, from our engineers."
        description="If you don't see your question here, our team is one message away."
      />
      <FaqSection />
      <CtaBand />
    </>
  );
}
