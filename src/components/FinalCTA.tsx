import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/site";

const BG =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <img src={BG} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/65" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white"
      >
        <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
          O imóvel certo não espera. Eu também não.
        </h2>
        <p className="mt-5 text-lg text-white/85">
          Fale comigo hoje e receba uma seleção personalizada antes de chegar ao
          mercado.
        </p>
        <a
          href={whatsappLink(
            "Olá, Jorge! Quero receber uma seleção personalizada de imóveis.",
          )}
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-block rounded-full bg-gold px-8 py-4 text-sm font-semibold text-gold-foreground transition-transform hover:scale-105"
        >
          Quero minha seleção exclusiva
        </a>
      </motion.div>
    </section>
  );
}
