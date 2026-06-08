import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  const { scrollY } = useScroll();
  // Parallax sutil: a imagem desloca mais devagar que o conteúdo.
  const y = useTransform(scrollY, [0, 600], [0, 140]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Residência de alto padrão no Rio de Janeiro"
          className="h-[120%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-start justify-center px-6 text-white"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-xs uppercase tracking-[0.35em] text-gold"
        >
          Curadoria · Discrição · Resultado
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl font-display text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl"
        >
          Endereços que definem um jeito de viver.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg text-white/85"
        >
          Imóveis de alto padrão no Rio de Janeiro, selecionados a dedo para quem
          não negocia exigência. Eu cuido de cada detalhe — você só escolhe o
          próximo capítulo.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#imoveis"
            className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:scale-105"
          >
            Ver imóveis em destaque
          </a>
          <a
            href="#contato"
            className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Quero atendimento exclusivo
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#sobre"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
        aria-label="Rolar para baixo"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
