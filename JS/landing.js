document.addEventListener('DOMContentLoaded', () => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nav = $('#main-nav'), menuBtn = $('#menu-toggle'), topbar = $('.topbar');
  const finePointer = window.matchMedia('(pointer:fine) and (hover:hover)').matches;
  if (!reduce && finePointer) {
    const liquidSurfaces = $$('[data-liquid-surface]');
    liquidSurfaces.forEach(surface => {
      const sculpture = $('.liquid-sculpture', surface);
      if (!sculpture) return;
      let frame = 0, bounds = surface.getBoundingClientRect(), pointerX = 0, pointerY = 0, hasPointer = false;
      const heroSurface = surface.closest('.hero-visual');
      const setDepth = (x, y) => {
        surface.style.setProperty('--mass-back-x', `${(-x * 2.2).toFixed(1)}px`);
        surface.style.setProperty('--mass-back-y', `${(-y * 1.8).toFixed(1)}px`);
        surface.style.setProperty('--mass-front-x', `${(x * 4.5).toFixed(1)}px`);
        surface.style.setProperty('--mass-front-y', `${(y * 3.2).toFixed(1)}px`);
        surface.style.setProperty('--current-x', `${(-x * 1.4).toFixed(1)}px`);
        surface.style.setProperty('--current-y', `${(-y * 1.2).toFixed(1)}px`);
        surface.style.setProperty('--seed-x', `${(x * 6).toFixed(1)}px`);
        surface.style.setProperty('--seed-y', `${(y * 4).toFixed(1)}px`);
        const nearSeed = Math.hypot(x - .287, y + .059) < .19;
        heroSurface?.classList.toggle('is-near-seed', nearSeed);
      };
      const resetDepth = () => {
        for (const property of ['--mass-back-x','--mass-back-y','--mass-front-x','--mass-front-y','--current-x','--current-y','--seed-x','--seed-y']) {
          surface.style.setProperty(property, '0px');
        }
        heroSurface?.classList.remove('is-near-seed');
      };
      surface.addEventListener('pointermove', event => {
        if (event.pointerType !== 'mouse') return;
        pointerX = event.clientX;
        pointerY = event.clientY;
        hasPointer = true;
        if (frame) return;
        frame = window.requestAnimationFrame(() => {
          frame = 0;
          if (!hasPointer || !bounds.width || !bounds.height) return;
          const x = (pointerX - bounds.left) / bounds.width - .5;
          const y = (pointerY - bounds.top) / bounds.height - .5;
          sculpture.style.setProperty('--liquid-x', `${(x * (heroSurface ? 8 : 12)).toFixed(1)}px`);
          sculpture.style.setProperty('--liquid-y', `${(y * (heroSurface ? 6 : 10)).toFixed(1)}px`);
          if (heroSurface) setDepth(x, y);
        });
      });
      surface.addEventListener('pointerenter', event => {
        if (event.pointerType === 'mouse') bounds = surface.getBoundingClientRect();
      });
      surface.addEventListener('pointerleave', () => {
        if (frame) window.cancelAnimationFrame(frame);
        frame = 0; hasPointer = false;
        sculpture.style.setProperty('--liquid-x', '0px');
        sculpture.style.setProperty('--liquid-y', '0px');
        resetDepth();
      });
    });

    const hero = $('.hero');
    const magneticButtons = $$('.hero-actions .btn-primary', hero || document);
    magneticButtons.forEach(button => {
      let bounds = button.getBoundingClientRect(), frame = 0, pointerX = 0, pointerY = 0, hasPointer = false;
      button.addEventListener('pointerenter', event => {
        if (event.pointerType === 'mouse') bounds = button.getBoundingClientRect();
      });
      button.addEventListener('pointermove', event => {
        if (event.pointerType !== 'mouse') return;
        pointerX = event.clientX;
        pointerY = event.clientY;
        hasPointer = true;
        if (frame) return;
        frame = window.requestAnimationFrame(() => {
          frame = 0;
          if (!hasPointer || !bounds.width || !bounds.height) return;
          const x = (pointerX - bounds.left) / bounds.width - .5;
          const y = (pointerY - bounds.top) / bounds.height - .5;
          button.style.setProperty('--magnetic-x', `${(x * 3).toFixed(1)}px`);
          button.style.setProperty('--magnetic-y', `${(y * 2).toFixed(1)}px`);
        });
      });
      button.addEventListener('pointerleave', () => {
        if (frame) window.cancelAnimationFrame(frame);
        frame = 0; hasPointer = false;
        button.style.setProperty('--magnetic-x', '0px');
        button.style.setProperty('--magnetic-y', '0px');
      });
    });

    if (hero && 'IntersectionObserver' in window) {
      let heroVisible = true;
      const motionObserver = new IntersectionObserver(([entry]) => {
        heroVisible = entry.isIntersecting;
        hero.classList.toggle('motion-paused', !heroVisible || document.hidden);
      }, {threshold:.05});
      motionObserver.observe(hero);
      document.addEventListener('visibilitychange', () => {
        hero.classList.toggle('motion-paused', !heroVisible || document.hidden);
      });
    }
  }
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
  const demoData = window.SolarneoData;
  const demoInstall = demoData?.installs[0];
  const demoConfig = {
    soc:{title:'Estado de carga da bateria',metric:'SOC'},
    power:{title:'Potência das cargas',metric:'Potência'},
    pv:{title:'Geração fotovoltaica',metric:'Geração FV'}
  };
  function setPreview(key) {
    const config=demoConfig[key]; if(!config||!demoInstall)return;
    previewButtons.forEach(button=>{const active=button.dataset.preview===key;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
    const value=number=>number===null?'Não disponível':demoData.fmt(number);
    $('#preview-chart-title').textContent=config.title;
    $('#preview-soc').innerHTML=demoInstall.soc===null?'Não disponível':`${value(demoInstall.soc)}<span>%</span>`;
    $('#preview-state').textContent=demoInstall.soc===null?'Não disponível':demoInstall.soc<30?'Abaixo da referência':'Faixa normal';
    $('#preview-power').textContent=demoInstall.power===null?'Não disponível':`${value(demoInstall.power)} W`;
    $('#preview-pv').textContent=demoInstall.pv===null?'Não disponível':`${value(demoInstall.pv)} W`;
    const series=demoData.seriesFor(demoInstall,config.metric,16);
    const svg=$('.demo-chart svg'),area=$('.preview-chart-area',svg),line=$('.preview-chart-line',svg);
    if(!series.length){area.setAttribute('d','');line.setAttribute('d','');return;}
    const min=Math.min(...series),range=Math.max(...series)-min||1;
    const path=series.map((point,index)=>`${index?'L':'M'}${(index/(series.length-1)*300).toFixed(1)} ${(150-(point-min)/range*120).toFixed(1)}`).join(' ');
    area.setAttribute('d',`${path} L300 160 L0 160Z`);line.setAttribute('d',path);
  }
  previewButtons.forEach(button=>button.addEventListener('click',()=>setPreview(button.dataset.preview)));
  setPreview('soc');
  $$('img').forEach(img => img.addEventListener('error', () => { img.style.display='none'; img.parentElement?.classList.add('image-unavailable'); }, {once:true}));
});
