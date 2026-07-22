import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 480, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 24, suffix: "/7", label: "Technical Support" },
];

export function Stats() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Counter key={s.label} {...s} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const dur = 1600;
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(eased * value));
              if (p < 1) requestAnimationFrame(tick);
            };
            setTimeout(() => requestAnimationFrame(tick), delay);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, delay]);

  return (
    <div ref={ref} className="text-center text-white">
      <div className="font-display text-5xl md:text-6xl font-semibold tracking-tight tabular-nums">
        {n}
        <span className="text-emerald-brand">{suffix}</span>
      </div>
      <div className="mt-3 text-sm md:text-base text-white/75">{label}</div>
    </div>
  );
}
