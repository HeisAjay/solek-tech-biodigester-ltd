import { motion } from "framer-motion";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,255,255,0.16),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-brand" />
            {eyebrow}
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
