## Site premium — Jorge Herrera Imóveis

Landing page de alto padrão (single-page com âncoras suaves) para o corretor Jorge Herrera, alto padrão no Rio de Janeiro. Stack adaptada ao ambiente Lovable: **TanStack Start (React + Vite) + Tailwind + Framer Motion + Lucide**. Deploy é feito pela própria Lovable (com domínio próprio opcional) — não Netlify, mas com todo o resultado pedido.

### Decisões já confirmadas
- Corretor: **Jorge Herrera Imóveis** — CRECI/RJ 25210 — Rio de Janeiro
- Contato: WhatsApp **(21) 96445-3308** · E-mail **jorgeherrera@terra.com.br**
- Formulário: **direciona direto pro WhatsApp** (sem backend)
- Mapa: **conector oficial do Google Maps**
- **Dark mode** incluído (toggle no header)

### Identidade visual
- Paleta sóbria: off-white (`#faf8f5`), preto/grafite, dourado (`#c9a84c`) como acento — variante escura elegante para dark mode
- Tipografia: **Playfair Display** nos títulos, **Inter** no corpo (carregadas via `<link>` no `__root.tsx`, registradas no `@theme` do `styles.css`)
- Tokens semânticos em `src/styles.css` (claro + escuro), sem cores hardcoded nos componentes
- Fotos grandes e cinematográficas via Unsplash (URLs diretas), parallax sutil no Hero, hover refinado nos cards, animações fade-in/slide-up no scroll com Framer Motion

### Seções (uma página, navegação com scroll suave)
1. **Hero** full-screen com parallax, frase de posicionamento forte e CTA
2. **Sobre** o corretor — história humanizada e credenciais (CRECI)
3. **Imóveis em destaque** — filtro por tipo (venda/aluguel) e faixa de valor + cards elegantes com **galeria lightbox**
4. **Números de credibilidade** (animação de contagem)
5. **Diferenciais** com ícones Lucide minimalistas
6. **Depoimentos** com foto, nome e estrelas
7. **Contato** — formulário que monta a mensagem e abre o WhatsApp + **mapa Google Maps**
8. **CTA final** para WhatsApp
9. **Rodapé** completo: redes sociais, CRECI, e-mail, links de navegação

### Recursos globais
- **Header responsivo** com menu hamburger no mobile + toggle de dark mode
- **Botão de WhatsApp flutuante** fixo
- **Scroll suave** entre seções
- **SEO**: title, description, Open Graph e JSON-LD (RealEstateAgent) no `__root.tsx`/rota
- **Google Analytics** preparado (script comentado, pronto para colar o ID)

### Etapas técnicas
1. Conectar o conector **Google Maps** (vou solicitar a conexão no início do build)
2. Instalar `framer-motion` (Lucide já disponível)
3. Definir tokens de cor + fontes em `src/styles.css`; carregar fontes no `__root.tsx` e configurar SEO/OG/JSON-LD + dark mode (classe `.dark`)
4. Criar dados fictícios realistas dos imóveis (`src/data/properties.ts`) e depoimentos
5. Construir componentes em `src/components/` (Header, Hero, Sobre, Filtro+Cards, Lightbox, Stats, Diferenciais, Depoimentos, Contato+Mapa, CTA, Footer, WhatsAppFloat, ThemeToggle)
6. Montar a home em `src/routes/index.tsx` com animações Framer Motion e âncoras
7. Verificar no preview (responsivo, lightbox, filtro, dark mode, WhatsApp)

### Observações
- Textos fictícios porém realistas; microcopy cuidadoso nos botões ("Quero conhecer esse imóvel", "Falar com o Jorge agora")
- Nicho assumido: alto padrão no Rio — me avise se for outro (lançamentos, comercial, litoral etc.) que eu ajusto os textos
- Para o Google Analytics, depois é só me passar o ID de medição que eu ativo