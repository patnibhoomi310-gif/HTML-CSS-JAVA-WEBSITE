/*=========================================
        ELEMENTS
=========================================*/

const introScreen = document.getElementById("introScreen");
const startBtn = document.getElementById("startBtn");

const loader = document.getElementById("loader");

const gameArea = document.getElementById("gameArea");

const teddy = document.getElementById("teddy");
const monster = document.getElementById("monster");

const popup = document.getElementById("popup");
const gameOver = document.getElementById("gameOver");

const nextLevel = document.getElementById("nextLevel");
const restartGame = document.getElementById("restartGame");

const scoreText = document.getElementById("score");

const bgMusic = document.getElementById("bgMusic");
const heartSound = document.getElementById("heartSound");
const winSound = document.getElementById("winSound");
const loseSound = document.getElementById("loseSound");

/*=========================================
        VARIABLES
=========================================*/

let score = 0;

let gameRunning = false;

let heart = null;

/* Teddy */

let teddyX = 100;
let teddyY = 300;

const teddySpeed = 6;

/* Monster */

let monsterX = window.innerWidth - 180;
let monsterY = 180;

const monsterSpeed = 2;

/* Keyboard */

const keys = {};

/*=========================================
        LOADER
=========================================*/

window.onload = () => {

    setTimeout(() => {

        loader.style.display = "none";

    },3000);

};

/*=========================================
        START GAME
=========================================*/

startBtn.onclick = () => {

    introScreen.style.display = "none";

    gameRunning = true;

    if(bgMusic){

        bgMusic.volume = 0.4;

        bgMusic.play().catch(()=>{});

    }

};

/*=========================================
        KEYBOARD
=========================================*/

document.addEventListener("keydown",(e)=>{

    keys[e.key.toLowerCase()] = true;

});

document.addEventListener("keyup",(e)=>{

    keys[e.key.toLowerCase()] = false;

});

/*=========================================
        TEDDY MOVE
=========================================*/

function moveTeddy(){

    if(!gameRunning) return;

    if(keys["arrowleft"] || keys["a"])
        teddyX -= teddySpeed;

    if(keys["arrowright"] || keys["d"])
        teddyX += teddySpeed;

    if(keys["arrowup"] || keys["w"])
        teddyY -= teddySpeed;

    if(keys["arrowdown"] || keys["s"])
        teddyY += teddySpeed;

    teddyX = Math.max(0,
        Math.min(window.innerWidth-80,teddyX));

    teddyY = Math.max(90,
        Math.min(window.innerHeight-90,teddyY));

    teddy.style.left = teddyX+"px";
    teddy.style.top = teddyY+"px";

}

/*=========================================
        HEART SPAWN
=========================================*/

function spawnHeart(){

    if(heart) heart.remove();

    heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left =
        Math.random()*(window.innerWidth-120)+"px";

    heart.style.top =
        (100+Math.random()*(window.innerHeight-220))+"px";

    gameArea.appendChild(heart);

}

spawnHeart();
/*=========================================
        MONSTER AI
=========================================*/

function moveMonster(){

    if(!gameRunning) return;

    let dx = teddyX - monsterX;
    let dy = teddyY - monsterY;

    let distance = Math.sqrt(dx*dx + dy*dy);

    if(distance > 1){

        monsterX += (dx/distance) * monsterSpeed;
        monsterY += (dy/distance) * monsterSpeed;

    }

    monster.style.left = monsterX + "px";
    monster.style.top = monsterY + "px";

}

/*=========================================
        HEART COLLECT
=========================================*/

function checkHeartCollect(){

    if(!heart || !gameRunning) return;

    const teddyRect = teddy.getBoundingClientRect();
    const heartRect = heart.getBoundingClientRect();

    if(

        teddyRect.left < heartRect.right &&
        teddyRect.right > heartRect.left &&
        teddyRect.top < heartRect.bottom &&
        teddyRect.bottom > heartRect.top

    ){

        score++;

        scoreText.textContent = score;

        if(heartSound){

            heartSound.currentTime = 0;
            heartSound.play().catch(()=>{});

        }

        createSpark(
            heartRect.left + 20,
            heartRect.top + 20
        );

        heart.remove();

        heart = null;

        if(score >= 10){

            gameRunning = false;

            if(winSound){

                winSound.play().catch(()=>{});

            }

            popup.style.display = "flex";

        }
        else{

            spawnHeart();

        }

    }

}

