'use strict';
(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const hero = document.querySelector('#hero-video');
  const playToggle = document.querySelector('#hero-play');
  const setPlayState = () => {
    playToggle.setAttribute('aria-label', hero.paused ? 'Reproduzir vídeo do hero' : 'Pausar vídeo do hero');
    playToggle.firstElementChild.textContent = hero.paused ? '▶' : 'Ⅱ';
  };
  hero.addEventListener('play', setPlayState);
  hero.addEventListener('pause', setPlayState);
  playToggle.addEventListener('click', () => { if (hero.paused) hero.play().catch(setPlayState); else hero.pause(); });
  const applyMotionPreference = () => {
    if (reducedMotion.matches) { hero.autoplay = false; hero.pause(); }
    else { hero.autoplay = true; hero.play().catch(setPlayState); }
    setPlayState();
  };
  applyMotionPreference();
  reducedMotion.addEventListener('change', applyMotionPreference);
  hero.addEventListener('error', () => {
    playToggle.setAttribute('aria-label', 'Tentar reproduzir vídeo do hero');
    playToggle.firstElementChild.textContent = '▶';
  });
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  function closeMenu(restoreFocus = false) {
    menu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.querySelector('.menu-label').textContent = 'Menu';
    document.body.classList.remove('menu-open');
    if (restoreFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => {
    const opening = menu.hidden;
    menu.hidden = !opening;
    menuButton.setAttribute('aria-expanded', String(opening));
    menuButton.querySelector('.menu-label').textContent = opening ? 'Fechar' : 'Menu';
    document.body.classList.toggle('menu-open', opening);
    if (opening) menu.querySelector('a').focus();
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) closeMenu(true);
    if (event.key === 'Tab' && !menu.hidden) {
      const links = [...menu.querySelectorAll('a')];
      if (!event.shiftKey && document.activeElement === links.at(-1)) { event.preventDefault(); menuButton.focus(); }
      if (event.shiftKey && document.activeElement === menuButton) { event.preventDefault(); links.at(-1).focus(); }
    }
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    document.documentElement.classList.add('motion-ready');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
    }, { threshold: .08 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
  const dialog = document.querySelector('#project-dialog');
  document.querySelectorAll('.project-open').forEach(button => button.addEventListener('click', () => {
    const photograph = button.querySelector('img').cloneNode();
    photograph.loading = 'eager';
    dialog.querySelector('.lightbox-image').replaceChildren(photograph);
    dialog.querySelector('.lightbox-caption').textContent = button.dataset.caption;
    document.body.classList.add('modal-open');
    dialog.showModal();
  }));
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); dialog.querySelector('.lightbox-image').replaceChildren(); });
})();
