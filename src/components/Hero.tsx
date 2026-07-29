import { Link } from "@tanstack/react-router";
import { ClipboardCheck, PlayCircle, Leaf, Waves, Cog, ShieldCheck, HardHat } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";

const features = [
  { icon: Leaf, title: "Eco-Friendly", sub: "Technology" },
  { icon: Waves, title: "Odor-Free", sub: "Performance" },
  { icon: Cog, title: "Low", sub: "Maintenance" },
  { icon: ShieldCheck, title: "Long", sub: "Service Life" },
  { icon: HardHat, title: "Expert", sub: "Installation" },
];

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="SolekTech engineers installing an underground biodigester sewage system on a building site"
        width={1920}
        height={1280}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#03150f]/95 via-[#03150f]/70 to-[#03150f]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#03150f]/85 via-transparent to-[#03150f]/60" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 lg:px-10 pt-28 pb-48 md:pb-56">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white">
            Engineering Smarter Wastewater Solutions for a{" "}
            <span className="text-emerald-brand">Cleaner Future</span>
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
            SolekTech delivers advanced biodigester sewage systems for homes, estates, hotels,
            schools, hospitals, commercial developments, and industries — providing sustainable
            wastewater treatment with long-term performance, minimal maintenance, and environmental
            responsibility.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 rounded-xl gradient-emerald px-6 py-3.5 text-sm font-semibold text-white shadow-elegant hover:opacity-95 transition"
            >
              <ClipboardCheck className="h-4.5 w-4.5" aria-hidden="true" />
              Request a Free Site Assessment
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/40 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              <PlayCircle className="h-4.5 w-4.5" aria-hidden="true" />
              View Our Projects
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-4 bottom-6 z-20 lg:inset-x-auto lg:left-1/2 lg:-translate-x-1/2 lg:w-[min(1180px,calc(100%-3rem))]"
      >
        <div className="rounded-2xl border border-white/10 bg-[#062018]/80 backdrop-blur-xl shadow-elegant">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-white/10 lg:divide-x">
            {features.map((f) => (
              <li key={f.title} className="flex items-center gap-3 px-5 py-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-brand/15 text-emerald-brand">
                  <f.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 leading-tight">
                  <span className="block text-sm font-semibold text-white truncate">{f.title}</span>
                  <span className="block text-sm text-white/65 truncate">{f.sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
