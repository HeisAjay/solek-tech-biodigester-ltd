import { createFileRoute } from "@tanstack/react-router";
import { Timeline } from "@/components/Timeline";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "How It Works — SolekTech Customer Journey" },
      {
        name: "description",
        content:
          "From first consultation to long-term maintenance, every SolekTech project follows the same structured, engineering-led journey.",
      },
      { property: "og:title", content: "How SolekTech Delivers Projects" },
      {
        property: "og:description",
        content:
          "Consultation, site assessment, system design, installation, and maintenance support.",
      },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="A clear path from first call to long-term care."
        description="Every project follows the same structured journey — so you always know what happens next."
      />
      <Timeline />
      <CtaBand />
    </>
  );
}
