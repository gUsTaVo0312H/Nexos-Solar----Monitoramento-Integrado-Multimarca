# Nexo Solar — protótipo de monitoramento

Protótipo acadêmico desenvolvido no SENAI São João del-Rei, em parceria com a Solarneo Soluções Elétricas. O produto é identificado como **Nexo Solar**; Solarneo é a parceira institucional, não uma limitação de uso da plataforma.

## Abrir no VS Code

1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server**, se ainda não estiver disponível.
3. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.
4. Use os links da landing para abrir o login ou o painel demonstrativo.

O projeto usa apenas HTML, CSS e JavaScript puros. Não requer npm, React, TypeScript, framework ou etapa de build. Os nomes das pastas (`Assets`, `CSS` e `JS`) e os caminhos referenciados nas páginas preservam as maiúsculas/minúsculas para funcionar também em servidores sensíveis a caixa.

## Páginas e dados

- `index.html` — apresentação da proposta e prévia ilustrativa do painel.
- `login.html` — acesso demonstrativo; qualquer e-mail válido e senha não vazia abrem a demonstração. Nenhuma credencial é armazenada ou enviada.
- `dashboard.html` — visão geral, Sistemas, Histórico, Alertas, Equipamentos e Configurações.
- `JS/common.js` — ícones compartilhados e cursor complementar para mouse.
- `JS/demo-data.js` — fonte central de instalações, métricas, históricos e alertas fictícios.
- `JS/dashboard.js` — navegação, filtros e interações do painel.
- `JS/landing.js` e `JS/curve-gallery.js` — interações da landing e galeria curva.
- `CSS/base.css`, `CSS/landing.css`, `CSS/dashboard.css`, `CSS/overrides.css` e `CSS/refine.css` — estilos e responsividade.
- `Assets/img/logo/` — arquivos da identidade visual Nexo Solar.
- `Assets/img/` — fotografias locais usadas na landing.

### Curadoria de imagens

A galeria da landing usa `07-paineis-encosta-rural.png`, `18-colinas-por-do-sol-rural.png`, `20-morro-neblina-rural.png` e `turbinas-por-do-sol.jpg`. `colinas-amanhecer.jpg` e `arvore-amanhecer.jpg` continuam nas seções editoriais. São imagens ilustrativas; não documentam instalações da Nexo Solar ou da Solarneo. As demais referências foram preservadas na pasta e não são carregadas pelo site.

## Animações e acessibilidade

- A escultura líquida do hero é um SVG original de formas botânicas e linhas de fluxo conceituais. O traçado tem movimento sutil e reage discretamente à proximidade do mouse; a ilustração continua visível sem JavaScript, fica estática em telas pequenas e com `prefers-reduced-motion`, e não usa Canvas nem WebGL.
- Um cursor complementar com ponto e anel aparece apenas com mouse/ponteiro preciso e movimento permitido. Em toque, navegação por teclado, campos de texto, movimento reduzido ou falha de JavaScript, o cursor nativo segue disponível; o cursor visual nunca intercepta cliques ou seleção.
- A galeria Tilted Grid existente cria a curva das imagens em CSS 3D. Uma fotografia local permanece como fallback durante o carregamento e em caso de falha; em telas pequenas e com movimento reduzido, a galeria fica estática.
- As linhas animadas do fluxo são conceituais: representam etapas futuras, não equipamentos, API ou banco conectados. Em telas pequenas o diagrama muda para uma lista.
- A conversa sobreposta à prévia é apenas uma ilustração editorial. Não existe assistente, IA ou análise de dados.
- O foco por teclado é visível; menus e detalhes de alertas mantêm a navegação por teclado. Efeitos e rolagem suave são reduzidos quando solicitado pelo sistema.

As fotografias estão no próprio projeto. As fontes Fraunces, Manrope e DM Mono ainda são carregadas do Google Fonts quando há internet; famílias de sistema são usadas como fallback.

## Limitações importantes

Este é somente um protótipo de front-end. Instalações, fabricantes, equipamentos, leituras, históricos e alertas são fictícios. Atualizar, filtrar ou alterar o estado de um alerta só modifica a sessão atual do navegador. Esta versão não contém cadastro nem uma área de tarefas; o acesso se limita ao fluxo demonstrativo em `login.html`.

Não há backend, banco de dados, API operacional, telemetria real, comunicação física com inversores ou baterias, autenticação de produção, diagnóstico ou compatibilidade de fabricante validada. Integrações futuras dependem de decisão do grupo, documentação dos equipamentos e testes técnicos específicos.
