// Animación de entrada suave
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hero, .services, .metrics, .testimonials");
  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "all 0.8s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 300);
  });
});

document.querySelector('.service-carousel').addEventListener('wheel', function (e) {
  e.preventDefault();
  this.scrollLeft += e.deltaY;
});

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-100px"; // Oculta
  } else {
    navbar.style.top = "0"; // Muestra
  }
  lastScrollTop = scrollTop;
});
