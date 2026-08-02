const btnNo = document.getElementById("btnNo");
const btnSi = document.getElementById("btnSi");
const sorpresa = document.getElementById("sorpresa");

let escala = 1;

// Mover botón NO
function moverNo() {

    const ancho = window.innerWidth - btnNo.offsetWidth;
    const alto = window.innerHeight - btnNo.offsetHeight;

    btnNo.style.position = "fixed";
    btnNo.style.left = Math.random() * ancho + "px";
    btnNo.style.top = Math.random() * alto + "px";

    // Crece el botón SI
    escala += 0.2;

    if (escala > 2.8) escala = 2.8;

    btnSi.style.transform = `scale(${escala})`;
}

// Compatible con celular
btnNo.addEventListener("touchstart", function(e){
    e.preventDefault();
    moverNo();
});

btnNo.addEventListener("click", moverNo);

// Botón SI
function aceptar(){

    document.querySelector(".botones").style.display="none";

    sorpresa.style.display="block";

    lanzarCorazones();

}

// Corazones
function lanzarCorazones(){

    const emojis=["💖","💕","❤️","🩷","✨","🦝"];

    for(let i=0;i<40;i++){

        let c=document.createElement("div");

        c.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

        c.style.position="fixed";
        c.style.left=Math.random()*100+"vw";
        c.style.top="100vh";
        c.style.fontSize=(20+Math.random()*25)+"px";
        c.style.pointerEvents="none";
        c.style.zIndex="999";

        document.body.appendChild(c);

        c.animate([
            {transform:"translateY(0)",opacity:1},
            {transform:"translateY(-120vh)",opacity:0}
        ],{
            duration:3000+Math.random()*2000
        });

        setTimeout(()=>c.remove(),5000);
    }

}