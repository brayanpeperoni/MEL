//=========================
// MAPACHITA HERMOSA ❤️
// Parte 1
//=========================

const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");

let escalaNo = 1;

//------------------------
// BOTÓN SÍ
//------------------------

function aceptarSanValentin(){

    lanzarCorazones();

    document.getElementById("pantallaFinal").classList.remove("oculto");

    const music = document.getElementById("music");

    if(music){
        music.play().catch(()=>{});
    }

}

//------------------------
// BOTÓN NO
//------------------------

function negarSanValentin(){

    escalaNo*=0.82;

    btnNo.style.transform=`scale(${escalaNo})`;

    moverBoton();

    if(escalaNo<0.20){

        btnNo.style.display="none";

    }

}

function moverBoton(){

    const margen=15;

    const ancho=window.innerWidth-btnNo.offsetWidth-margen;

    const alto=window.innerHeight-btnNo.offsetHeight-margen;

    const x=Math.random()*ancho;

    const y=Math.random()*alto;

    btnNo.style.position="fixed";

    btnNo.style.left=x+"px";

    btnNo.style.top=y+"px";

}

// En celular se mueve antes de tocarlo

btnNo.addEventListener("touchstart",function(e){

    e.preventDefault();

    negarSanValentin();

});

btnNo.addEventListener("mouseenter",function(){

    if(window.innerWidth>768){

        negarSanValentin();

    }

});

//------------------------
// CORAZONES
//------------------------

function lanzarCorazones(){

    for(let i=0;i<70;i++){

        crearCorazon();

    }

}

function crearCorazon(){

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-40px";

    heart.style.fontSize=(20+Math.random()*35)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="9999";

    heart.style.transition="all 5s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.bottom="120vh";

        heart.style.transform=
        `translateX(${Math.random()*300-150}px)
         rotate(${Math.random()*720}deg)`;

        heart.style.opacity="0";

    },50);

    setTimeout(()=>{

        heart.remove();

    },5200);

}