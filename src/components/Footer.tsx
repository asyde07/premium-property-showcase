import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#imoveis", label: "Imóveis" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold">Jorge Herrera</p>
          <p className="mt-1 text-sm uppercase tracking-[0.25em] text-gold">
            Imóveis · {site.city}
          </p>
          <p className="mt-4 max-w-sm text-sm text-background/70">
            Curadoria de imóveis de alto padrão no Rio de Janeiro, com
            atendimento pessoal e negociação estratégica.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-background/80">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-background/70">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-background/80">
            Contato
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-background/70">
            <li>
              <a
                href={`tel:+${site.whatsapp}`}
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <Phone className="h-4 w-4" /> {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <Mail className="h-4 w-4" /> {site.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {[
              { icon: Instagram, href: site.social.instagram, label: "Instagram" },
              { icon: Facebook, href: site.social.facebook, label: "Facebook" },
              { icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="rounded-full border border-background/20 p-2.5 transition-colors hover:border-gold hover:text-gold"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs text-background/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.brand} · {site.creci}
          </p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
