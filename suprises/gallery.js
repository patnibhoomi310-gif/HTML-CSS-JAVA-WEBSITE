/*=========================================
        ELEMENTS
=========================================*/

const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const teddySpeech = document.querySelector(".speech");

let currentIndex = 0;

/*=========================================
        MESSAGES
=========================================*/

const messages = [
    "💖 This is our first memory!",
    "😄 We look so cute together!",
    "🧸 My favorite moment with you!",
    "❤️ I want more memories like this!"
];

/*=========================================
        SHOW SLIDE
=========================================*/

function showSlide(index){

    slides.forEach((slide,i)=>{

        slide.classList.remove("active");

        if(i === index){
            slide.classList.add("active");
        }

    });

    // teddy text change
    if(teddySpeech){
        teddySpeech.innerHTML = messages[index] || "💖 Love you!";
    }

}

/*=========================================
        NEXT BUTTON
=========================================*/

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= slides.length){
        currentIndex = 0;
    }

    showSlide(currentIndex);
});

/*=========================================
        PREV BUTTON
=========================================*/

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = slides.length - 1;
    }

    showSlide(currentIndex);
});

/*=========================================
        AUTO SLIDER
=========================================*/

setInterval(()=>{

    currentIndex++;

    if(currentIndex >= slides.length){
        currentIndex = 0;
    }

    showSlide(currentIndex);

},4000);

/*=========================================
        INIT
=========================================*/

showSlide(currentIndex);