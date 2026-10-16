(function () {
  const paths = {
    sun:'<circle cx="12" cy="12" r="3.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    battery:'<rect x="3" y="6" width="17" height="12" rx="2"/><path d="M20 10h2v4h-2M7 10v4M11 10v4M15 10v4"/>',
    bolt:'<path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z"/>',
    activity:'<path d="M3 12h4l2-7 4 14 2-7h6"/>',
    history:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    alert:'<path d="M12 3 2.8 19h18.4L12 3Z"/><path d="M12 9v4M12 16h.01"/>',
    grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    settings:'<path d="M4 6h8.8M17.2 6H20M4 12h2.8M11.2 12H20M4 18h10.8M19.2 18H20"/><circle cx="15" cy="6" r="2.2"/><circle cx="9" cy="12" r="2.2"/><circle cx="17" cy="18" r="2.2"/>',
    cpu:'<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M18 9h4M2 15h4M18 15h4"/>',
    menu:'<path d="M4 7h16M4 12h16M4 17h16"/>', close:'<path d="m6 6 12 12M18 6 6 18"/>',
    arrow:'<path d="M5 12h14M14 7l5 5-5 5"/>', check:'<path d="m5 12 4 4L19 6"/>',
    eye:'<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
    eyeOff:'<path d="M3 3l18 18M10.6 6.1A10 10 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-3.2 3.9M6.6 7.6C3.8 9.4 2 12 2 12s3.5 6 10 6c1.5 0 2.8-.3 4-.8"/><path d="M9.9 9.9a2.5 2.5 0 0 0 3.2 3.2"/>',
    logout:'<path d="M10 4H4v16h6M14 8l4 4-4 4M8 12h10"/>',
    radio:'<circle cx="12" cy="12" r="2"/><path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.5 5.5a9 9 0 0 0 0 13M18.5 5.5a9 9 0 0 1 0 13"/>',
    shield:'<path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-4.7"/>',
    refresh:'<path d="M20 11a8 8 0 0 0-14.5-3.5L4 9M4 4v5h5M4 13a8 8 0 0 0 14.5 3.5L20 15M20 20v-5h-5"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', slash:'<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>',
    search:'<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
    home:'<path d="M3 11 12 3l9 8M5 10v10h14V10M10 20v-6h4v6"/>',
    chevron:'<path d="m6 9 6 6 6-6"/>', lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    layers:'<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>'
  };
  function renderIcons(root) {
    (root || document).querySelectorAll('[data-icon]').forEach(el => {
      if (el.dataset.iconRendered === 'true') return;
      const name = el.getAttribute('data-icon') || 'info';
      const size = Number(el.getAttribute('data-size') || 20);
      el.innerHTML = `<svg class="icon-inline" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.info}</svg>`;
      el.dataset.iconRendered = 'true';
    });
  }
  window.Solarneo = { renderIcons, icon(name, size = 20) { return `<svg class="icon-inline" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.info}</svg>`; } };
  function initializeCursor() {
    const finePointer = window.matchMedia('(pointer:fine) and (hover:hover)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reducedMotion.matches || !document.body) return;

    const cursor = document.createElement('div');
    cursor.className = 'nexo-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.innerHTML = '<span class="nexo-cursor__ring"></span><span class="nexo-cursor__dot"></span>';
    document.body.append(cursor);

    const root = document.documentElement;
    const ring = cursor.querySelector('.nexo-cursor__ring');
    const dot = cursor.querySelector('.nexo-cursor__dot');
    const interactive = 'a[href], button:not(:disabled), select, summary, [role="button"], [data-cursor="interactive"]';
    let pointerX = 0, pointerY = 0, ringX = 0, ringY = 0, frame = 0, positioned = false;

    function stopTracking() {
      root.classList.remove('has-custom-cursor');
      cursor.classList.remove('is-visible', 'is-interactive', 'is-hero', 'is-pressed');
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      positioned = false;
    }

    function moveRing() {
      frame = 0;
      ringX += (pointerX - ringX) * 0.19;
      ringY += (pointerY - ringY) * 0.19;
      ring.style.transform = `translate3d(${ringX.toFixed(2)}px,${ringY.toFixed(2)}px,0) translate(-50%,-50%)`;
      if (Math.abs(pointerX - ringX) > 0.15 || Math.abs(pointerY - ringY) > 0.15) {
        frame = window.requestAnimationFrame(moveRing);
      }
    }

    document.addEventListener('pointermove', event => {
      if (event.pointerType !== 'mouse' || reducedMotion.matches) return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!positioned) {
        ringX = pointerX;
        ringY = pointerY;
        ring.style.transform = `translate3d(${ringX}px,${ringY}px,0) translate(-50%,-50%)`;
        dot.style.transform = `translate3d(${pointerX}px,${pointerY}px,0) translate(-50%,-50%)`;
        positioned = true;
      }
      root.classList.add('has-custom-cursor');
      cursor.classList.add('is-visible');
      const target = event.target instanceof Element ? event.target : null;
      cursor.classList.toggle('is-interactive', Boolean(target?.closest(interactive)));
      cursor.classList.toggle('is-hero', Boolean(target?.closest('.hero-visual, .login-diagram')));
      cursor.classList.toggle('is-text', Boolean(target?.closest('input:not([type="button"]):not([type="submit"]):not([type="reset"]), textarea, [contenteditable="true"]')));
      if (!frame) frame = window.requestAnimationFrame(moveRing);
    }, { passive: true });

    document.addEventListener('pointerdown', event => {
      if (event.pointerType === 'mouse' && event.button === 0) cursor.classList.add('is-pressed');
    });
    document.addEventListener('pointerup', () => cursor.classList.remove('is-pressed'));
    document.addEventListener('pointerout', event => {
      if (event.pointerType === 'mouse' && event.relatedTarget === null) stopTracking();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Tab') stopTracking();
    });
    window.addEventListener('blur', stopTracking);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopTracking();
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    renderIcons(document);
    initializeCursor();
  });
})();
