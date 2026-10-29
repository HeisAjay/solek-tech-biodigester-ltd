import type { ReactNode } from "react";

import { Link } from "@tanstack/react-router";

import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

import { ArrowUpRight, ArrowRight } from "lucide-react";

import siteWorkImg from "@/assets/project-biodigester-site-prep.jpg";
import websiteShot from "@/assets/project-website-screenshot.jpg";

type Project = {
  category: string;
  title: string;
  description: string;
  status: string;
  link: string;
  buttonLabel: string;
  render: () => ReactNode;
};

const projects: Project[] = [
  {
    category: "Wastewater Infrastructure",
    title: "Biodigester Site Preparation",
    description:
      "On-site preparation for an advanced biodigester sewage system. This project documents the groundwork involved in preparing a site for wastewater infrastructure.",
    status:
      "Project documentation: site preparation. Final installation completion has not been confirmed.",
    link: "https://solektech-tnz2k29.public.builtwithrocket.new/",
    buttonLabel: "View Project",
    render: () => (
      <img
        src={siteWorkImg}
        alt="Workers wearing reflective safety vests preparing a site for a biodigester installation"
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    ),
  },
  {
    category: "Website Design & Digital Presence",
    title: "SolekTech Company Website",
    description:
      "A digital presence showcasing SolekTech's biodigester technology, services, and wastewater solutions, with a clear pathway for prospective customers to request consultations.",
    status: "Published website.",
    link: "https://solek-tech-biodigester-ltd.lovable.app/",
    buttonLabel: "Visit Website",
    render: () => (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-muted p-4 md:p-6">
        <div className="w-full max-w-md overflow-hidden rounded-lg border border-border bg-background shadow-elegant transition-transform duration-700 group-hover:scale-105">
          <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-3 py-2">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-destructive/50"
            />
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-chart-4/60"
            />
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-emerald/60"
            />

            <span className="ml-2 flex-1 truncate rounded border border-border bg-background px-2 py-1 text-xs text-muted-foreground">
              solek-tech-biodigester-ltd.lovable.app
            </span>
          </div>

          <img
            src={websiteShot}
            alt="Preview screenshot of the SolekTech company website"
            loading="lazy"
            className="block h-auto w-full"
          />
        </div>
      </div>
    ),
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="OUR WORK"
          title="Engineering Solutions in Action"
          description="Explore documented site work and SolekTech's digital presence, bringing wastewater solutions and practical project information together."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>

        <FinalCta />
      </div>
    </section>
  );
}

function ProjectCard({
  category,
  title,
  description,
  status,
  link,
  buttonLabel,
  render,
  index,
}: Project & { index: number }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className="reveal group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-elegant"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {render()}
      </div>

      <div className="p-6 md:p-8">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          {category}
        </span>

        <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>

        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          <span className="font-semibold">Project status: </span>
          {status}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${buttonLabel}: ${title} (opens in a new tab)`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {buttonLabel}

          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </article>
  );
}

function FinalCta() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal mt-16 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-secondary p-8 text-center md:p-10"
    >
      <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Planning a Wastewater Project?
      </h3>

      <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
        Tell us about your site and requirements. Our team can discuss your
        needs and help you explore the appropriate next steps.
      </p>

      <Link
        to="/contact"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Request a Consultation

        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4"
        />
      </Link>
    </div>
  );
}
