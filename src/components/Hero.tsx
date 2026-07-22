import { Link } from "@tanstack/react-router";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Aerial view of a modern biodigester wastewater installation at a residential estate at golden hour"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#04121a]/70 via-[#04121a]/55 to-[#04121a]/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F766E]/30 via-transparent to-[#2563EB]/25 mix-blend-multiply" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 lg:px-10 pb-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/90 tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-brand" />
            Environmental Engineering · Clean Technology
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight text-white">
            Engineering Smarter Wastewater <span className="text-gradient">Solutions</span> for a
            Cleaner Future.
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">
            SolekTech delivers advanced biodigester sewage systems for homes, estates, hotels,
            schools, hospitals, commercial developments, and industries — providing sustainable
            wastewater treatment with long-term performance, minimal maintenance, and environmental
            responsibility.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full gradient-emerald px-6 py-3.5 text-sm font-semibold text-white shadow-elegant hover:opacity-95 transition"
            >
              Request a Free Site Assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition"
            >
              <PlayCircle className="h-4 w-4" />
              View Our Projects
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}
