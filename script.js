let btnNo = document.getElementById("btnNo");
let tamañoNo = 1;

/* BOTÓN SÍ */
function aceptarSanValentin() {

    // Mini mensaje
    let mensaje = document.createElement("div");
    mensaje.innerText = "Sabía que dirías chi 😏💖";
    mensaje.classList.add("mini-mensaje");
    document.body.appendChild(mensaje);

    setTimeout(() => {
        mensaje.style.opacity = "1";
    }, 100);

    // Corazones flotando
    lanzarCorazones();

    // Redirección
    setTimeout(() => {
        window.location.href = "https://www.youtube.com/watch?v=sDMxQF18yvA";
    }, 2500);
}


/* BOTÓN NO */
function negarSanValentin() {
    tamañoNo *= 0.75; // Se reduce cada vez
    btnNo.style.transform = `scale(${tamañoNo})`;

    if (tamañoNo < 0.15) {
        btnNo.style.display = "none";
    }
}


/* Corazones flotando */
function lanzarCorazones() {
    let intervalo = setInterval(() => {
        let corazon = document.createElement("div");
        corazon.innerHTML = "💖";
        corazon.classList.add("corazon-flotante");

        corazon.style.left = Math.random() * window.innerWidth + "px";
        corazon.style.fontSize = (Math.random() * 20 + 20) + "px";

        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 4000);

    }, 300);

    setTimeout(() => {
        clearInterval(intervalo);
    }, 2500);
}


/* MATRIX LOVE */
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const palabra = "LOVE ♥ ";
const letras = palabra.split("");
const fontSize = 18;
const columnas = canvas.width / fontSize;
const lluvia = Array(Math.floor(columnas)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff99cc";
    ctx.shadowColor = "#ff4da6";
    ctx.shadowBlur = 10;
    ctx.font = fontSize + "px monospace";

    lluvia.forEach((y, i) => {
        const letra = letras[Math.floor(Math.random() * letras.length)];
        const x = i * fontSize;
        ctx.fillText(letra, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            lluvia[i] = 0;
        }

        lluvia[i]++;
    });
}

setInterval(drawMatrix, 50);
