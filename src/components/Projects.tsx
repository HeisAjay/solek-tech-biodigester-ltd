import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowUpRight } from "lucide-react";
import estateImg from "@/assets/project-estate.jpg";
import schoolImg from "@/assets/project-school.jpg";
import industrialImg from "@/assets/project-industrial.jpg";
import hotelImg from "@/assets/project-hotel.jpg";

const projects = [
  {
    img: estateImg,
    tag: "Residential Estate",
    title: "Palmview Heights — 84 homes",
    excerpt: "A fully underground biodigester network serving an 84-home luxury estate with zero surface footprint.",
  },
  {
    img: industrialImg,
    tag: "Industrial",
    title: "Northline Processing Plant",
    excerpt: "High-capacity anaerobic treatment cutting effluent COD by 92% and reclaiming biogas for on-site heat.",
  },
  {
    img: schoolImg,
    tag: "Institutional",
    title: "Greenfield Academy Campus",
    excerpt: "A silent, odor-free system serving 2,400 students and staff — with dashboard-based monitoring.",
  },
  {
    img: hotelImg,
    tag: "Hospitality",
    title: "Bayline Resort & Spa",
    excerpt: "Discreet treatment integrated into landscaped grounds — preserving guest experience end-to-end.",
  },
];

export function Projects() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Recent work, quietly running."
          description="A sample of installations across sectors — designed for performance you don't have to think about."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ img, tag, title, excerpt, index }: { img: string; tag: string; title: string; excerpt: string; index: number }) {
  const ref = useReveal<HTMLAnchorElement>();
  return (
    <a
      ref={ref}
      href="#"
      style={{ transitionDelay: `${index * 80}ms` }}
      className="reveal group relative block overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elegant transition-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04121a]/80 via-[#04121a]/10 to-transparent" />
        <span className="absolute top-5 left-5 inline-flex items-center rounded-full glass px-3 py-1 text-xs font-medium text-white">
          {tag}
        </span>
        <div className="absolute inset-x-6 bottom-6 text-white">
          <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 text-sm text-white/80 max-w-md">{excerpt}</p>
          <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-brand">
            View case study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </a>
  );
}
