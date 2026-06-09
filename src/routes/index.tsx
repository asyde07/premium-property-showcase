import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Properties } from "@/components/Properties";
import { Differentials } from "@/components/Differentials";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vitor Gabriel Imóveis | Alto padrão no Rio de Janeiro" },
      {
        name: "description",
        content:
          "Corretor especialista em imóveis de alto padrão no Rio de Janeiro. Compra, venda e locação com curadoria, discrição e negociação estratégica.",
      },
      { property: "og:title", content: "Vitor Gabriel Imóveis | Alto padrão no Rio de Janeiro" },
      {
        property: "og:description",
        content:
          "Curadoria de imóveis de alto padrão no Rio de Janeiro com atendimento personalizado.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Properties />
        <Differentials />
        <Testimonials />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
