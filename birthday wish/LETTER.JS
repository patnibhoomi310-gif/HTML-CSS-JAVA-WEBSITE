// ===============================
// PAGE NAVIGATION
// ===============================

function go(page){
    window.location.href = page;
}


// ===============================
// LETTER TYPEWRITER EFFECT
// ===============================

const letter = document.querySelector(".letter-text p");
const nextBtn = document.querySelector(".next-btn");

if(letter){

    const text = letter.innerHTML;

    letter.innerHTML = "";

    let i = 0;

    if(nextBtn){
        nextBtn.style.display = "none";
    }

    function typeLetter(){

        if(i < text.length){

            letter.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeLetter,20);

        }

        else{

            if(nextBtn){

                nextBtn.style.display="block";

                nextBtn.style.animation="fadeButton 1s";

            }

        }

    }

    setTimeout(typeLetter,800);

}


// ===============================
// BUTTON ANIMATION
// ===============================

const style=document.createElement("style");

style.innerHTML=`

@keyframes fadeButton{

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