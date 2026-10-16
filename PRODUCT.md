# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Equipes técnicas que acompanham sistemas fotovoltaicos off-grid distribuídos em diferentes instalações. No contexto futuro, precisam consultar as informações disponíveis dos equipamentos e identificar situações que mereçam investigação técnica.

## Product Purpose

Nexo Solar é a proposta de uma plataforma para centralizar dados disponíveis de inversores e baterias de sistemas fotovoltaicos off-grid, facilitando o acompanhamento de estados, históricos e alertas. O sucesso futuro depende de apresentar informações úteis e coerentes sem tratar ausência ou atraso de dados como diagnóstico de falha física.

## Positioning

A proposta é oferecer uma visão comum para informações que podem estar dispersas entre equipamentos e fabricantes. A interoperabilidade é um objetivo a validar por fabricante, modelo, interface e documentação; não é uma capacidade comprovada do protótipo nem uma promessa de compatibilidade universal.

## Operating Context

O projeto é um protótipo acadêmico do SENAI São João del-Rei, em parceria com a Solarneo Soluções Elétricas. O cenário que motiva a proposta é o acompanhamento de instalações off-grid com inversores e baterias de fabricantes diferentes. As decisões técnicas sobre equipamentos e integração cabem ao grupo e dependem de avaliação específica.

## Capabilities and Constraints

- O protótipo de front-end apresenta uma landing page, acesso demonstrativo e painel com visão geral, sistemas, histórico, alertas, equipamentos e configurações.
- Instalações, fabricantes, leituras, históricos, equipamentos, login, alertas e notificações são fictícios ou simulados. Alterações demonstrativas valem apenas na sessão do navegador.
- Não há backend, banco de dados, API operacional, autenticação de produção, telemetria, comunicação física com equipamentos ou compatibilidade validada.
- Preservar a estrutura, os caminhos e as funcionalidades úteis existentes. A implementação atual usa HTML, CSS e JavaScript puros; não introduzir frameworks ou processo de build sem decisão explícita.
- Uma solução futura deve considerar segurança elétrica, limites e documentação dos fabricantes, preservação de garantia, baixo consumo e o limite de custo informado de até R$ 1.500,00 por sistema instalado. A viabilidade desse limite não foi validada.
- Permanecem em aberto para decisão do usuário/grupo: hardware, protocolos, arquitetura de integração, backend, banco de dados e validação de compatibilidade.

## Brand Commitments

O nome do produto é Nexo Solar. A plataforma deve poder atender diferentes empresas e não deve ser apresentada como exclusiva da Solarneo, que é parceira institucional do projeto.

Direção visual vinculante informada: estética clara, sofisticada, natural e tecnológica; verdes e marfim; tipografia expressiva; composição editorial; espaço negativo; animações intencionais. Referências para inspiração, sem copiar: https://blink.capital/, https://kinoria.studio/, https://www.eugeniagrab.com/en e https://bright-avenue.jp/. Preservar as referências visuais anexadas quando disponíveis.

## Evidence on Hand

- Dados e interações demonstrativos organizados em `JS/demo-data.js`; não constituem telemetria, medições reais ou prova técnica.
- Identidade visual local em `Assets/img/logo/Nexo-Solar-Logo.svg`, `Assets/img/logo/Nexo-Solar-Simbolo.svg` e `Assets/img/logo/Nexo-Solar-Logo-preview-fundo-claro.png`.
- Não há evidência de integração operacional, diagnóstico real, testes de compatibilidade entre fabricantes ou autenticação de produção. Não inventar clientes, resultados de campo ou validações.

## Product Principles

1. Reunir informações disponíveis sem presumir compatibilidade entre equipamentos.
2. Diferenciar dados atuais, atrasados, indisponíveis e simulados; ausência de dados não é diagnóstico físico.
3. Respeitar segurança elétrica, limites do fabricante, garantia e custo de implantação.
4. Manter a ferramenta independente de uma única empresa e explicitar o que é protótipo ou integração futura.

## Accessibility & Inclusion

Manter navegação por teclado, foco visível, contraste legível e suporte a `prefers-reduced-motion`. Interfaces devem continuar responsivas em celular e tablet, e animações devem ter alternativas estáticas.
