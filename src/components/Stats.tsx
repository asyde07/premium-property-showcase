import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 200, suffix: "+", label: "Imóveis negociados" },
  { value: 8, suffix: " anos", label: "De mercado no Rio" },
  { value: 1.2, suffix: " bi", prefix: "R$ ", label: "Em VGV transacionado", decimals: 1 },
  { value: 98, suffix: "%", label: "Clientes satisfeitos" },
];

function Counter({
  value,
  decimals = 0,
}: {
  value: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{display.toFixed(decimals)}</span>;
}

export function Stats() {
  return (
    <section className="bg-foreground py-20 text-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-4xl font-bold text-gold md:text-5xl">
              {s.prefix}
              <Counter value={s.value} decimals={s.decimals ?? 0} />
              {s.suffix}
            </p>
            <p className="mt-2 text-sm text-background/70">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
