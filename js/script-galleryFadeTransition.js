//const images = document.querySelectorAll(".hero-gallery img");
const images = document.querySelectorAll(".hero-image-box img");
let index = 0;

setInterval(() => {
  images[index].classList.remove("activated");
  index = (index + 1) % images.length;
  images[index].classList.add("activated");
}, 4000); // zmiana co 4 sekundy
