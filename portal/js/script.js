if (document.body) {
  document.body.classList.add('js-enabled');
} else {
  document.addEventListener('DOMContentLoaded', () => document.body.classList.add('js-enabled'));
}

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
  if (!mainNav) return;
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
// FOOTER YEAR (Safely updated)
// ==============================
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ==============================
// SCROLL REVEAL ANIMATION
// ==============================
function initRevealOnScroll() {
  try {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px"
      });
      revealElements.forEach(el => revealObserver.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('is-visible'));
    }
  } catch (err) {
    console.error("Error in revealOnScroll:", err);
  }
}

// ==============================
// NOTICIAS FEED & MODAL
// ==============================
function initNoticias() {
  try {
    const feed = document.getElementById("news-feed");
    if (!feed) return;

    if (feed.children.length > 0) return;

    const isPortalDir = window.location.pathname.includes('/portal/') || window.location.pathname.endsWith('/portal');
    const imgBase = isPortalDir ? 'imagenes/' : 'portal/imagenes/';

    const noticias = [
      { titulo: "2do proceso de titulación 2026", fecha: "08/07/2026", contenido: "Inscripciones abiertas para el segundo proceso de titulación 2026.", imagen: [imgBase + "noticias/aviso-2026-1.jpeg", imgBase + "noticias/aviso-2026-1.jpeg"] },
      { titulo: "Sensible fallecimiento", fecha: "07/05/2026", contenido: "La dirección, docentes y estudiantes expresamos nuestro profundo pesar.", imagen: [imgBase + "noticias/fallesimiento_07_05_2026.jpeg", imgBase + "noticias/fallesimiento_07_05_2026.jpeg"] },
      { titulo: "Día del Trabajador", fecha: "02/05/2026", contenido: "Feliz día del Trabajador", imagen: [imgBase + "noticias/dia_del_trabajador.jpeg", imgBase + "noticias/dia_del_trabajador.jpeg"] },
      { titulo: "Invitación a la Ceremonia de Titulación 2026-1", fecha: "23/04/2026", contenido: "Te invitamos a la ceremonia de titulación.", imagen: [imgBase + "noticias/graduacion2026.jpg", imgBase + "noticias/integrantes2026.jpg"] },
      { titulo: "Examen de Admisión", fecha: "03/04/2026", contenido: "Prepárate para ingresar!", imagen: [imgBase + "admision/primer_admision/1.jpeg"] },
      { titulo: "Inicio del Proceso de Admisión 2026-1", fecha: "12/08/2025", contenido: "Ya están abiertas las inscripciones.", imagen: [imgBase + "noticias/inicio_clases20252.jpg"] },
    ];

    const modal = document.getElementById("news-modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDate = document.getElementById("modal-date");
    const modalText = document.getElementById("modal-text");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentImages = [];
    let currentIndex = 0;

    noticias.forEach(function(noticia, index) {
      const card = document.createElement("div");
      card.className = "news-card";
      card.style.setProperty("--i", index);
      card.innerHTML =
        '<img src="' + noticia.imagen[0] + '" alt="' + noticia.titulo + '" class="news-img" loading="lazy">' +
        '<div class="news-content">' +
          '<h3>' + noticia.titulo + '</h3>' +
          '<span class="news-date">' + noticia.fecha + '</span>' +
          '<p>' + noticia.contenido + '</p>' +
        '</div>';

      card.addEventListener("click", function() {
        if (!modal) return;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
        currentImages = noticia.imagen;
        currentIndex = 0;
        showImage(currentIndex);
        if (modalTitle) modalTitle.textContent = noticia.titulo;
        if (modalDate) modalDate.textContent = noticia.fecha;
        if (modalText) modalText.textContent = noticia.contenido;
      });

      feed.appendChild(card);
    });

    function showImage(index) {
      if (modalImg && currentImages && currentImages[index]) {
        modalImg.src = currentImages[index];
      }
    }

    if (prevBtn) prevBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      if (!currentImages.length) return;
      currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
      showImage(currentIndex);
    });

    if (nextBtn) nextBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      if (!currentImages.length) return;
      currentIndex = (currentIndex + 1) % currentImages.length;
      showImage(currentIndex);
    });

    if (closeBtn) closeBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      if (modal) modal.style.display = "none";
      document.body.style.overflow = "";
    });

    window.addEventListener("click", function(e) {
      if (e.target === modal) {
        if (modal) modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });

    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  } catch (err) {
    console.error("Error in initNoticias:", err);
  }
}

