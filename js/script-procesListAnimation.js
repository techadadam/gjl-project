let sectionIsVisible = false;
const section = document.querySelector("#proces-zakupowy");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Sekcja w widoku!");
        const foundElements = document.querySelectorAll(
          ".list-pointoflist .container"
        );
        let index = 0;
        console.log(
          "Zaincjowano proces animacji, ilosc elementow",
          foundElements.length
        );
        const interval = setInterval(() => {
          if (index < foundElements.length) {
            if (index % 2 == 0) {
              foundElements[index].classList.add("closer-to-right");
            } else {
              foundElements[index].classList.add("closer-to-left");
            }
            console.log("indeks teraz to", index);
            index = index + 1;
          } else {
            clearInterval(interval);
            console.log("Koniec!");
            sectionIsVisible = false;
          }
        }, 500);
        observer.unobserve(section); // przestaje obserwować po pierwszym razie
      }
    });
  },
  { threshold: 0.5 }
); // 0.5 = połowa sekcji w widoku
observer.observe(section);
