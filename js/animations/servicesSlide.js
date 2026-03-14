// slide.js — slide on scroll (IntersectionObserver)
// Użycie: dodaj klasę "slide" do elementu w HTML, a na stronie dodaj <script src="slide.js" defer></script>

(() => {
  // Jeśli na stronie nie ma żadnych elementów do slide, nic nie rób
  const elements = document.querySelectorAll(".slide");
  if (!elements.length) return;

  // Szanuj ustawienie systemowe "reduce motion"
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // Jeśli użytkownik nie chce animacji, po prostu pokaż elementy
  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add("slide--active"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide--active");
          observer.unobserve(entry.target); // animuj tylko raz
        }
      });
    },
    { threshold: 0.05 },
  );

  elements.forEach((el) => observer.observe(el));
})();
