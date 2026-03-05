// EmailJS
(function () {
  emailjs.init("vv0Dun2erJVpVMQHD"); // public key
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_v6igy74", "template_w5gpl43", this).then(
      function (response) {
        alert("Formularz został przesłany! Dziękujemy.");
      },
      function (error) {
        alert("Coś poszło nie tak... ");
        console.error("Błąd:", error);
      }
    );

    this.reset();
  });
