// LED
const ledText = document.getElementById("led-text");
let encendido = true;

setInterval(() => {
    if (encendido) {
        ledText.style.opacity = "0.3";
    } else {
        ledText.style.opacity = "1";
    }
    encendido = !encendido;
}, 600);

// CLICK
function verJugador(nombre) {
    localStorage.setItem("jugador", nombre);
    window.location.href = "jugador.html";
}
