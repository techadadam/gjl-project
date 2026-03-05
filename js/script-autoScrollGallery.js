// My scrolling flexbox
const scrollContainer = document.getElementById("scrollableflex");
let scrollDirection = 1; // 1 = right, -1 = left

function autoScroll() {
  const maxScrollLeft =
    scrollContainer.scrollWidth - scrollContainer.clientWidth;

  // Zmień kierunek, jeśli osiągnięto któryś z końców
  if (scrollContainer.scrollLeft >= maxScrollLeft) {
    scrollDirection = -1;
  } else if (scrollContainer.scrollLeft <= 0) {
    scrollDirection = 1;
  }

  scrollContainer.scrollLeft += scrollDirection;
}

// Uruchom co 20 ms dla płynnego efektu
setInterval(autoScroll, 20);
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
