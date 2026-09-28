let cookies = 0;

const counter =
  document.getElementById("counter");
const button =
  document.getElementById("cookieBtn");

button.addEventListener("click",
  function() {
    cookies = cookies + 1;
    counter.textContent =
      "Cookies: " + cookies;
  }
);

let clickPower = 5;

multiplierBtn.addEventListener("click", function() {
    if (cookies >= 50) {
      cookies = cookies - 50;
      clickPower = clickPower + 5;
      counter.textContent ="Cookies: " + cookies;
    }
  });