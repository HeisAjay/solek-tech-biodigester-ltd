import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import waterImg from "@/assets/water.jpg";

export function CtaBand() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={waterImg} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F766E]/95 via-[#0F766E]/85 to-[#2563EB]/85" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center text-white">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          Ready to build wastewater that just works?
        </h2>
        <p className="mt-5 text-base md:text-lg text-white/85 max-w-2xl mx-auto">
          Book a free consultation with our engineers. We'll survey your site and design a system
          sized precisely for your load, footprint, and long-term goals.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-elegant hover:bg-white/95 transition"
          >
            Schedule a Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="https://wa.me/000000000"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
