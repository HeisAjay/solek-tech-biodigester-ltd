import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — SolekTech Biodigester Installations" },
      {
        name: "description",
        content:
          "Explore SolekTech biodigester installations across residential estates, hospitality, institutions, and industry.",
      },
      { property: "og:title", content: "Featured SolekTech Projects" },
      {
        property: "og:description",
        content:
          "Recent biodigester installations — quietly running across estates, resorts, campuses, and factories.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Recent work, quietly running."
        description="A curated selection of SolekTech installations across sectors — designed for performance you don't have to think about."
      />
      <Projects />
      <Testimonials />
      <CtaBand />
    </>
  );
}
