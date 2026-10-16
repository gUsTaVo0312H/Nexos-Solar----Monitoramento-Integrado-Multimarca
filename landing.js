document.addEventListener('DOMContentLoaded', () => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nav = $('#main-nav'), menuBtn = $('#menu-toggle'), topbar = $('.topbar');
  $('#current-year').textContent = new Date().getFullYear();
  const setMenu = open => { if (!nav || !menuBtn) return; nav.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', String(open)); menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); menuBtn.innerHTML = window.Solarneo.icon(open ? 'close' : 'menu'); };
  menuBtn?.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  const onScroll = () => topbar?.classList.toggle('scrolled', window.scrollY > 40);
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});
  const reveal = $$('[data-reveal]');
  if (reduce || !('IntersectionObserver' in window)) reveal.forEach(el => el.classList.add('in'));
  else { const io = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); } }), {threshold:.12,rootMargin:'0px 0px -6% 0px'}); reveal.forEach(el => io.observe(el)); }
  $$('[data-unify]').forEach(btn => btn.addEventListener('click', () => {
    const unified = btn.dataset.unify === 'true';
    $('#unify-stage').classList.toggle('is-unified', unified);
    $$('[data-unify]').forEach(b => { const active = b === btn; b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active)); });
    $('#unify-caption').innerHTML = `${unified ? 'Os mesmos dados de demonstração, reunidos em uma única visão.' : 'Cada informação costuma ficar em uma interface, aplicativo ou registro diferente.'}<span>Ilustração conceitual: a integração depende das interfaces disponibilizadas por cada fabricante.</span>`;
  }));
  const previewButtons = $$('[data-preview]');
  const demoConfig = {
    soc:{title:'Potência das cargas',soc:'78',state:'Faixa normal',power:'430 W',pv:'1.100 W',path:'M0 137 20 125 40 129 60 91 80 110 100 62 120 80 140 39 160 54 180 24 200 50 220 35 240 62 260 43 280 58 300 32'},
    power:{title:'Consumo de energia',soc:'64',state:'Consumo simulado',power:'430 W',pv:'1.100 W',path:'M0 103 20 94 40 111 60 70 80 82 100 62 120 76 140 46 160 58 180 38 200 66 220 52 240 79 260 57 280 71 300 48'},
    pv:{title:'Geração fotovoltaica',soc:'82',state:'Geração simulada',power:'430 W',pv:'1.100 W',path:'M0 149 20 144 40 142 60 126 80 105 100 76 120 42 140 24 160 18 180 20 200 27 220 44 240 61 260 88 280 115 300 143'}
  };
  previewButtons.forEach(btn => btn.addEventListener('click', () => {
    const key = btn.dataset.preview, d = demoConfig[key]; if (!d) return;
    previewButtons.forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', String(b === btn)); });
    $('#preview-chart-title').textContent = d.title; $('#preview-soc').innerHTML = `${d.soc}<span>%</span>`; $('#preview-state').textContent = d.state; $('#preview-power').textContent = d.power; $('#preview-pv').textContent = d.pv;
    const svg = $('.demo-chart svg'); const oldArea = $('.preview-chart-area', svg); const oldLine = $('.preview-chart-line', svg);
    const path = `${d.path} L300 160 L0 160Z`; oldArea.setAttribute('d',path); oldLine.setAttribute('d',d.path);
  }));
  $$('img').forEach(img => img.addEventListener('error', () => { img.style.display='none'; img.parentElement?.classList.add('image-unavailable'); }, {once:true}));
});
