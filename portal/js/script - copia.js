// Utilidades DOM
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// Header sticky/sombra
const header = $('#site-header');
let lastY = window.scrollY;
const onScroll = () => {
  const y = window.scrollY;
  header.classList.toggle('header--scrolled', y > 4);
  // botón subir
  $('#to-top').classList.toggle('is-visible', y > 300);
  lastY = y;
};
addEventListener('scroll', onScroll, { passive: true });

// Menú móvil
const menuToggle = $('#menu-toggle');
const mainNav = $('#main-nav');
menuToggle?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

// Héroe: slider simple (autoplay + dots)
const slides = $$('#hero-slides .hero__slide');
const dots = $$('.hero__dot');
let idx = 0;
let timer = null;

function showSlide(i) {
  slides.forEach((s, k) => s.classList.toggle('is-active', k === i));
  dots.forEach((d, k) => d.classList.toggle('is-active', k === i));
  idx = i;
}
function nextSlide() {
  showSlide((idx + 1) % slides.length);
}
function startAuto() {
  stopAuto();
  timer = setInterval(nextSlide, 6000);
}
function stopAuto() {
  if (timer) clearInterval(timer);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
    startAuto();
  });
});

startAuto();

// Año dinámico en footer
$('#year').textContent = new Date().getFullYear();

// Volver arriba
$('#to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Formulario de contacto (demo)
function handleContact(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());

  // Validación mínima
  if (!data.nombre || !data.correo || !data.asunto || !data.mensaje) {
    $('#form-status').textContent = 'Por favor completa todos los campos.';
    return false;
  }

  // Aquí podrías hacer fetch() a tu backend
  console.log('Contacto:', data);
  form.reset();
  $('#form-status').textContent = '¡Gracias! Tu mensaje fue enviado (demo).';
  setTimeout(() => ($('#form-status').textContent = ''), 4000);
  return false;
}



// del boton de programas de estudio en index (principal)
document.addEventListener('DOMContentLoaded', () => {
    const programaBtns = document.querySelectorAll('.programa-btn');
    const programaDetails = document.querySelectorAll('.programa-detail');

    programaBtns.forEach(button => {
        button.addEventListener('click', () => {
            // Oculta todos los contenidos de programas y elimina la clase 'is-active'
            programaDetails.forEach(detail => {
                detail.classList.remove('is-active');
            });
            programaBtns.forEach(btn => {
                btn.classList.remove('is-active');
            });

            // Muestra el contenido del programa seleccionado
            const programName = button.getAttribute('data-program');
            const targetDetail = document.querySelector(`.programa-detail[data-program="${programName}"]`);
            targetDetail.classList.add('is-active');

            // Añade la clase 'is-active' al botón seleccionado
            button.classList.add('is-active');
        });
    });
});