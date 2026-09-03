const slides = document.getElementById("slides");
const indicators = document.getElementById("indicators");
const slideCount = slides.children.length;
let currentIndex = 0;
let autoplayInterval;

for (let i = 0; i < slideCount; i++) {
  const indicator = document.createElement("div");
  indicator.classList.add("indicator");
  if (i === 0) indicator.classList.add("active");
  indicator.addEventListener("click", () => goToSlide(i));
  indicators.appendChild(indicator);
}

function updateIndicators() {
  document.querySelectorAll(".indicator").forEach((ind, i) => {
    ind.classList.toggle("active", i === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = index;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateIndicators();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  goToSlide(currentIndex);
}

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 3000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}
startAutoplay();

document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const isOpen = content.style.maxHeight;

      document.querySelectorAll(".accordion-content").forEach((c) => {
        c.style.maxHeight = null;
      });

      if (isOpen) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
