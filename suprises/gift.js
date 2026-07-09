/*=========================================
            ELEMENTS
=========================================*/

const loader = document.getElementById("loader");

const giftBox = document.getElementById("giftBox");
const giftLid = document.querySelector(".giftLid");

const openBtn = document.getElementById("openBtn");

const surprise = document.getElementById("surprise");

const nextBtn = document.getElementById("nextBtn");

const stars = document.getElementById("stars");
const particles = document.getElementById("particles");
const confetti = document.getElementById("confettiContainer");

/*=========================================
            AUDIO
=========================================*/

const bgMusic = document.getElementById("bgMusic");
const giftSound = document.getElementById("giftSound");
const winSound = document.getElementById("winSound");

/*=========================================
            VARIABLES
=========================================*/

let opened = false;

/*=========================================
            LOADER
=========================================*/

window.onload = () => {

    setTimeout(() => {

        loader.style.display = "none";

        if(bgMusic){

            bgMusic.volume = 0.35;

            bgMusic.play().catch(()=>{});

        }

    },3000);

};

/*=========================================
            STARS
=========================================*/

for(let i=0;i<120;i++){

    const star = document.createElement("div");

    star.className = "star";

    const size = Math.random()*3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random()*100 + "vw";
    star.style.top = Math.random()*100 + "vh";

    star.style.animationDelay =
    Math.random()*3 + "s";

    stars.appendChild(star);

}

/*=========================================
            PARTICLES
=========================================*/

function createParticle(){

    const p = document.createElement("div");

    p.className = "particle";

    const s = Math.random()*8 + 3;

    p.style.width = s + "px";
    p.style.height = s + "px";

    p.style.left = Math.random()*100 + "vw";

    p.style.animationDuration =
    (5 + Math.random()*5) + "s";

    particles.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },10000);

}

setInterval(createParticle,200);

/*=========================================
            OPEN BUTTON
=========================================*/

openBtn.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    if(giftSound){

        giftSound.currentTime = 0;
        giftSound.play().catch(()=>{});

    }

    /* Lid Open */

    giftLid.style.transform =
    "translateY(-95px) rotate(-18deg)";

    giftLid.style.transition =
    "1s ease";

    giftBox.style.animation =
    "giftGlow .8s infinite";

    openBtn.disabled = true;

    openBtn.innerHTML =
    "🎉 Opening...";

    createHearts();

    createConfetti();

    setTimeout(()=>{

        if(winSound){

            winSound.currentTime = 0;
            winSound.play().catch(()=>{});

        }

        surprise.style.display = "block";

        surprise.scrollIntoView({

            behavior:"smooth"

        });

    },1500);

});

/*=========================================
        FLOATING HEARTS
=========================================*/

function createHearts(){

    for(let i=0;i<40;i++){

        const heart =
        document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=
        (window.innerWidth/2)+"px";

        heart.style.top=
        (window.innerHeight/2)+"px";

        heart.style.fontSize=
        (20+Math.random()*25)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="9999";

        document.body.appendChild(heart);

        const angle=Math.random()*Math.PI*2;

        const distance=
        180+Math.random()*220;

        heart.animate(

        [

        {

            transform:
            "translate(0,0) scale(1)",

            opacity:1

        },

        {

            transform:
            `translate(
            ${Math.cos(angle)*distance}px,
            ${Math.sin(angle)*distance}px)
            scale(0)`,

            opacity:0

        }

        ],

        {

            duration:1800,

            easing:"ease-out"

        });

        setTimeout(()=>{

            heart.remove();

        },1800);

    }

}

/*=========================================
        CONFETTI
=========================================*/

function createConfetti(){

    for(let i=0;i<150;i++){

        const c=document.createElement("div");

        c.style.position="fixed";

        c.style.left=
        Math.random()*window.innerWidth+"px";

        c.style.top="-20px";

        c.style.width=
        (6+Math.random()*8)+"px";

        c.style.height=
        (10+Math.random()*10)+"px";

        c.style.background=
        `hsl(${Math.random()*360},
        100%,60%)`;

        c.style.borderRadius="4px";

        c.style.pointerEvents="none";

        confetti.appendChild(c);

        c.animate(

        [

        {

            transform:
            "translateY(0) rotate(0deg)",

            opacity:1

        },

        {

            transform:
            `translateY(${window.innerHeight+100}px)
            rotate(${720+Math.random()*720}deg)`,

            opacity:1

        }

        ],

        {

            duration:
            3000+Math.random()*1500,

            easing:"linear"

        });

        setTimeout(()=>{

            c.remove();

        },4500);

    }

}
/*=========================================
        NEXT BUTTON
=========================================*/

nextBtn.addEventListener("click",()=>{

    window.location.href="letter.html";

});

/*=========================================
        RESIZE
=========================================*/

window.addEventListener("resize",()=>{

    if(opened){

        giftBox.style.left="50%";
        giftBox.style.top="50%";

    }

});

/*=========================================
        EXTRA SPARKLES
=========================================*/

function createSparkles(){

    for(let i=0;i<25;i++){

        const s=document.createElement("div");

        s.innerHTML="✨";

        s.style.position="fixed";

        s.style.left=Math.random()*window.innerWidth+"px";

        s.style.top=Math.random()*window.innerHeight+"px";

        s.style.fontSize=(12+Math.random()*20)+"px";

        s.style.pointerEvents="none";

        s.style.zIndex="9998";

        document.body.appendChild(s);

        s.animate([

        {

            transform:"translateY(0) scale(1)",

            opacity:1

        },

        {

            transform:"translateY(-80px) scale(0)",

            opacity:0

        }

        ],{

            duration:1800,

            easing:"ease-out"

        });

        setTimeout(()=>{

            s.remove();

        },1800);

    }

}

/*=========================================
        AUTO SPARKLES
=========================================*/

setInterval(()=>{

    if(opened){

        createSparkles();

    }

},2500);

/*=========================================
        READY
=========================================*/

console.log("🎁 Gift Page Loaded Successfully ❤️");