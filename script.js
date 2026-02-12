function aceptarPuddina() {
    document.body.innerHTML += `
        <div class="pantalla-amor">
            <h1 class="mensaje-final">💖 ¡Ahora eres mi San Valentín! 💖</h1>
            <p>Prometo cuidarte, mimarte y hacerte feliz todos los días ✨🌹</p>
        </div>
    `;

    lanzarCorazones();
    reproducirMusica();
}

/* Botón No travieso */
let btnNo = document.getElementById("btnNo");
let btnSi = document.getElementById("btnSi");
let tamañoNo = 1;
let tamañoSi = 1;

function negarPuddina() {
    tamañoNo *= 0.85;
    tamañoSi *= 1.1;

    btnSi.style.transform = `scale(${tamañoSi})`;

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

/* Corazones flotando */
function lanzarCorazones() {
    setInterval(() => {
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
}

/* Música romántica */
function reproducirMusica() {
    let audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    audio.volume = 0.3;
    audio.play();
}

/* Fondo Matrix mejorado */
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
