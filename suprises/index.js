/*=========================================
        ELEMENTS
=========================================*/

const intro = document.getElementById("intro");
const progressBar = document.getElementById("progressBar");
const percent = document.getElementById("percent");
const startBtn = document.getElementById("startMission");
const teddyText = document.getElementById("teddyText");

const lines = [
document.getElementById("line1"),
document.getElementById("line2"),
document.getElementById("line3"),
document.getElementById("line4"),
document.getElementById("line5"),
document.getElementById("line6"),
document.getElementById("line7"),
document.getElementById("line8")
];

/*=========================================
        TERMINAL TEXT
=========================================*/

const terminalText = [

"> Initializing Birthday Engine...",

"> Searching Birthday Boy...",

"> Identity Found : Kunal ❤️",

"> Teddy Status : Missing 🧸",

"> Monster Location : Unknown 😈",

"> Unlocking Secret Mission...",

"> Love Energy : 100% ❤️",

"> Ready To Start Mission ✔"

];

/*=========================================
      TYPEWRITER EFFECT
=========================================*/

let currentLine = 0;

function typeWriter(){

if(currentLine >= terminalText.length){

return;

}

let text = terminalText[currentLine];

let char = 0;

let interval = setInterval(()=>{

lines[currentLine].textContent += text.charAt(char);

char++;

if(char>=text.length){

clearInterval(interval);

currentLine++;

setTimeout(typeWriter,350);

}

},35);

}

setTimeout(typeWriter,1000);

/*=========================================
      LOADING BAR
=========================================*/

let load = 0;

const loading = setInterval(()=>{

load++;

progressBar.style.width = load+"%";

percent.innerHTML = load+"%";

if(load>=100){

clearInterval(loading);

setTimeout(()=>{

intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

},900);

startBtn.style.opacity="1";

startBtn.style.pointerEvents="auto";

},600);

}

},65);

/*=========================================
        TEDDY TALK
=========================================*/

const teddyMessages=[

"Hey Birthday Boy ❤️",

"I have a surprise for you...",

"Will you save me? 🧸",

"Click START MISSION 😊"

];

let msg=0;

setInterval(()=>{

teddyText.innerHTML=teddyMessages[msg];

msg++;

if(msg>=teddyMessages.length){

msg=0;

}

},3000);

/*=========================================
        CURSOR GLOW
=========================================*/

const glow=document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});
/*=========================================
        CREATE STARS
=========================================*/

const starContainer = document.getElementById("stars");

for(let i=0;i<180;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

let size=Math.random()*3+1;

star.style.width=size+"px";
star.style.height=size+"px";

star.style.animationDuration=
(Math.random()*4+2)+"s";

starContainer.appendChild(star);

}

/*=========================================
        FLOATING HEARTS
=========================================*/

const heartContainer=document.getElementById("hearts");

function createHeart(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
(Math.random()*20+18)+"px";

heart.style.animationDuration=
(Math.random()*6+8)+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},14000);

}

setInterval(createHeart,700);

/*=========================================
        PARTICLES
=========================================*/

const particleContainer=document.getElementById("particles");

function createParticle(){

let p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*100+"vw";

let size=Math.random()*4+2;

p.style.width=size+"px";
p.style.height=size+"px";

p.style.animationDuration=
(Math.random()*5+5)+"s";

particleContainer.appendChild(p);

setTimeout(()=>{

p.remove();

},10000);

}

setInterval(createParticle,120);

/*=========================================
        SHOOTING STAR
=========================================*/

function shootingStar(){

let star=document.createElement("div");

star.style.position="absolute";

star.style.width="140px";

star.style.height="2px";

star.style.background="white";

star.style.boxShadow="0 0 20px white";

star.style.transform="rotate(-35deg)";

star.style.left=Math.random()*70+"vw";

star.style.top=Math.random()*30+"vh";

star.style.zIndex="5";

document.body.appendChild(star);

let x=0;

let timer=setInterval(()=>{

x+=18;

star.style.transform=
`translate(${x}px,${x}px) rotate(-35deg)`;

if(x>700){

clearInterval(timer);

star.remove();

}

},16);

}

setInterval(shootingStar,4500);

/*=========================================
        TEDDY BLINK
=========================================*/

const eyes=document.querySelectorAll(".eye");

setInterval(()=>{

eyes.forEach(e=>{

e.style.height="2px";

});

setTimeout(()=>{

eyes.forEach(e=>{

e.style.height="10px";

});

},180);

},5000);
/*=========================================
        AUDIO
=========================================*/

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
const clickSound = document.getElementById("clickSound");

let musicPlaying = false;

musicBtn.addEventListener("click",()=>{

if(musicPlaying){

bgMusic.pause();

musicBtn.innerHTML="🎵";

}else{

bgMusic.play();

musicBtn.innerHTML="🔊";

}

musicPlaying=!musicPlaying;

});

/*=========================================
        FULLSCREEN
=========================================*/

const fullscreenBtn=document.getElementById("fullscreenBtn");

fullscreenBtn.addEventListener("click",()=>{

if(!document.fullscreenElement){

document.documentElement.requestFullscreen();

}else{

document.exitFullscreen();

}

});

/*=========================================
        START BUTTON
=========================================*/

const missionCard=document.getElementById("missionCard");

startBtn.addEventListener("click",()=>{

clickSound.currentTime=0;
clickSound.play();

missionCard.style.display="flex";

});

/*=========================================
        ACCEPT MISSION
=========================================*/

const acceptMission=document.getElementById("acceptMission");

const transition=document.getElementById("transitionScreen");

acceptMission.addEventListener("click",()=>{

clickSound.currentTime=0;
clickSound.play();

transition.style.display="flex";

setTimeout(()=>{

transition.style.opacity="1";

},100);

setTimeout(()=>{

window.location.href="mission.html";

},2500);

});

/*=========================================
        BUTTON GLOW
=========================================*/

setInterval(()=>{

startBtn.animate([

{
transform:"scale(1)"
},

{
transform:"scale(1.05)"
},

{
transform:"scale(1)"
}

],{

duration:1800

});

},2200);

/*=========================================
        RANDOM TEDDY MESSAGE
=========================================*/

const randomMessages=[

"Don't leave me 🧸",

"I trust only you ❤️",

"You are my Hero 😎",

"Monster is waiting 😈",

"Mission is ready 🚀",

"I have a birthday surprise 🎁"

];

setInterval(()=>{

let random=Math.floor(

Math.random()*randomMessages.length

);

teddyText.innerHTML=randomMessages[random];

},6500);

/*=========================================
        WINDOW TITLE BLINK
=========================================*/

const title=document.querySelector(".windowTitle");

setInterval(()=>{

title.style.opacity=".4";

setTimeout(()=>{

title.style.opacity="1";

},350);

},3000);

/*=========================================
        PARALLAX
=========================================*/

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/45;

const y=(window.innerHeight/2-e.clientY)/45;

document.querySelector(".glassWindow").style.transform=

`translate(${x}px,${y}px)`;

});

/*=========================================
        READY
=========================================*/

console.log("❤️ Operation Save Teddy Loaded ❤️");