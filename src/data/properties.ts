export type PropertyType = "venda" | "aluguel";

export interface Property {
  id: string;
  title: string;
  neighborhood: string;
  type: PropertyType;
  price: number;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  area: number;
  description: string;
  images: string[];
  featured?: boolean;
}

// Imagens via Unsplash (URLs diretas, otimizadas).
const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

// Imóveis fictícios, porém realistas — alto padrão no Rio de Janeiro.
export const properties: Property[] = [
  {
    id: "cobertura-leblon",
    title: "Cobertura Duplex Frente Mar",
    neighborhood: "Leblon",
    type: "venda",
    price: 12500000,
    bedrooms: 4,
    bathrooms: 5,
    parking: 3,
    area: 380,
    description:
      "Cobertura duplex com vista irrestrita para o mar do Leblon. Piscina privativa, terraço gourmet e acabamento assinado por arquiteto premiado.",
    images: [
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1600585154340-be6161a56a0c"),
      img("photo-1600607687939-ce8a6c25118c"),
    ],
    featured: true,
  },
  {
    id: "apartamento-ipanema",
    title: "Apartamento Clássico Reformado",
    neighborhood: "Ipanema",
    type: "venda",
    price: 6800000,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    area: 210,
    description:
      "A duas quadras da praia de Ipanema. Reforma de alto padrão, planta integrada e luz natural durante todo o dia.",
    images: [
      img("photo-1600566753086-00f18fb6b3ea"),
      img("photo-1600585152220-90363fe7e115"),
      img("photo-1600210492486-724fe5c67fb0"),
    ],
    featured: true,
  },
  {
    id: "casa-jardim-botanico",
    title: "Casa Contemporânea com Jardim",
    neighborhood: "Jardim Botânico",
    type: "venda",
    price: 9200000,
    bedrooms: 5,
    bathrooms: 6,
    parking: 4,
    area: 540,
    description:
      "Projeto contemporâneo cercado de verde, com pé-direito duplo, adega climatizada e área de lazer completa.",
    images: [
      img("photo-1600047509807-ba8f99d2cdde"),
      img("photo-1600585154526-990dced4db0d"),
      img("photo-1600121848594-d8644e57abab"),
    ],
    featured: true,
  },
  {
    id: "flat-copacabana",
    title: "Flat Mobiliado Vista Praia",
    neighborhood: "Copacabana",
    type: "aluguel",
    price: 14500,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: 96,
    description:
      "Flat totalmente mobiliado e decorado, com vista lateral para a praia de Copacabana e serviços de hotelaria inclusos.",
    images: [
      img("photo-1502672260266-1c1ef2d93688"),
      img("photo-1493809842364-78817add7ffb"),
      img("photo-1522708323590-d24dbb6b0267"),
    ],
    featured: true,
  },
  {
    id: "apartamento-botafogo",
    title: "Garden com Lazer Completo",
    neighborhood: "Botafogo",
    type: "aluguel",
    price: 9800,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: 140,
    description:
      "Garden em condomínio novo com infraestrutura de clube, vista para o Pão de Açúcar e localização privilegiada.",
    images: [
      img("photo-1545324418-cc1a3fa10c00"),
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1556912173-3bb406ef7e77"),
    ],
    featured: true,
  },
  {
    id: "cobertura-barra",
    title: "Cobertura Linear Beira-Mar",
    neighborhood: "Barra da Tijuca",
    type: "venda",
    price: 8400000,
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    area: 320,
    description:
      "Cobertura linear de frente para o mar da Barra, com piscina aquecida, spa e vista panorâmica de tirar o fôlego.",
    images: [
      img("photo-1613490493576-7fde63acd811"),
      img("photo-1600573472550-8090b5e0745e"),
      img("photo-1600566752355-35792bedcfea"),
    ],
    featured: true,
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marina Albuquerque",
    role: "Comprou no Leblon",
    quote:
      "O Vitor entendeu exatamente o que eu procurava e me poupou meses de busca. Negociação impecável e total transparência do início ao fim.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    name: "Rafael Monteiro",
    role: "Vendeu em Ipanema",
    quote:
      "Vendi meu apartamento acima do valor que esperava, em menos de 40 dias. Profissionalismo e estratégia de verdade.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    name: "Beatriz e Carlos Lima",
    role: "Alugaram em Botafogo",
    quote:
      "Atendimento humano e atencioso em cada detalhe. Recomendamos o Vitor para qualquer pessoa que valoriza um trabalho bem feito.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];
