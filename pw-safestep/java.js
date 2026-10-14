/* =========================
       MENÚ MÓVIL
    ========================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  const active = mobileMenu.classList.toggle("active");

  menuButton.setAttribute("aria-expanded", active);
});

/* Cerrar menú al seleccionar una opción */

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");

    menuButton.setAttribute("aria-expanded", "false");
  });
});

/* =========================
       ANIMACIONES AL HACER SCROLL
    ========================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.12,
  },
);

revealElements.forEach((element) => {
  observer.observe(element);
});

/* =========================
       FORMULARIO
    ========================= */

const form = document.getElementById("safeForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const button = form.querySelector("button");

  button.textContent = "¡Gracias! Te contactaremos.";

  button.disabled = true;

  button.style.opacity = ".75";
});

/* =========================
       SCROLL SUAVE
    ========================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
