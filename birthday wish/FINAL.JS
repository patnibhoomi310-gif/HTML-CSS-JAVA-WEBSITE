// ==========================
// ELEMENTS
// ==========================

const giftBox = document.getElementById("giftBox");
const cards = document.querySelectorAll(".love-card");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const finalBtn = document.querySelector(".final-btn");
const sparkContainer = document.querySelector(".spark-container");

// Prevent multiple clicks
let opened = false;

// ==========================
// MUSIC
// ==========================

musicBtn.addEventListener("click",()=>{

if(music.paused){

music.play();

musicBtn.classList.add("playing");

musicBtn.innerHTML="🎵";

}else{

music.pause();

musicBtn.classList.remove("playing");

musicBtn.innerHTML="🔇";

}

});

// ==========================
// OPEN GIFT
// ==========================

giftBox.addEventListener("click",()=>{

if(opened) return;

opened=true;

giftBox.classList.add("open");

// play music automatically

music.play().catch(()=>{});

musicBtn.classList.add("playing");

// start after lid opens

setTimeout(()=>{

showCards();

},1200);

});

// ==========================
// SHOW CARDS
// ==========================

function showCards(){

cards.forEach((card,index)=>{

setTimeout(()=>{

card.classList.add("show");

createSpark(card);

bounce(card);

// last card

if(index===cards.length-1){

setTimeout(()=>{

finalBtn.style.display="block";

finalBtn.style.animation="cardEntry 1s";

},1000);

}

},index*350);

});

}

// ==========================
// CARD BOUNCE
// ==========================

function bounce(card){

card.animate([

{

transform:"translateY(40px) scale(.5)"

},

{

transform:"translateY(-15px) scale(1.08)"

},

{

transform:"translateY(0px) scale(1)"

}

],{

duration:700,

easing:"ease-out"

});

}

// ==========================
// SPARK EFFECT
// ==========================

function createSpark(target){

const rect=target.getBoundingClientRect();

for(let i=0;i<18;i++){

const spark=document.createElement("span");

spark.className="spark";

spark.style.left=(rect.left+rect.width/2)+"px";

spark.style.top=(rect.top+rect.height/2)+"px";

spark.style.setProperty("--x",(Math.random()*2)-1);

spark.style.setProperty("--y",(Math.random()*2)-1);

sparkContainer.appendChild(spark);

setTimeout(()=>{

spark.remove();

},900);

}

}
// ==========================
// POPUP
// ==========================

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

// 16 Messages

const messages = [

{
title:"❤️ Forever",
text:"You are the best thing that has ever happened to me."
},

{
title:"🥰 My Smile",
text:"Your smile is my favourite place in the whole world."
},

{
title:"🌍 My World",
text:"You are my home, my comfort and my peace."
},

{
title:"✨ Thank You",
text:"Thank you for making every ordinary day beautiful."
},

{
title:"💖 My Heart",
text:"Every heartbeat whispers your name."
},

{
title:"🌸 Happiness",
text:"Seeing you happy makes my heart happiest."
},

{
title:"🌙 Moon",
text:"Even the moon is jealous of your smile."
},

{
title:"💞 Together",
text:"Every moment with you becomes my favourite memory."
},

{
title:"🫶 Safe Place",
text:"Your arms are my safest place."
},

{
title:"💌 Promise",
text:"No matter what happens, I'll always stand beside you."
},

{
title:"🎂 Birthday",
text:"May every dream of yours come true."
},

{
title:"🌹 Love",
text:"You deserve all the love and happiness in this world."
},

{
title:"🎁 Gift",
text:"You are the most precious gift life gave me."
},

{
title:"💕 Always",
text:"Today, Tomorrow and Forever."
},

{
title:"💍 Forever",
text:"I wish every birthday of yours is celebrated with me."
},

{
title:"❤️ Kunal",
text:"Happy Birthday My Love ❤️"
}

];

// ==========================
// CARD CLICK
// ==========================

cards.forEach((card,index)=>{

card.addEventListener("click",()=>{

popup.style.display="flex";

popupTitle.innerHTML=messages[index].title;

popupText.innerHTML=messages[index].text;

popup.querySelector(".popup-box").animate([

{
transform:"scale(.5)",
opacity:0
},

{
transform:"scale(1.08)",
opacity:1
},

{
transform:"scale(1)"
}

],{

duration:500,
easing:"ease-out"

});

});

});

// ==========================
// CLOSE POPUP
// ==========================

closePopup.addEventListener("click",()=>{

popup.style.display="none";

});

// Close Outside

window.addEventListener("click",(e)=>{

if(e.target===popup){

popup.style.display="none";

}

});

// ESC Key

window.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

popup.style.display="none";

}

});

// ==========================
// CARD CLICK EFFECT
// ==========================

cards.forEach(card=>{

card.addEventListener("mousedown",()=>{

card.style.transform="scale(.95)";

});

card.addEventListener("mouseup",()=>{

card.style.transform="scale(1)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="scale(1)";

});

});
// ==========================
// HEART RAIN
// ==========================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";
    heart.className = "fall-heart";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 700);

// ==========================
// FIREWORKS
// ==========================

function firework() {

    const colors = [
        "#ff2d75",
        "#ffd54f",
        "#ffffff",
        "#ff69b4",
        "#87cefa"
    ];

    for (let i = 0; i < 30; i++) {

        const particle = document.createElement("span");

        particle.className = "spark";

        particle.style.left =
            (Math.random() * window.innerWidth) + "px";

        particle.style.top =
            (Math.random() * 350) + "px";

        particle.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        particle.style.setProperty("--x", (Math.random() * 2) - 1);
        particle.style.setProperty("--y", (Math.random() * 2) - 1);

        document.body.appendChild(particle);

        setTimeout(() => {

            particle.remove();

        }, 1200);

    }

}

setInterval(firework, 2500);

// ==========================
// CONFETTI
// ==========================

function confettiBlast() {

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left =
            Math.random() * window.innerWidth + "px";

        confetti.style.background =
            `hsl(${Math.random() * 360},100%,70%)`;

        confetti.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 7000);

    }

}

// Run after all cards appear
setTimeout(confettiBlast, 8500);

// ==========================
// FINAL BUTTON EFFECT
// ==========================

if (finalBtn) {

    finalBtn.addEventListener("mouseenter", () => {

        finalBtn.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.08)" },
            { transform: "scale(1)" }
        ], {
            duration: 500
        });

    });

}

// ==========================
// PAGE LOAD
// ==========================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.body.classList.add("loaded");

    }, 300);

});
