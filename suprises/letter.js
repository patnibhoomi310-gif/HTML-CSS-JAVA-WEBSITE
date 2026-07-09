/*=========================================
            ELEMENTS
=========================================*/

const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");

const speech = document.querySelector(".speech");

const letterText = document.getElementById("letterText");

const nextBtn = document.getElementById("nextBtn");

const bgMusic = document.getElementById("bgMusic");

/*=========================================
            LOADER
=========================================*/

window.addEventListener("load",()=>{

    if(bgMusic){

        bgMusic.volume=0.35;

        bgMusic.play().catch(()=>{});

    }

});

/*=========================================
            STARS
=========================================*/

if(stars){

    for(let i=0;i<120;i++){

        const star=document.createElement("div");

        star.className="star";

        const size=Math.random()*3+1;

        star.style.width=size+"px";
        star.style.height=size+"px";

        star.style.left=Math.random()*100+"vw";
        star.style.top=Math.random()*100+"vh";

        star.style.animationDelay=
        Math.random()*3+"s";

        stars.appendChild(star);

    }

}

/*=========================================
        FLOATING HEARTS
=========================================*/

function createHeart(){

    if(!hearts) return;

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=
    Math.random()*100+"vw";

    heart.style.fontSize=
    (16+Math.random()*18)+"px";

    heart.style.animationDuration=
    (4+Math.random()*4)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,300);

/*=========================================
        TEDDY SPEECH
=========================================*/

const messages=[

"💌 I wrote this only for you.",

"❤️ You are my favourite person.",

"🧸 Thank you for being in my life.",

"✨ Keep smiling forever.",

"🎂 Happy Birthday My Love."

];

let msgIndex=0;

setInterval(()=>{

    if(!speech) return;

    speech.innerHTML=messages[msgIndex];

    msgIndex++;

    if(msgIndex>=messages.length){

        msgIndex=0;

    }

},3000);
/*=========================================
        LETTER TYPING EFFECT
=========================================*/

const message = `My Love ❤️,

Happy Birthday! 🎂

I just wanted to tell you how special you are to me.

Thank you for always making me smile, supporting me, and filling my life with happiness.

I hope every dream of yours comes true and this year brings you endless joy.

You are the most beautiful gift in my life. 💖

I Love You Forever ❤️
`;

let index = 0;

function typeLetter(){

    if(!letterText) return;

    if(index < message.length){

        letterText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter,35);

    }

}

setTimeout(typeLetter,1000);

/*=========================================
        SPARKLES
=========================================*/

function createSparkle(){

    const s = document.createElement("div");

    s.innerHTML = "✨";

    s.style.position = "fixed";

    s.style.left = Math.random()*window.innerWidth + "px";

    s.style.top = Math.random()*window.innerHeight + "px";

    s.style.fontSize = (10 + Math.random()*18) + "px";

    s.style.pointerEvents = "none";

    s.style.zIndex = "9999";

    document.body.appendChild(s);

    s.animate([

        {
            transform:"scale(1)",
            opacity:1
        },

        {
            transform:"translateY(-60px) scale(0)",
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

setInterval(createSparkle,700);

/*=========================================
        MOUSE GLOW
=========================================*/

document.addEventListener("mousemove",(e)=>{

    document.body.style.backgroundPosition =
    `${e.clientX/25}px ${e.clientY/25}px`;

});
/*=========================================
        NEXT BUTTON
=========================================*/

if(nextBtn){

    nextBtn.addEventListener("click",()=>{

        window.location.href="cake.html";

    });

}

/*=========================================
        RESIZE FIX
=========================================*/

window.addEventListener("resize",()=>{

    document.body.style.backgroundPosition="center";

});

/*=========================================
        PAGE FADE IN
=========================================*/

document.body.style.opacity="0";
document.body.style.transition="opacity 1.2s ease";

setTimeout(()=>{

    document.body.style.opacity="1";

},100);

/*=========================================
        AUTO HEART BURST
=========================================*/

function heartBurst(){

    for(let i=0;i<15;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=(window.innerWidth/2)+"px";
        heart.style.top=(window.innerHeight/2)+"px";

        heart.style.fontSize=(18+Math.random()*20)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="9999";

        document.body.appendChild(heart);

        const angle=Math.random()*Math.PI*2;
        const distance=100+Math.random()*180;

        heart.animate(

        [

        {
            transform:"translate(0,0) scale(1)",
            opacity:1
        },

        {
            transform:`translate(${Math.cos(angle)*distance}px,
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
        LETTER FINISH EFFECT
=========================================*/

setTimeout(()=>{

    heartBurst();

},8000);

/*=========================================
        READY
=========================================*/

console.log("💌 Letter Page Loaded Successfully ❤️");