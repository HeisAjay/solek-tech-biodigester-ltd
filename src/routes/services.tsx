import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Biodigester Systems for Every Scale | SolekTech" },
      {
        name: "description",
        content:
          "Residential, estate, hospitality, institutional, healthcare, and industrial biodigester wastewater systems designed and built by SolekTech.",
      },
      { property: "og:title", content: "SolekTech Services" },
      {
        property: "og:description",
        content:
          "Purpose-built wastewater treatment for homes, estates, hotels, schools, hospitals, commercial, and industry.",
      },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Systems engineered for your site."
        description="Every SolekTech installation is sized, designed, and delivered around your specific load, layout, and long-term operating goals."
      />
      <Services />
      <Industries />
      <CtaBand />
    </>
  );
}
