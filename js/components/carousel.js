document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("heroCarousel");
  if (!el) return;

  const carousel = bootstrap.Carousel.getOrCreateInstance(el, {
    interval: 3500,
    ride: "carousel",
    pause: false,
    touch: true,
    wrap: true,
  });

  carousel.cycle();

  const restartAutoplay = () => {
    carousel.pause();
    carousel.cycle();
  };

  el.querySelectorAll("[data-bs-slide], [data-bs-slide-to]").forEach((btn) => {
    btn.addEventListener("click", restartAutoplay, { passive: true });
  });
});
