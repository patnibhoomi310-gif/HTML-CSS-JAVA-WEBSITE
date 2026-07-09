// ==========================
// PAGE NAVIGATION
// ==========================

function go(page){
    window.location.href = page;
}


// ==========================
// CAKE PAGE
// ==========================

const flame = document.getElementById("flame");
const blowBtn = document.getElementById("blowBtn");
const nextBtn = document.getElementById("nextBtn");

if(blowBtn){

    nextBtn.style.display = "none";

    blowBtn.addEventListener("click",function(){

        // Flame Off
        flame.style.opacity="0";
        flame.style.transform="scale(0)";

        // Button Change
        blowBtn.innerHTML="🎉 Wish Granted";

        // Confetti
        createConfetti();

        // Show Final Button
        setTimeout(function(){

            nextBtn.style.display="inline-block";

            nextBtn.style.animation="fadeIn 1s";

        },1800);

    });

}



// ==========================
// CONFETTI
// ==========================

function createConfetti(){

    for(let i=0;i<80;i++){

        const confetti=document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top="-20px";

        confetti.style.background=getRandomColor();

        confetti.style.animationDuration=
        (Math.random()*3+2)+"s";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },5000);

    }

}



// ==========================
// RANDOM COLORS
// ==========================

function getRandomColor(){

const colors=[

"#ff4d6d",
"#ffd166",
"#06d6a0",
"#118ab2",
"#8338ec",
"#ffffff",
"#ff99c8",
"#ffbe0b"

];

return colors[Math.floor(Math.random()*colors.length)];

}



// ==========================
// STYLE FOR CONFETTI
// ==========================

const style=document.createElement("style");

style.innerHTML=`

.confetti{

position:fixed;

width:10px;

height:18px;

z-index:9999;

animation:fall linear forwards;

}

@keyframes fall{

0%{

transform:translateY(0) rotate(0deg);

}

100%{

transform:translateY(110vh) rotate(720deg);

}

}

@keyframes fadeIn{

from{

opacity:0;

transform:translateY(30px);

}

to{

opacity:1;

transform:translateY(0);

}

}

`;

document.head.appendChild(style);