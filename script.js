// Animación LED parpadeante
const ledText = document.getElementById("led-text");

setInterval(() => {
  if (ledText.style.visibility === "hidden") {
    ledText.style.visibility = "visible";
  } else {
    ledText.style.visibility = "hidden";
  }
}, 500); // cambia cada medio segundo
