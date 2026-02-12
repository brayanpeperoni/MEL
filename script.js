let btnNo = document.getElementById("btnNo");
let tamañoNo = 1;

/* BOTÓN SÍ */
function aceptarSanValentin() {

    let alerta = document.createElement("div");
    alerta.classList.add("alerta-amor");
    alerta.innerHTML = `
        <div class="alerta-contenido">
            <h2>💖 Sabía que dirías chi 😏💖</h2>
            <p>Ahora prepárate para lo que viene... 💘</p>
            <button onclick="cerrarAlerta()">Continuar 💝</button>
        </div>
    `;

    document.body.appendChild(alerta);
}

/* Cerrar alerta y redirigir */
function cerrarAlerta() {
    document.querySelector(".alerta-amor").remove();
    window.location.href = "https://www.youtube.com/watch?v=sDMxQF18yvA";
}


/* BOTÓN NO */
function negarSanValentin() {

    tamañoNo *= 0.75; // se hace más pequeño
    btnNo.style.transform = `scale(${tamañoNo})`;

    // se mueve por toda la pantalla
    let maxX = window.innerWidth - btnNo.offsetWidth;
    let maxY = window.innerHeight - btnNo.offsetHeight;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    btnNo.style.position = "absolute";
    btnNo.style.left = randomX + "px";
    btnNo.style.top = randomY + "px";

    if (tamañoNo < 0.15) {
        btnNo.style.display = "none";
    }
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
    ctx.shadowBlur = 15;
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
