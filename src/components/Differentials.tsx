import { Reveal } from "./Reveal";
import { Gem, Handshake, MapPinned, ShieldCheck, Clock, KeyRound } from "lucide-react";

const items = [
  {
    icon: Gem,
    title: "Curadoria criteriosa",
    text: "Você só vê imóveis que valem o seu tempo. Eu filtro tudo antes de apresentar.",
  },
  {
    icon: Handshake,
    title: "Negociação estratégica",
    text: "Defendo o seu interesse com dados de mercado e jogo de cintura na medida certa.",
  },
  {
    icon: MapPinned,
    title: "Conhecimento de bairro",
    text: "Sei onde vale investir, onde mora a tranquilidade e onde o metro quadrado se valoriza.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança jurídica",
    text: "Documentação revisada ponta a ponta para você assinar com total tranquilidade.",
  },
  {
    icon: Clock,
    title: "Atendimento dedicado",
    text: "Poucos clientes por vez. Você fala direto comigo, sem intermediários.",
  },
  {
    icon: KeyRound,
    title: "Do café às chaves",
    text: "Acompanho cada etapa da jornada, antes, durante e depois do fechamento.",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            Por que comigo
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
            Um atendimento que se nota no detalhe.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg">
                <span className="inline-flex rounded-xl bg-gold/15 p-3 text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
