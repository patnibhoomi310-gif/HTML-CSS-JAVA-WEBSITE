/*=========================================
            ELEMENTS
=========================================*/

const loader = document.getElementById("loader");
const introScreen = document.getElementById("introScreen");
const startBtn = document.getElementById("startBtn");

const gameArea = document.getElementById("gameArea");

const teddy = document.getElementById("teddy");
const giftBox = document.getElementById("giftBox");

const popup = document.getElementById("popup");
const openGift = document.getElementById("openGift");

const keyCounter = document.getElementById("keyCount");
const speechBubble = document.querySelector(".speechBubble");

const stars = document.getElementById("stars");
const particles = document.getElementById("particles");
const confetti = document.getElementById("confettiContainer");

/*=========================================
            AUDIO
=========================================*/

const bgMusic = document.getElementById("bgMusic");
const keySound = document.getElementById("keySound");
const giftSound = document.getElementById("giftSound");
const winSound = document.getElementById("winSound");

/*=========================================
            KEYS
=========================================*/

const keys = [
    document.getElementById("key1"),
    document.getElementById("key2"),
    document.getElementById("key3")
];

/*=========================================
            VARIABLES
=========================================*/

let gameRunning = false;
let collectedKeys = 0;
let giftUnlocked = false;

let teddyX = 80;
let teddyY = 330;

const teddySpeed = 6;

const pressedKeys = {};

/*=========================================
            LOADER
=========================================*/

window.onload = () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },600);

    },2500);

};

/*=========================================
            START GAME
=========================================*/

startBtn.onclick = ()=>{

    introScreen.style.display="none";

    gameRunning=true;

    teddy.style.left=teddyX+"px";
    teddy.style.top=teddyY+"px";

    collectedKeys=0;
    keyCounter.textContent="0";

    speechBubble.innerHTML=
    "💖 Let's find all 3 magical keys!";

    if(bgMusic){

        bgMusic.volume=.35;
        bgMusic.loop=true;
        bgMusic.play().catch(()=>{});

    }

};

/*=========================================
        KEYBOARD
=========================================*/

document.addEventListener("keydown",(e)=>{

    pressedKeys[e.key.toLowerCase()]=true;

});

document.addEventListener("keyup",(e)=>{

    pressedKeys[e.key.toLowerCase()]=false;

});

/*=========================================
        TEDDY MOVEMENT
=========================================*/

function moveTeddy(){

    if(!gameRunning) return;

    if(pressedKeys["arrowleft"]||pressedKeys["a"]){

        teddyX-=teddySpeed;

    }

    if(pressedKeys["arrowright"]||pressedKeys["d"]){

        teddyX+=teddySpeed;

    }

    if(pressedKeys["arrowup"]||pressedKeys["w"]){

        teddyY-=teddySpeed;

    }

    if(pressedKeys["arrowdown"]||pressedKeys["s"]){

        teddyY+=teddySpeed;

    }

    const area=gameArea.getBoundingClientRect();

    teddyX=Math.max(
        0,
        Math.min(area.width-70,teddyX)
    );

    teddyY=Math.max(
        0,
        Math.min(area.height-70,teddyY)
    );

    teddy.style.left=teddyX+"px";
    teddy.style.top=teddyY+"px";

}

/*=========================================
        COLLISION
=========================================*/

function isTouching(a,b){

    const r1=a.getBoundingClientRect();
    const r2=b.getBoundingClientRect();

    return(

        r1.left<r2.right &&
        r1.right>r2.left &&
        r1.top<r2.bottom &&
        r1.bottom>r2.top

    );

}

/*=========================================
        SPARK EFFECT
=========================================*/

