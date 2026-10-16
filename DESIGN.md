---
name: Nexo Solar
description: Um sistema visual natural e preciso para acompanhar energia off-grid.
colors:
  forest: "#24543c"
  forest-deep: "#16271d"
  forest-mid: "#1b4430"
  lime: "#cbea87"
  lime-deep: "#b4d56c"
  amber: "#f3d98b"
  solar-deep: "#c4901a"
  paper: "#f7f8f2"
  mint: "#e8efe5"
  ink: "#16271d"
  muted: "#68766b"
  line: "#dfe6dd"
  leaf: "#3b7a57"
  leaf-soft: "#91b89a"
  red: "#c4443a"
  red-bg: "#fbe9e6"
  amber-ink: "#7a5206"
  amber-bg: "#fbf1d3"
  on-dark: "#bfd0c4"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(46px, 6.2vw, 92px)"
    fontWeight: 300
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(32px, 4.6vw, 56px)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(26px, 2.6vw, 36px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "DM Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.12em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "#ffffff"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0 22px"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0 22px"
    height: "48px"
  text-field:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0 14px"
    height: "50px"
  panel:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "22px"
---

# Design System: Nexo Solar

## Overview

**Creative North Star: "Fluxo vivo de energia"**

Natureza, tecnologia e equipamentos distintos se conectam por formas orgânicas, linhas fluidas e sinais de movimento. A identidade é natural, sofisticada, expressiva, precisa e acolhedora: combina uma composição editorial com a clareza que uma ferramenta de monitoramento exige. O efeito de estúdio criativo fica sobretudo na landing; no painel, a legibilidade dos dados e a simplicidade de operação prevalecem.

A base clara de marfim e verdes cria espaço para acentos de energia e estados informativos. Fraunces dá expressão aos títulos, enquanto Manrope e DM Mono sustentam leitura cotidiana, controles e valores técnicos. A profundidade é mínima e funcional: superfícies planas, divisórias sutis e sombras localizadas quando ajudam a comunicar hierarquia ou interação.

**Key Characteristics:**
- Espaço claro e editorial, com verdes naturais e acentos solares comedidos.
- Contraste tipográfico entre títulos expressivos e dados de leitura direta.
- Formas orgânicas reservadas a elementos de marca e ilustrações, sem interferir na operação.
- Estados e métricas devem permanecer distinguíveis e legíveis.

## Colors

A paleta confirmada combina marfim, verdes botânicos e acentos de luz; cores de alerta continuam semânticas e não decorativas.

### Primary
- **Verde floresta** (`#24543c`): ação primária, navegação selecionada e pontos de identidade.
- **Verde floresta profundo** (`#16271d`): texto principal e superfícies escuras pontuais.
- **Verde floresta médio** (`#1b4430`): variação de hover e ênfase.
- **Verde folha** (`#3b7a57`): acentos de estado e detalhes de gráficos.

### Secondary
- **Verde névoa** (`#e8efe5`): fundos de apoio, painéis de fluxo e estados suaves.
- **Verde folha suave** (`#91b89a`): gráficos e ilustrações naturais.
- **Lima suave** (`#cbea87`): acento energético, foco e detalhe em superfícies escuras.
- **Lima profunda** (`#b4d56c`): variação tonal do acento lima.
- **Amarelo solar** (`#f3d98b`): sinalização solar e estados de atenção.
- **Ocre solar** (`#c4901a`): pequenos marcadores e rótulos solares.

### Neutral
- **Marfim** (`#f7f8f2`): fundo principal.
- **Texto profundo** (`#16271d`): leitura primária; compartilha valor com o verde floresta profundo.
- **Texto secundário** (`#68766b`): descrições, metadados e conteúdo auxiliar.
- **Divisória** (`#dfe6dd`): bordas e separadores discretos.
- **Texto sobre escuro** (`#bfd0c4`): texto secundário em superfícies verdes escuras.

### Semantic
- **Vermelho de alerta** (`#c4443a`) e fundo (`#fbe9e6`): comunicação interrompida ou estado crítico.
- **Ocre de atenção** (`#7a5206`) e fundo (`#fbf1d3`): leituras desatualizadas e avisos.

**The Truthful Status Rule.** Cor de estado comunica somente o estado demonstrativo representado; ausência de dados não deve ser apresentada como diagnóstico físico.

## Typography

**Display Font:** Fraunces (with Georgia, serif fallback)  
**Body Font:** Manrope (with system-ui, sans-serif fallback)  
**Label/Mono Font:** DM Mono (with ui-monospace, monospace fallback)

**Character:** Fraunces oferece personalidade editorial e orgânica aos títulos. Manrope mantém interfaces, textos e controles contemporâneos e legíveis; DM Mono diferencia metadados, horários, unidades e códigos técnicos.

### Hierarchy
- **Display** (300, `clamp(46px, 6.2vw, 92px)`, line-height `.98`): título principal da landing.
- **Headline** (300, `clamp(32px, 4.6vw, 56px)`, line-height `1.08`): títulos editoriais de seções.
- **Title** (600, `clamp(26px, 2.6vw, 36px)`, line-height `1.1`): título de página no painel.
- **Body** (400, `16px`, line-height `1.55`): texto corrente e instruções.
- **Label** (500, `11px`, line-height `1.3`, tracking `.12em`, uppercase quando metadado): rótulos e identificadores auxiliares em DM Mono.

**The Readable Metrics Rule.** Valores, unidades, tabelas e descrições técnicas priorizam leitura rápida; a expressão editorial permanece nos títulos.

## Layout

A landing usa uma composição editorial assimétrica de duas colunas no hero, largura máxima observada de `1328px`, alinhamento amplo e respiro generoso. A ilustração SVG original de formas botânicas e linhas curvas de fluxo ganha mais espaço e pode avançar até a borda em telas largas; o hero empilha conteúdo e ilustração em telas menores. A navegação superior fixa tem `76px`; o espaço lateral parte de `56px` e reduz para `32px` e `20px` em telas menores.

O painel usa sidebar fixa de `264px` em telas largas e uma área de conteúdo centralizada até `1400px`, com `32px` de padding. Abaixo de `1180px`, a navegação vira drawer; em `900px`, grades de métricas e configurações se reorganizam; em `720px`, conteúdo de alertas e colunas laterais se empilham; em `560px`, detalhes e espaçamentos compactam. A hierarquia entre título, contexto da instalação, filtros e dados deve permanecer estável ao reduzir a viewport.

O ritmo observado usa múltiplos de `4px` (`4`, `8`, `12`, `16`, `20`, `24`, `32px`). Usar espaço negativo para organizar o conteúdo, não para ocultar ações ou informações necessárias.

## Elevation & Depth

Profundidade mínima e funcional. A maior parte das superfícies é plana, separada por bordas suaves e mudanças tonais entre marfim, branco e verde névoa. Sombras existem em cartões ilustrativos, menus, modais e alguns estados de hover; mantê-las localizadas e proporcionais à função, sem transformar cada painel em um cartão flutuante.

### Shadow Vocabulary
- **Hover e foco de card:** sombra leve e elevação pequena, somente para indicar interação.
- **Menu e modal:** sombra estrutural mais nítida para separar a camada sobreposta.
- **Landing ilustrativa:** sombra difusa pode apoiar a composição do hero, sem ser padrão para conteúdo operacional.

**The Functional Elevation Rule.** Sombras explicam interação ou sobreposição; não substituem hierarquia, espaçamento ou contraste.

## Shapes

Controles e superfícies usam cantos moderados: `4px` é o padrão para botões, campos e navegação; painéis usam `6px`; cards de sistemas chegam a `8px`. Chips e indicadores usam formato de pílula, avatares e pontos são circulares. Formas orgânicas assimétricas aparecem em ilustrações e alguns elementos editoriais, não em todos os componentes.

Bordas finas em verde acinzentado estruturam campos, painéis e separadores. Evitar arredondamento universal e excesso de contornos concorrentes.

## Components

Controles simples, claros e consistentes. A hierarquia de ação é explícita, estados são visíveis e a expressão de marca fica nos detalhes naturais.

### Buttons
- **Shape:** cantos de `4px`; botões padrão têm altura mínima de `48px` e padding horizontal de `22px`.
- **Primary:** fundo verde floresta com texto branco; Manrope `14px`, peso `700`.
- **Hover / Focus:** elevação discreta no hover, mudança tonal e foco visível com contorno verde e halo lima.
- **Secondary:** fundo transparente, texto profundo e borda verde acinzentada; hover recebe fundo verde névoa.
- **Disabled / Loading:** estado desabilitado reduz opacidade; o login usa indicador de carregamento e bloqueia novo envio.

### Chips
- **Style:** estados e categorias em cápsulas compactas, com fundo semântico claro, texto contrastante e ícone quando aplicável.
- **State:** verde para comunicação ativa, ocre para dados atrasados/atenção e vermelho para offline/crítico. A cor acompanha rótulo textual.

### Cards / Containers
- **Corner Style:** painéis `6px`; cards de sistemas `8px`; ilustrações de assinatura podem usar um recorte orgânico.
- **Background:** branco ou verde névoa sobre o fundo marfim.
- **Shadow Strategy:** sem sombra em repouso na maioria das superfícies; hover ou sobreposição podem receber elevação funcional.
- **Border:** divisória `#dfe6dd`, em geral com `1px`.
- **Internal Padding:** painéis `22px`; cards de sistemas `24px`.

### Inputs / Fields
- **Style:** fundo branco, borda `1px` verde acinzentada, raio `4px`, altura `50px` e padding horizontal `14px`.
- **Focus:** contorno verde floresta de `2px` com halo lima de `5px`, compartilhado globalmente por `:focus-visible`.
- **Error / Disabled:** erro combina borda e texto vermelho com mensagem explícita; controles desabilitados reduzem opacidade.

### Navigation
- **Style:** rótulos em Manrope; metadados em DM Mono; itens de navegação com altura mínima de `46px`.
- **Default / Hover / Active:** item padrão sem preenchimento; hover usa verde névoa; seleção acrescenta fundo verde névoa e indicador lateral verde floresta.
- **Mobile:** navegação do painel abre em drawer com scrim; a landing recolhe links em menu acionável.

### Fluxo de energia demonstrativo
Diagrama editorial de nós sobre uma escultura vetorial botânica e correntes curvas que ilustram painéis, inversor/controlador, bateria e cargas. O cursor pode deslocar a escultura alguns pixels e realçar o fluxo próximo ao ponto focal, sem mover os nós nem encobrir valores. Um cursor complementar de ponto e anel serve apenas dispositivos com mouse/ponteiro preciso e movimento permitido; não intercepta interação nem substitui o cursor de texto. Dados e movimento são demonstrações; rótulos e notas devem deixar explícito que não representam conexão física ou telemetria real. O SVG permanece legível como imagem estática em telas pequenas e com movimento reduzido; não depende de Canvas, WebGL ou telemetria.

## Do's and Don'ts

### Do:
- **Do** usar marfim como base e verde floresta como ação e âncora de identidade.
- **Do** preservar os valores hexadecimais definidos nos tokens CSS como fonte de verdade.
- **Do** combinar títulos Fraunces com texto Manrope e metadados DM Mono.
- **Do** reservar formas orgânicas e animações de fluxo para elementos com significado visual.
- **Do** manter contraste, foco de teclado, responsividade e `prefers-reduced-motion`.
- **Do** marcar claramente dados, equipamentos e estados fictícios.
- **Do** usar cor junto de texto ou ícone para comunicar estados.

### Don't:
- **Don't** converter o produto em um dashboard corporativo genérico ou uma interface inteiramente escura.
- **Don't** copiar as marcas ou composições dos sites de inspiração.
- **Don't** saturar a interface com cartões arredondados, gradientes decorativos ou sombras pesadas.
- **Don't** usar imagens genéricas como prova de instalações reais ou da Solarneo.
- **Don't** deixar animações competir com dados ou reduzir sua leitura.
- **Don't** sugerir integração, compatibilidade, diagnóstico ou telemetria que o protótipo não possui.
