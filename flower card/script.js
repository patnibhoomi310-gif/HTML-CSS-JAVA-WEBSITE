let currentCard = 1;

const totalCards = 5;



/*
    NEXT CARD FUNCTION
*/


function nextCard(){


    if(currentCard < totalCards){


        let oldCard = document.getElementById(
            "card" + currentCard
        );


        let newCard = document.getElementById(
            "card" + (currentCard + 1)
        );



        oldCard.classList.remove("active");



        setTimeout(()=>{


            newCard.classList.add("active");


        },500);



        currentCard++;


    }


}






/*
    CLOSE GIFT FUNCTION
*/


function closeCards(){


    let container =
    document.querySelector(".card-container");



    container.style.transform =
    "scale(0) rotate(360deg)";


    container.style.transition =
    "1s ease";



    setTimeout(()=>{


        document.body.innerHTML = `


        <div class="end-page">


            <h1>
            🌸 Thank You 🌸
            </h1>


            <p>
            Hope you liked this flower card surprise ❤️
            </p>


        </div>


        `;



    },1000);



}







/*
    FLOATING HEARTS EFFECT
*/


function createHeart(){


    let heart =
    document.createElement("div");


    heart.innerHTML="❤️";


    heart.style.position="fixed";


    heart.style.left =
    Math.random()*100+"vw";


    heart.style.bottom="-20px";


    heart.style.fontSize =
    Math.random()*20+15+"px";



    heart.style.animation =
    "heartMove 5s linear";



    document.body.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },5000);



}



setInterval(createHeart,700);






/*
    Add Animation CSS
*/


let style =
document.createElement("style");


style.innerHTML = `


@keyframes heartMove{


from{


transform:
translateY(0)
rotate(0deg);


opacity:1;


}



to{


transform:
translateY(-110vh)
rotate(360deg);



opacity:0;


}



}



.end-page{


height:100vh;

width:100%;


display:flex;


flex-direction:column;


justify-content:center;


align-items:center;



background:

linear-gradient(
135deg,
#ffd6e7,
#fff3b0
);


text-align:center;


}



.end-page h1{


font-family:'Great Vibes';


font-size:60px;


color:#ff4f81;


}



.end-page p{


font-size:20px;


color:#555;


}



`;



document.head.appendChild(style);