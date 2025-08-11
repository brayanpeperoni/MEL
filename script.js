function aceptarPuddina() {
    alert("¡Sabía que dirías que Sí! 💖");
    window.location.href = "https://www.youtube.com/watch?v=sDMxQF18yvA";
}

let btnNo = document.getElementById("btnNo");
let tamañoNo = 1;
let movimientos = 0;

function negarPuddina() {
    movimientos++;
    tamañoNo *= 0.9;

    let maxX = window.innerWidth - btnNo.offsetWidth - 50;
    let maxY = window.innerHeight - btnNo.offsetHeight - 50;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    btnNo.style.position = "absolute";
    btnNo.style.left = randomX + "px";
    btnNo.style.top = randomY + "px";
    btnNo.style.transform = `scale(${tamañoNo})`;

    if (tamañoNo < 0.2) {
        btnNo.style.display = "none";
    }
}

// Fondo tipo Matrix con texto romántico
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const palabra = "MAYERLY ";
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
