// Configuração central do site — edite aqui os dados de contato e textos-chave.
export const site = {
  brokerName: "Jorge Herrera",
  brand: "Jorge Herrera Imóveis",
  creci: "CRECI/RJ 25210",
  city: "Rio de Janeiro",
  niche: "imóveis de alto padrão",
  email: "jorgeherrera@terra.com.br",
  // WhatsApp em formato internacional (somente dígitos) usado nos links wa.me
  whatsapp: "5521964453308",
  whatsappDisplay: "(21) 96445-3308",
  // Endereço usado no embed do Google Maps
  mapsQuery: "Leblon, Rio de Janeiro, RJ",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
} as const;

// Monta um link de WhatsApp já com mensagem pré-preenchida.
export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
