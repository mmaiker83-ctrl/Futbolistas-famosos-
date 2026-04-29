const ledText = document.getElementById("led-text");

let encendido = true;

setInterval(() => {
    if (encendido) {
        ledText.style.opacity = "0.3";
        ledText.style.textShadow = "none";
    } else {
        ledText.style.opacity = "1";
        ledText.style.textShadow = `
            0 0 10px red,
            0 0 20px red,
            0 0 30px orange
        `;
    }

    encendido = !encendido;
}, 700);
