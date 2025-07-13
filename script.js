function aceptarPuddina() {
  // Redirige a tu WhatsApp personal (reemplaza por tu número real)
  window.location.href = "https://www.youtube.com/watch?v=sDMxQF18yvA";
}

function negarPuddina() {
  // Redirige a la misma página (reinicia)
  window.location.href = window.location.href;
}

// Fondo estilo Matrix con la palabra "JAZMÍN"
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const palabra = "JAZMÍN ";
const letras = palabra.split("");
const fontSize = 18;
const columnas = canvas.width / fontSize;
const lluvia = Array(Math.floor(columnas)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff66cc";
  ctx.font = fontSize + "px monospace";

  lluvia.forEach((y, i) => {
    const letra = letras[i % letras.length];
    const x = i * fontSize;
    ctx.fillText(letra, x, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      lluvia[i] = 0;
    }

    lluvia[i]++;
  });
}

setInterval(drawMatrix, 50);