// ==============================
// CONTACTO — CARDS, FORM, TOAST, WHATSAPP
// ==============================
function initContacto() {
  // ── Contact cards click ──
  document.querySelectorAll('.contact-card[data-action]').forEach(function(card) {
    card.addEventListener('click', function(e) {
      var action = card.getAttribute('data-action');
      var value = card.getAttribute('data-value');
      if (!action) return;
      if (action === 'phone') {
        window.location.href = 'tel:' + value;
      } else if (action === 'email') {
        window.location.href = 'mailto:' + value;
      } else if (action === 'address') {
        window.open(value, '_blank', 'noopener,noreferrer');
      }
    });
    // mouse tracker for radial shine
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) * 100;
      var y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    });
  });

  // ── Hours badge ──
  var badge = document.querySelector('.hours-badge');
  if (badge) {
    var now = new Date();
    var day = now.getDay();
    var hour = now.getHours();
    var minute = now.getMinutes();
    // Lunes(1)–Viernes(5), 13:00–20:00
    var isOpen = day >= 1 && day <= 5 && (hour > 13 || (hour === 13 && minute >= 0)) && hour < 20;
    badge.textContent = isOpen ? 'Atendiendo hoy' : 'Cerrado';
    badge.className = 'hours-badge ' + (isOpen ? 'is-open' : 'is-closed');
  }

  // ── Toast modal ──
  var toast = document.getElementById('toast-modal');
  var toastClose = document.getElementById('toast-close');

  function openToast() {
    if (!toast) return;
    toast.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeToast() {
    if (!toast) return;
    toast.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (toastClose) toastClose.addEventListener('click', closeToast);
  if (toast) {
    toast.addEventListener('click', function(e) {
      if (e.target === toast) closeToast();
    });
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && toast && toast.classList.contains('is-open')) closeToast();
  });

  // ── Form submission ──
  var form = document.getElementById('contact-form');
  var submitBtn = document.getElementById('contact-submit');
  var whatsappBtn = document.getElementById('contact-whatsapp-btn');

  function getFormData() {
    var nombre = (document.getElementById('nombre')?.value || '').trim();
    var correo = (document.getElementById('correo')?.value || '').trim();
    var telefono = (document.getElementById('telefono')?.value || '').trim();
    var programa = (document.getElementById('programa')?.value || '').trim();
    var mensaje = (document.getElementById('mensaje')?.value || '').trim();
    return { nombre: nombre, correo: correo, telefono: telefono, programa: programa, mensaje: mensaje };
  }

  function buildWhatsAppUrl(data) {
    var text = 'Hola, soy ' + data.nombre + '.';
    if (data.programa) text += '\nPrograma de interés: ' + data.programa + '.';
    if (data.correo) text += '\nCorreo: ' + data.correo;
    if (data.telefono) text += '\nTeléfono: ' + data.telefono;
    if (data.mensaje) text += '\nMensaje: ' + data.mensaje;
    return 'https://wa.me/51919490297?text=' + encodeURIComponent(text);
  }

  function sendWhatsApp(data) {
    window.open(buildWhatsAppUrl(data), '_blank', 'noopener,noreferrer');
  }

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var data = getFormData();
      if (!data.nombre || !data.correo || !data.telefono) return;
      if (submitBtn) submitBtn.classList.add('is-loading');
      setTimeout(function() {
        if (submitBtn) submitBtn.classList.remove('is-loading');
        sendWhatsApp(data);
        openToast();
        form.reset();
      }, 800);
    });
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function() {
      var data = getFormData();
      if (!data.nombre || !data.correo || !data.telefono) {
        var firstInvalid = document.querySelector('#nombre:invalid, #correo:invalid, #telefono:invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      sendWhatsApp(data);
      openToast();
      form.reset();
    });
  }

  // Expose closeToast globally for inline onclick (fallback)
  window.closeToast = closeToast;
}

function runInit() {
  initRevealOnScroll();
  initNoticias();
  initContacto();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runInit);
} else {
  runInit();
}