function createSpark(x,y){

    for(let i=0;i<15;i++){

        const spark=document.createElement("div");

        spark.style.position="fixed";
        spark.style.left=x+"px";
        spark.style.top=y+"px";

        spark.style.width="8px";
        spark.style.height="8px";

        spark.style.borderRadius="50%";
        spark.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        spark.style.pointerEvents="none";
        spark.style.zIndex="99999";

        document.body.appendChild(spark);

        const angle=Math.random()*Math.PI*2;
        const distance=40+Math.random()*60;

        spark.animate(

        [

        {
            transform:"translate(0,0) scale(1)",
            opacity:1
        },

        {
            transform:
            `translate(${Math.cos(angle)*distance}px,
            ${Math.sin(angle)*distance}px)
            scale(0)`,

            opacity:0
        }

        ],

        {

            duration:700,
            easing:"ease-out"

        });

        setTimeout(()=>{

            spark.remove();

        },700);

    }

}

console.log("✅ Game2 Part-1 Loaded");
/*=========================================
        KEY COLLECTION
=========================================*/

function checkKeyCollection(){

    if(!gameRunning) return;

    keys.forEach((key)=>{

        if(!key) return;

        if(key.dataset.collected==="true") return;

        if(isTouching(teddy,key)){

            key.dataset.collected="true";

            collectedKeys++;

            keyCounter.textContent=collectedKeys;

            const rect=key.getBoundingClientRect();

            createSpark(
                rect.left+20,
                rect.top+20
            );

            if(keySound){

                keySound.currentTime=0;
                keySound.play().catch(()=>{});

            }

            key.style.transition=".4s";
            key.style.transform="scale(2)";
            key.style.opacity="0";

            setTimeout(()=>{

                key.remove();

            },400);

            updateSpeech();

            if(collectedKeys>=3){

                unlockGift();

            }

        }

    });

}

/*=========================================
        TEDDY DIALOGUE
=========================================*/

function updateSpeech(){

    switch(collectedKeys){

        case 0:

        speechBubble.innerHTML=
        "💖 Let's find all 3 magical keys!";
        break;

        case 1:

        speechBubble.innerHTML=
        "🌸 Great! Only 2 keys left!";
        break;

        case 2:

        speechBubble.innerHTML=
        "✨ Amazing! Just one more key!";
        break;

        case 3:

        speechBubble.innerHTML=
        "🎁 Gift unlocked! Touch the gift!";
        break;

    }

}

/*=========================================
        GIFT UNLOCK
=========================================*/

function unlockGift(){

    if(giftUnlocked) return;

    giftUnlocked=true;

    speechBubble.innerHTML=
    "🎉 Hurry! Touch the Birthday Gift!";

    giftBox.style.animation=
    "giftGlow .7s infinite alternate";

    giftBox.style.boxShadow=
    "0 0 45px gold";

}

/*=========================================
        GIFT TOUCH
=========================================*/

function checkGiftTouch(){

    if(!giftUnlocked) return;

    if(!gameRunning) return;

    if(isTouching(teddy,giftBox)){

        gameRunning=false;

        giftUnlocked=false;

        giftBox.style.animation="none";

        if(giftSound){

            giftSound.currentTime=0;
            giftSound.play().catch(()=>{});

        }

        setTimeout(()=>{

            if(winSound){

                winSound.currentTime=0;
                winSound.play().catch(()=>{});

            }

        },500);

        createConfetti();

        popup.style.display="flex";

    }

}

/*=========================================
        OPEN GIFT BUTTON
=========================================*/

openGift.onclick=()=>{

    window.location.href="final.html";

};

/*=========================================
        CONFETTI
=========================================*/

function createConfetti(){

    for(let i=0;i<150;i++){

        const c=document.createElement("div");

        c.style.position="fixed";
        c.style.left=Math.random()*window.innerWidth+"px";
        c.style.top="-20px";

        c.style.width=(5+Math.random()*8)+"px";
        c.style.height=(8+Math.random()*12)+"px";

        c.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        c.style.borderRadius="4px";

        c.style.pointerEvents="none";

        confetti.appendChild(c);

        c.animate(

        [

        {
            transform:"translateY(0) rotate(0deg)",
            opacity:1
        },

        {
            transform:
            `translateY(${window.innerHeight+120}px)
            rotate(${720+Math.random()*720}deg)`,

            opacity:1
        }

        ],

        {

            duration:3000+Math.random()*2000,
            easing:"linear"

        });

        setTimeout(()=>{

            c.remove();

        },5000);

    }

}

