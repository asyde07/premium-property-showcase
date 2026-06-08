import { Reveal } from "./Reveal";
import { whatsappLink } from "@/lib/site";

const BROKER_IMG =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80";

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src={BROKER_IMG}
              alt="Jorge Herrera, corretor de imóveis"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-gold px-7 py-5 text-gold-foreground shadow-xl">
              <p className="font-display text-3xl font-bold">8 anos</p>
              <p className="text-xs uppercase tracking-widest">de mercado carioca</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            Sobre Jorge Herrera
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
            Mais do que vender imóveis, eu entrego o lugar certo.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Nasci e cresci no Rio. Conheço cada esquina dos bairros mais
              desejados da cidade — e foi essa intimidade com os endereços que me
              fez trocar uma carreira corporativa pela corretagem de alto padrão.
            </p>
            <p>
              Trabalho com poucos clientes por vez, propositalmente. Assim
              consigo entender o que realmente importa para cada família, negociar
              com firmeza e estar presente em cada etapa, do primeiro café à
              entrega das chaves.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <span className="rounded-full border border-border px-4 py-2 text-sm font-medium">
              CRECI/RJ 25210
            </span>
            <a
              href={whatsappLink(
                "Olá, Jorge! Gostaria de conhecer melhor o seu trabalho.",
              )}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-gold underline-offset-4 hover:underline"
            >
              Conversar com o Jorge →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
