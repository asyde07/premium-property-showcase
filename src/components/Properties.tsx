import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BedDouble, Bath, Car, Maximize, Images } from "lucide-react";
import { Reveal } from "./Reveal";
import { Lightbox } from "./Lightbox";
import { properties, type Property, type PropertyType } from "@/data/properties";
import { whatsappLink } from "@/lib/site";

type TypeFilter = "todos" | PropertyType;

const priceRanges = [
  { id: "all", label: "Qualquer valor", min: 0, max: Infinity },
  { id: "r1", label: "Até R$ 1 milhão", min: 0, max: 1_000_000 },
  { id: "r2", label: "R$ 1 mi – R$ 5 mi", min: 1_000_000, max: 5_000_000 },
  { id: "r3", label: "R$ 5 mi – R$ 10 mi", min: 5_000_000, max: 10_000_000 },
  { id: "r4", label: "Acima de R$ 10 mi", min: 10_000_000, max: Infinity },
];

function formatPrice(p: Property) {
  const value = p.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
  return p.type === "aluguel" ? `${value}/mês` : value;
}

function PropertyCard({
  property,
  onOpen,
}: {
  property: Property;
  onOpen: () => void;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="relative overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground">
          {property.type === "venda" ? "Venda" : "Aluguel"}
        </span>
        <button
          onClick={onOpen}
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Images className="h-4 w-4" /> {property.images.length} fotos
        </button>
      </div>

      <div className="p-6">
        <p className="text-xs uppercase tracking-widest text-gold">
          {property.neighborhood}
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold">
          {property.title}
        </h3>
        <p className="mt-3 font-display text-2xl font-bold">
          {formatPrice(property)}
        </p>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <BedDouble className="h-4 w-4" /> {property.bedrooms}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Bath className="h-4 w-4" /> {property.bathrooms}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Car className="h-4 w-4" /> {property.parking}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Maximize className="h-4 w-4" /> {property.area} m²
          </span>
        </div>

        <a
          href={whatsappLink(
            `Olá, Jorge! Tenho interesse no imóvel "${property.title}" em ${property.neighborhood}. Pode me passar mais detalhes?`,
          )}
          target="_blank"
          rel="noreferrer"
          className="mt-6 block rounded-full bg-foreground py-3 text-center text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          Quero conhecer esse imóvel
        </a>
      </div>
    </motion.article>
  );
}

export function Properties() {
  const [type, setType] = useState<TypeFilter>("todos");
  const [range, setRange] = useState("all");
  const [lightbox, setLightbox] = useState<Property | null>(null);

  const filtered = useMemo(() => {
    const r = priceRanges.find((x) => x.id === range)!;
    return properties.filter(
      (p) =>
        (type === "todos" || p.type === type) &&
        p.price >= r.min &&
        p.price <= r.max,
    );
  }, [type, range]);

  const typeOptions: { id: TypeFilter; label: string }[] = [
    { id: "todos", label: "Todos" },
    { id: "venda", label: "Venda" },
    { id: "aluguel", label: "Aluguel" },
  ];

  return (
    <section id="imoveis" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            Seleção exclusiva
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
            Imóveis em destaque
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma amostra do portfólio atual. Procura algo específico? Eu busco o
            imóvel certo para você, inclusive fora de vitrine.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="inline-flex rounded-full border border-border p-1">
              {typeOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setType(opt.id)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    type === opt.id
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <select
              value={range}
              onChange={(e) => setRange(e.target.value)}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground outline-none focus:border-gold"
            >
              {priceRanges.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} onOpen={() => setLightbox(p)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            Nenhum imóvel nesse filtro agora — me chame que eu encontro o ideal
            para você.
          </p>
        )}
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