/*=========================================
        STARS
=========================================*/

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.className="star";

    const s=Math.random()*3+1;

    star.style.width=s+"px";
    star.style.height=s+"px";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    stars.appendChild(star);

}

/*=========================================
        PARTICLES
=========================================*/

function createParticle(){

    const p=document.createElement("div");

    p.className="particle";

    const size=Math.random()*6+4;

    p.style.width=size+"px";
    p.style.height=size+"px";

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=
    (5+Math.random()*4)+"s";

    particles.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },9000);

}

setInterval(createParticle,200);

console.log("✅ Game2 Part-2 Loaded");
/*=========================================
            GAME LOOP
=========================================*/

function gameLoop(){

    if(gameRunning){

        moveTeddy();

        checkKeyCollection();

        checkGiftTouch();

    }

    requestAnimationFrame(gameLoop);

}

gameLoop();

/*=========================================
        WINDOW RESIZE
=========================================*/

window.addEventListener("resize",()=>{

    const area=gameArea.getBoundingClientRect();

    teddyX=Math.min(
        teddyX,
        area.width-70
    );

    teddyY=Math.min(
        teddyY,
        area.height-70
    );

    teddy.style.left=teddyX+"px";
    teddy.style.top=teddyY+"px";

});

/*=========================================
        INITIAL POSITION
=========================================*/

teddy.style.left=teddyX+"px";
teddy.style.top=teddyY+"px";

/*=========================================
        KEY RESET
=========================================*/

keys.forEach((key)=>{

    if(key){

        key.dataset.collected="false";

        key.style.opacity="1";
        key.style.transform="scale(1)";
        key.style.display="flex";

    }

});

/*=========================================
        GIFT EFFECT
=========================================*/

setInterval(()=>{

    if(!giftUnlocked) return;

    giftBox.animate(

    [

    {
        transform:"translateY(0px) scale(1)"
    },

    {
        transform:"translateY(-6px) scale(1.05)"
    },

    {
        transform:"translateY(0px) scale(1)"
    }

    ],

    {

        duration:900

    });

},900);

/*=========================================
        TEDDY IDLE ANIMATION
=========================================*/

setInterval(()=>{

    if(!gameRunning) return;

    teddy.animate(

    [

    {
        transform:"translateY(0px)"
    },

    {
        transform:"translateY(-4px)"
    },

    {
        transform:"translateY(0px)"
    }

    ],

    {

        duration:400

    });

},500);

/*=========================================
        HINT MESSAGE
=========================================*/

setTimeout(()=>{

    if(collectedKeys===0 && gameRunning){

        speechBubble.innerHTML=
        "🌸 Try searching near the flowers!";

    }

},20000);

/*=========================================
        SECOND HINT
=========================================*/

setTimeout(()=>{

    if(collectedKeys<2 && gameRunning){

        speechBubble.innerHTML=
        "☁️ Maybe one key is hiding near the clouds...";

    }

},35000);

/*=========================================
        THIRD HINT
=========================================*/

setTimeout(()=>{

    if(collectedKeys<3 && gameRunning){

        speechBubble.innerHTML=
        "🎁 The last key is close to the gift...";

    }

},50000);

/*=========================================
        PREVENT PAGE SCROLL
=========================================*/

window.addEventListener("keydown",(e)=>{

    if(

        e.key==="ArrowUp" ||
        e.key==="ArrowDown" ||
        e.key==="ArrowLeft" ||
        e.key==="ArrowRight" ||
        e.key===" "

    ){

        e.preventDefault();

    }

});

/*=========================================
        READY
=========================================*/

console.clear();

console.log("%c🎁 GAME 2 READY ❤️",
"font-size:22px;color:#ff4da6;font-weight:bold");

console.log("🧸 Teddy Spawned");
console.log("🔑 Hidden Keys Loaded");
console.log("🎉 Gift Waiting");
console.log("💖 Happy Birthday Surprise Ready!");
document.getElementById("openGift").onclick = function () {

    window.location.href = "gift.html";

};