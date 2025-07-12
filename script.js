const container = document.getElementById("mel-container");

function createMel() {
  const mel = document.createElement("div");
  mel.classList.add("Jazmin");

  const corazones = ["💖", "💕", "💘", "❤️", "💞"];
  const corazon = corazones[Math.floor(Math.random() * corazones.length)];
  mel.innerText = `Mel ${corazon}`;

  mel.style.left = Math.random() * 100 + "vw";
  mel.style.fontSize = (Math.random() * 20 + 28) + "px";
  mel.style.animationDuration = (Math.random() * 5 + 6) + "s";

  container.appendChild(mel);

  setTimeout(() => {
    mel.remove();
  }, 15000);
}

setInterval(createMel, 300);

function tocarSonido() {
  const sonido = document.getElementById("sonido-lindo");
  sonido.play();
}
