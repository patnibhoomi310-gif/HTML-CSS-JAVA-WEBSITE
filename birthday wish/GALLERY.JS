// ==============================
// PAGE NAVIGATION
// ==============================

function go(page){
    window.location.href = page;
}

// ==============================
// MEMORY GALLERY
// ==============================

const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("nextBtn");
const giftBtn = document.getElementById("giftBtn");

const cards = document.querySelectorAll(".memory-card");

let current = 0;

// Open Envelope
function openEnvelope(){

    envelope.classList.add("open");

    openBtn.style.display = "none";

    setTimeout(function(){

        document.querySelector(".memory-container").style.display="flex";

        cards[0].classList.add("active");

        nextBtn.style.display="inline-block";

    },1000);

}

// Next Memory
function nextMemory(){

    cards[current].classList.remove("active");

    current++;

    if(current < cards.length){

        cards[current].classList.add("active");

    }

    else{

        nextBtn.style.display="none";

        giftBtn.style.display="inline-block";

    }

}