/*=========================================
        SPARK EFFECT
=========================================*/

function createSpark(x,y){

    for(let i=0;i<14;i++){

        const spark=document.createElement("div");

        spark.style.position="fixed";
        spark.style.left=x+"px";
        spark.style.top=y+"px";

        spark.style.width="8px";
        spark.style.height="8px";

        spark.style.borderRadius="50%";
        spark.style.background="hotpink";

        spark.style.pointerEvents="none";
        spark.style.zIndex="99999";

        document.body.appendChild(spark);

        const angle=Math.random()*Math.PI*2;
        const dist=40+Math.random()*50;

        spark.animate(

        [

        {
        transform:"translate(0,0) scale(1)",
        opacity:1
        },

        {
        transform:`translate(${Math.cos(angle)*dist}px,
        ${Math.sin(angle)*dist}px)
        scale(0)`,

        opacity:0

        }

        ],

        {

        duration:600,
        easing:"ease-out"

        });

        setTimeout(()=>{

            spark.remove();

        },600);

    }

}

/*=========================================
        MONSTER HIT
=========================================*/

function checkMonsterHit(){

    if(!gameRunning) return;

    const teddyRect=teddy.getBoundingClientRect();
    const monsterRect=monster.getBoundingClientRect();

    if(

        teddyRect.left < monsterRect.right &&
        teddyRect.right > monsterRect.left &&
        teddyRect.top < monsterRect.bottom &&
        teddyRect.bottom > monsterRect.top

    ){

        gameRunning=false;

        if(loseSound){

            loseSound.play().catch(()=>{});

        }

        gameOver.style.display="flex";

    }



}
/*=========================================
        STARS
=========================================*/

const stars = document.getElementById("stars");

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.className="star";

    const size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*window.innerWidth+"px";
    star.style.top=Math.random()*window.innerHeight+"px";

    star.style.animationDelay=Math.random()*3+"s";

    stars.appendChild(star);

}

/*=========================================
        PARTICLES
=========================================*/

const particles=document.getElementById("particles");

function createParticle(){

    const p=document.createElement("div");

    p.className="particle";

    const size=Math.random()*8+3;

    p.style.width=size+"px";
    p.style.height=size+"px";

    p.style.left=Math.random()*window.innerWidth+"px";

    p.style.animationDuration=(5+Math.random()*5)+"s";

    particles.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },10000);

}

setInterval(createParticle,200);

/*=========================================
        GAME LOOP
=========================================*/

function gameLoop(){

    moveTeddy();

    moveMonster();

    checkHeartCollect();

    checkMonsterHit();

    requestAnimationFrame(gameLoop);

}

gameLoop();

/*=========================================
        BUTTONS
=========================================*/

restartGame.onclick=()=>{

    location.reload();

};

nextLevel.onclick=()=>{

    window.location.href="game2.html";

};

/*=========================================
        RESIZE
=========================================*/

window.addEventListener("resize",()=>{

    teddyX=Math.min(teddyX,window.innerWidth-80);

    teddyY=Math.min(teddyY,window.innerHeight-90);

    monsterX=Math.min(monsterX,window.innerWidth-80);

    monsterY=Math.min(monsterY,window.innerHeight-90);

});

/*=========================================
        MESSAGE HIDE
=========================================*/

setTimeout(()=>{

    const msg=document.getElementById("gameMessage");

    if(msg){

        msg.style.transition="1s";

        msg.style.opacity="0";

        setTimeout(()=>{

            msg.style.display="none";

        },1000);

    }

},6000);

/*=========================================
        INITIAL POSITION
=========================================*/

teddy.style.left=teddyX+"px";
teddy.style.top=teddyY+"px";

monster.style.left=monsterX+"px";
monster.style.top=monsterY+"px";

/*=========================================
        READY
=========================================*/

console.log("🎮 Save Teddy Loaded Successfully ❤️");