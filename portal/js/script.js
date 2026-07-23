// ==============================
// HEADER SCROLL EFFECT
// ==============================
const header = document.querySelector('.header');

function updateHeader() {
  header?.classList.toggle('scrolled', window.scrollY > 20);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// Fallback hero detection via IntersectionObserver
const hero = document.querySelector('.hero');
if (hero && 'IntersectionObserver' in window) {
  const obs = new IntersectionObserver(([entry]) => {
    header?.classList.toggle('scrolled', !entry.isIntersecting);
  }, { threshold: 0 });
  obs.observe(hero);
}

// ==============================
// MENU RESPONSIVE
// ==============================
const menuToggle = document.querySelector('.hamburger');
const mainNav = document.querySelector('#main-nav');

menuToggle?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('is-open');
  menuToggle.classList.toggle('is-active', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('nav-open', open);
});

// Cerrar menú al hacer clic fuera o en el overlay del nav
document.addEventListener('click', (e) => {
  if (mainNav?.classList.contains('is-open')) {
    if (window.innerWidth <= 900 && e.target.closest('#main-nav') && !e.target.closest('.nav__item')) {
      mainNav.classList.remove('is-open');
      menuToggle?.classList.remove('is-active');
      menuToggle?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    } else if (!e.target.closest('.header__inner')) {
      mainNav.classList.remove('is-open');
      menuToggle?.classList.remove('is-active');
      menuToggle?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }
  }
});

// Cerrar menú al redimensionar a desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 900 && mainNav?.classList.contains('is-open')) {
    mainNav.classList.remove('is-open');
    menuToggle?.classList.remove('is-active');
    menuToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }
});

// Submenu accordion en móvil
document.querySelectorAll('.nav__item > .nav__link').forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 900 && link.nextElementSibling?.classList.contains('submenu')) {
      e.preventDefault();
      link.closest('.nav__item').classList.toggle('is-open');
    }
  });
});


// ==============================
// HERO PARALLAX (static)
// ==============================
document.querySelectorAll('.hero').forEach(hero => {
  window.addEventListener('scroll', () => {
    const rect = hero.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const offset = (window.scrollY - hero.offsetTop + window.innerHeight) * 0.15;
      hero.style.backgroundPosition = `center ${50 + offset * 0.02}%`;
    }
  }, { passive: true });
});

// ==============================
// PROGRAMAS (Tabs)
// ==============================
const programButtons = document.querySelectorAll(".programa-btn");
const programDetails = document.querySelectorAll(".programa-detail");

programButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const program = btn.dataset.program;

    programButtons.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    programDetails.forEach((detail) => {
      detail.classList.toggle("is-active", detail.dataset.program === program);
    });
  });
});

// ==============================
// BOTÓN VOLVER ARRIBA
// ==============================
// ==============================
// FOOTER YEAR
// ==============================
document.getElementById("year").textContent = new Date().getFullYear();
