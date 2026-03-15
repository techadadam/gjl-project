// slide.js — slide on scroll (IntersectionObserver)
// Użycie: dodaj klasę "slide" do elementu w HTML, a na stronie dodaj <script src="slide.js" defer></script>

(() => {
  const slides = document.querySelectorAll(".slide");
  const triggers = document.querySelectorAll(".slide-trigger");

  if (!slides.length || !triggers.length) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    slides.forEach((el) => el.classList.add("slide--active"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        slides.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add("slide--active");
          }, index * 1000); // 150 ms odstępu
        });

        triggers.forEach((trigger) => observer.unobserve(trigger));
      });
    },
    { threshold: 0.3 },
  );

  triggers.forEach((trigger) => observer.observe(trigger));
})();
