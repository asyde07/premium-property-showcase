// Configuração central do site — edite aqui os dados de contato e textos-chave.
export const site = {
  brokerName: "Vitor Gabriel",
  brand: "Vitor Gabriel Imóveis",
  creci: "CRECI/RJ 25210",
  city: "Rio de Janeiro",
  niche: "imóveis de alto padrão",
  email: "jorgeherrera@terra.com.br",
  // Número exibido para o usuário
  whatsapp: "5596999024219",
  whatsappDisplay: "(96) 99902-4219",
  // Link direto do WhatsApp (encurtador oficial)
  whatsappUrl: "https://w.app/ddo6cl",
  // Endereço usado no embed do Google Maps
  mapsQuery: "Leblon, Rio de Janeiro, RJ",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
} as const;

// Retorna o link direto do WhatsApp (o encurtador não suporta mensagem pré-preenchida).
export const whatsappLink = (_message?: string) => site.whatsappUrl;
