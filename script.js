const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

const slides = Array.from(document.querySelectorAll(".slide"));
const dots = Array.from(document.querySelectorAll(".dot"));
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");
let index = 0;

function updateSlide(nextIndex) {
  index = (nextIndex + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

if (slides.length > 0) {
  nextBtn?.addEventListener("click", () => updateSlide(index + 1));
  prevBtn?.addEventListener("click", () => updateSlide(index - 1));
  setInterval(() => updateSlide(index + 1), 5000);
}

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  button?.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");
    faqItems.forEach((faq) => faq.classList.remove("active"));
    if (!isOpen) item.classList.add("active");
  });
});
