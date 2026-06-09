import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { GoogleMap } from "./GoogleMap";
import { site, whatsappLink } from "@/lib/site";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    interest: "Quero comprar",
    message: "",
  });

  // O formulário não usa backend: monta a mensagem e abre o WhatsApp.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, Vitor! Meu nome é ${form.name}.
Interesse: ${form.interest}.
Telefone: ${form.phone}.
${form.message ? `Mensagem: ${form.message}` : ""}`;
    window.open(whatsappLink(text), "_blank");
  };

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold";

  return (
    <section id="contato" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            Vamos conversar
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
            Conte o que você procura.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Preencha os campos abaixo e eu te respondo pessoalmente pelo
            WhatsApp. Sem robôs, sem formulários infinitos.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              required
              className={field}
              placeholder="Seu nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required
              className={field}
              placeholder="Seu telefone / WhatsApp"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <select
              className={field}
              value={form.interest}
              onChange={(e) => setForm({ ...form, interest: e.target.value })}
            >
              <option>Quero comprar</option>
              <option>Quero alugar</option>
              <option>Quero vender meu imóvel</option>
              <option>Quero anunciar para locação</option>
            </select>
            <textarea
              rows={4}
              className={field}
              placeholder="Conte um pouco sobre o imóvel ideal (bairro, perfil, faixa de valor)..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              className="w-full rounded-full bg-gold py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.02]"
            >
              Falar com o Vitor agora
            </button>
          </form>

          <div className="mt-8 flex flex-col gap-3 text-sm text-muted-foreground">
            <a
              href={`tel:+${site.whatsapp}`}
              className="inline-flex items-center gap-3 hover:text-gold"
            >
              <Phone className="h-4 w-4" /> {site.whatsappDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-3 hover:text-gold"
            >
              <Mail className="h-4 w-4" /> {site.email}
            </a>
            <span className="inline-flex items-center gap-3">
              <MapPin className="h-4 w-4" /> Atendimento em todo o {site.city}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="min-h-[360px]">
          {/* Coordenadas aproximadas do Leblon, Rio de Janeiro */}
          <GoogleMap lat={-22.9847} lng={-43.2236} />
        </Reveal>
      </div>
    </section>
  );
}
