// appear.js — appear on scroll (IntersectionObserver)
// Użycie: dodaj klasę "appear" do elementu w HTML, a na stronie dodaj <script src="appear.js" defer></script>

(() => {
  // Jeśli na stronie nie ma żadnych elementów do appear, nic nie rób
  const elements = document.querySelectorAll(".appear");
  if (!elements.length) return;

  // Szanuj ustawienie systemowe "reduce motion"
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // Jeśli użytkownik nie chce animacji, po prostu pokaż elementy
  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add("appear--active"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear--active");
          observer.unobserve(entry.target); // animuj tylko raz
        }
      });
    },
    { threshold: 0.01 },
  );

  elements.forEach((el) => observer.observe(el));
})();
