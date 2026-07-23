import { createFileRoute } from "@tanstack/react-router";
import { AboutPreview } from "@/components/AboutPreview";
import { WhyChoose } from "@/components/WhyChoose";
import { Stats } from "@/components/Stats";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SolekTech — Environmental Engineering" },
      {
        name: "description",
        content:
          "SolekTech is an engineering-led environmental firm designing biodigester wastewater systems that run quietly for decades.",
      },
      { property: "og:title", content: "About SolekTech" },
      {
        property: "og:description",
        content:
          "Engineering-led biodigester systems for homes, estates, hospitality, institutions, and industry.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Environmental engineering built to last."
        description="We design, install, and support biodigester wastewater systems for the operators who need them to just work — for years, quietly, and cleanly."
      />
      <AboutPreview />
      <WhyChoose />
      <Stats />
      <CtaBand />
    </>
  );
}
