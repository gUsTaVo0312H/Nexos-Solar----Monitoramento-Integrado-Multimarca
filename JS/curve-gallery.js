/* Galeria curva: adaptação em JS puro do "Tilted Grid Hero" (21st.dev).
   Uma fileira de imagens gira por dentro de um cilindro (CSS 3D). Cada imagem é
   cortada em faixas verticais, cada faixa inclinada alguns graus, para a foto
   parecer curva. Só transform/visibility são animados, então é leve. */
(function () {
  const SLICES = 14, CAMERA = 1.6, MAX_W = 55;
  const deg = r => r * 180 / Math.PI, rd = n => +n.toFixed(4);
  const arc = b => (CAMERA - 1 + Math.cos(b)) / (2 * CAMERA * Math.sin(b));
  let uid = 0;

  function measure(w, h, tile, aspect, gap, bend) {
    const th = Math.min(tile / 100 * h, MAX_W / 100 * w / aspect), radius = w * arc(bend);
    if (!(th > 0) || !(radius > 0)) return { columns: 2, sweep: 0, unit: 0, limit: 0 };
    const unit = deg(th / radius), pitch = (aspect + gap / 100) * unit, limit = deg(bend) + aspect * unit / 2;
    const columns = Math.min(40, Math.max(2, Math.ceil(2 * limit / pitch))), sweep = rd(columns * pitch / 2);
    return { columns, sweep, unit: rd(unit), limit: rd(Math.min(sweep, limit)) };
  }

  function build(host, imgs, o, size) {
    const fallback = host.querySelector('.curve-fallback');
    const { tile, aspect, gap, axis, speed, fade } = o, bend = o.curve * Math.PI / 180;
    const { columns, sweep, unit, limit } = measure(size.w, size.h, tile, aspect, gap, bend);
    const id = 'cg' + (++uid), tileCls = id + 't';
    const u = n => `calc(${rd(n)} * min(${tile}cqh, ${rd(MAX_W / aspect)}cqw))`;
    const r = 100 * arc(bend), radius = rd(r) + 'cqw';
    const turn = d => `translateZ(${radius}) rotateY(${rd(d)}deg) translateZ(-${radius})`;
    const hide = rd((sweep - limit) / (2 * (sweep || 1)) * 100);
    const duration = columns * speed, share = aspect / SLICES;
    const mask = `linear-gradient(90deg,transparent,#000 ${fade}%,#000 ${100 - fade}%,transparent)`;
    let html = `<style>@keyframes ${id}{from{transform:${turn(-sweep)}}to{transform:${turn(sweep)}}` +
      `0%,${hide}%,${100 - hide}%,100%{visibility:hidden}${hide + .001}%,${100 - hide - .001}%{visibility:visible}}` +
      `@media(prefers-reduced-motion:reduce){.${tileCls}{animation-play-state:paused}}</style>` +
      `<div class="cg-band" aria-hidden="true" style="perspective:${rd(r * CAMERA)}cqw;perspective-origin:50% ${axis}%;mask-image:${mask};-webkit-mask-image:${mask}">`;
    for (let t = 0; t < columns; t++) {
      const img = imgs[(columns - 1 - t) % imgs.length];
      html += `<div class="cg-tile ${tileCls}" style="left:calc(50% - ${u(aspect / 2)});top:calc(${axis}% - ${u(.5)});width:${u(aspect)};height:${u(1)};animation:${id} ${duration}s linear ${-t * speed}s infinite">`;
      for (let k = 0; k < SLICES; k++) {
        const last = k === SLICES - 1;
        html += `<div class="cg-slice${k === 0 ? ' first' : ''}${last ? ' last' : ''}" style="left:${u((aspect - share) / 2)};width:${last ? u(share) : `calc(${u(share)} + 1px)`};height:${u(1)};transform:${turn((aspect / 2 - (k + .5) * share) * unit)}"><img src="${img}" alt="" draggable="false" loading="eager" style="left:${u(-k * share)};width:${u(aspect)};height:${u(1)}"></div>`;
      }
      html += '</div>';
    }
    host.innerHTML = html + '</div>';
    if (fallback) host.prepend(fallback);
    host.classList.remove('has-tiles');
    const firstImage = host.querySelector('.cg-band img');
    if (firstImage?.complete && firstImage.naturalWidth > 0) host.classList.add('has-tiles');
    host.dataset.sig = [columns, sweep, unit].join();
  }

  function init(host) {
    const imgs = (host.dataset.images || '').split(',').map(s => s.trim()).filter(Boolean);
    if (!imgs.length || !('ResizeObserver' in window) || window.matchMedia('(max-width:720px), (prefers-reduced-motion:reduce)').matches) return;
    host.addEventListener('load', event => {
      if (event.target.matches('.cg-band img')) host.classList.add('has-tiles');
    }, true);
    const n = (k, d) => host.dataset[k] ? Number(host.dataset[k]) : d;
    const o = { tile: n('tile', 52), aspect: n('aspect', 1.45), gap: n('gap', 6), axis: n('axis', 50), curve: Math.min(85, Math.max(5, n('curve', 68))), speed: n('speed', 5), fade: n('fade', 14) };
    let timer;
    const ro = new ResizeObserver(([e]) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const size = { w: e.contentRect.width, h: e.contentRect.height };
        const m = measure(size.w, size.h, o.tile, o.aspect, o.gap, o.curve * Math.PI / 180);
        if (host.dataset.sig !== [m.columns, m.sweep, m.unit].join()) build(host, imgs, o, size);
        host.classList.add('ready');
      }, 120);
    });
    ro.observe(host);
    const initial = host.getBoundingClientRect();
    if (initial.width > 0 && initial.height > 0) {
      build(host, imgs, o, { w: initial.width, h: initial.height });
      host.classList.add('ready');
    }
  }
  document.addEventListener('DOMContentLoaded', () => document.querySelectorAll('[data-curve-gallery]').forEach(init));
})();
