# Solarneo Monitor — projeto completo em HTML, CSS e JavaScript

Este projeto está organizado em arquivos separados e pronto para abrir no VS Code. O conteúdo foi recuperado do pacote completo do site; os arquivos não foram substituídos por exemplos curtos nem por trechos de código. Os arquivos CSS foram apenas formatados para facilitar a leitura. A lógica JavaScript foi preservada.

## Como abrir no VS Code

1. Extraia o ZIP inteiro para uma pasta.
2. Abra essa pasta no VS Code (**Arquivo → Abrir Pasta**).
3. Abra `index.html` usando a extensão **Live Server** (clique com o botão direito e escolha **Open with Live Server**). Se não tiver a extensão, pode instalar pelo painel de extensões do VS Code.
4. Na página inicial, use os links de acesso ou demonstração para navegar entre a landing page, o login e o painel.

Não é necessário instalar Node.js, npm, React ou executar uma compilação para usar este front-end. O Live Server é recomendado para que as páginas sejam servidas por HTTP localmente.

## Arquivos

- `index.html` — landing page pública.
- `login.html` — formulário de login demonstrativo.
- `dashboard.html` — painel da demonstração.
- `css/base.css` — variáveis, tipografia e estilos compartilhados.
- `css/landing.css` — estilos da landing page e do login.
- `css/dashboard.css` — estilos do painel, gráficos, listas e alertas.
- `css/overrides.css` — ajustes complementares e responsividade.
- `js/common.js` — ícones e funções compartilhadas.
- `js/landing.js` — interações da landing page.
- `js/login.js` — validação demonstrativa do formulário.
- `js/demo-data.js` — dados fictícios centralizados para a demonstração.
- `js/dashboard.js` — navegação e interações do painel.
- `assets/favicon.svg` — favicon vetorial.
- `PROMPT-PARA-CLAUDE.md` — prompt anterior para continuar a evolução do projeto.

## Como usar a demonstração

- O botão para entrar na demonstração permite abrir o painel sem credenciais reais.
- No formulário de login, um e-mail com formato válido e uma senha não vazia simulam o acesso.
- No painel, teste a troca de instalação, as seções de sistemas, histórico, alertas, equipamentos e configurações, além dos filtros e mudanças de estado dos alertas.

## Limites técnicos importantes

Este é um protótipo de front-end. Sistemas, fabricantes, medições e alertas são dados fictícios. Login/logout não são autenticação de produção. Não há banco de dados, backend, API, telemetria real, conexão com inversores ou baterias, nem diagnóstico remoto real. Os recursos futuros de integração multimarca precisam de validação técnica dos protocolos, modelos e condições de segurança dos equipamentos.

As imagens e fontes remotas dependem de conexão com a internet. Se estiver sem internet, a estrutura do site ainda pode abrir, mas algumas imagens/fontes podem não aparecer.

## Verificações realizadas nesta recuperação

- Os arquivos HTML/CSS/JS estão presentes e separados.
- Os caminhos locais referenciados por HTML e CSS foram conferidos.
- Todos os arquivos JavaScript passaram na verificação de sintaxe do Node.js.
- Os quatro arquivos CSS passaram na análise sintática.
- Foi tentado um teste automatizado visual/interativo no navegador, mas o ambiente de verificação bloqueou a abertura local. Portanto, não afirmo que foi concluída uma validação visual completa em navegador; recomendo abrir com Live Server e conferir no seu próprio VS Code.

## Atualização desta rodada

- Nova seção **Natureza e energia** na landing (`#natureza`): galeria curva de imagens, adaptação em JS puro do "Tilted Grid Hero" do 21st.dev. Arquivos: `js/curve-gallery.js` e `css/refine.css`. Respeita `prefers-reduced-motion` (a galeria congela). Para trocar as fotos, edite `data-images` no `index.html`.
- Imagens do Unsplash otimizadas (1200 px) em `assets/img/`. A faixa fotográfica agora usa imagem local, sem depender da internet.
- Ainda dependem de internet: a imagem remota da seção "Onde a rede não chega" (segunda foto) e as fontes do Google.
- Segue protótipo: dados fictícios, login simulado, sem backend.
- Nova seção **O caminho dos dados** (`#fluxo`): diagrama conceitual (equipamentos de marcas diferentes, aquisição somente leitura, normalização, API/banco futuros, painel). Só o painel existe; as outras etapas estão marcadas como "a validar" ou "não implementada". Em celular o diagrama vira uma lista.

## Dados e integração futura

Todos os dados fictícios ficam em `js/demo-data.js` (objeto `window.SolarneoData`: instalações, alertas e funções de séries). `js/dashboard.js` só lê esse objeto. Para integrar de verdade no futuro, troque a origem em `demo-data.js` por chamadas a uma API que devolva o mesmo formato, sem refazer a interface. Antes disso é preciso validar protocolos e mapas de registradores de cada fabricante; nada disso existe hoje.
- **Correção no painel:** o CSS dos gráficos (eixos, grade, linha, barras, tooltips e legendas) estava ausente e os rótulos do eixo apareciam emendados. As regras estão agora em `css/refine.css` (carregado em `index.html`, `login.html` e `dashboard.html`).
- **Correção no hero e no login:** as legendas do diagrama de energia ficavam sobre os ícones (um `calc()` sem espaços) e uma máscara deixava os nós apagados. Corrigido em `css/refine.css`.
