// ==============================
// HEADER SCROLL EFFECT
// ==============================
const header = document.querySelector('.header');

function updateHeader() {
  const isScrolled = window.scrollY > 20;
  if (header) {
    if (isScrolled) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('load', updateHeader);

// ==============================
// MENU RESPONSIVE
// ==============================
const menuToggle = document.querySelector('.hamburger');
const mainNav = document.querySelector('#main-nav');

function closeNav() {
  mainNav?.classList.remove('is-open');
  menuToggle?.classList.remove('is-active');
  menuToggle?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
}

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
      closeNav();
    } else if (!e.target.closest('.header__inner')) {
      closeNav();
    }
  }
});

// Cerrar menú al hacer clic en cualquier enlace del nav (mobile)
document.querySelectorAll('#main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) closeNav();
  });
});

// Cerrar menú al redimensionar a desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 900 && mainNav?.classList.contains('is-open')) {
    closeNav();
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

// Forzar updateHeader tras navegación por ancla
window.addEventListener('hashchange', () => {
  updateHeader();
  if (window.innerWidth <= 900) closeNav();
});

// Forzar updateHeader al cargar la página (si hay hash inicial)
window.addEventListener('load', () => {
  setTimeout(updateHeader, 100);
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
