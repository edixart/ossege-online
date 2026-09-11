(() => {
  const year = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = year);

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = toggle.classList.toggle('active');
      links.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
      document.body.classList.toggle('menu-open', open);
    });
    links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      toggle.classList.remove('active'); links.classList.remove('open');
      toggle.setAttribute('aria-expanded','false'); document.body.classList.remove('menu-open');
    }));
  }

  const header = document.querySelector('.site-header');
  if (header && !header.classList.contains('solid')) {
    const syncHeader = () => header.style.background = window.scrollY > 24 ? 'rgba(11,11,12,.78)' : 'transparent';
    window.addEventListener('scroll', syncHeader, {passive:true}); syncHeader();
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
