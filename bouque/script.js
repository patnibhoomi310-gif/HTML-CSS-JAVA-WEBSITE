const cover = document.getElementById("cover");
const flowerPage = document.getElementById("flowerPage");
const message = document.getElementById("message");



/* 
   OPEN BOUQUET
*/


function openBouquet(){


    cover.style.transform = "rotateY(90deg)";

    cover.style.opacity = "0";


    setTimeout(()=>{


        flowerPage.classList.add("show");


    },500);



}





/*
   SHOW MESSAGE CARD
*/


function showMessage(){


    flowerPage.style.transform =
    "scale(0)";


    flowerPage.style.opacity =
    "0";



    setTimeout(()=>{


        message.classList.add("show");


    },500);


}





/*
   CLOSE GIFT
*/


function closeGift(){


    document.querySelector(".bouquet-container")
    .style.transform =
    "scale(0) rotate(360deg)";


    document.querySelector(".bouquet-container")
    .style.transition =
    "1s ease";



    setTimeout(()=>{


        document.body.innerHTML = `

        <div class="end">

            <h1>
            💐 Thank You 💐
            </h1>

            <p>
            Hope you liked this flower surprise ❤️
            </p>


        </div>

        `;



        let style=document.createElement("style");


        style.innerHTML=`

        .end{

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
            #ffe9b5
            );

            text-align:center;

        }


        .end h1{

            font-size:60px;

            color:#ff4f81;

            font-family:'Great Vibes';

        }


        .end p{

            font-size:20px;

            color:#555;

        }


        `;


        document.head.appendChild(style);



    },1000);



}







/*
   Floating Hearts Effect
*/


function createHeart(){


    let heart=document.createElement("div");


    heart.innerHTML="❤️";


    heart.style.position="fixed";

    heart.style.left=
    Math.random()*100+"vw";


    heart.style.bottom="-20px";


    heart.style.fontSize=
    Math.random()*20+20+"px";


    heart.style.animation=
    "heartFloat 5s linear";


    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },5000);


}



setInterval(createHeart,700);






/* Heart Animation */


let css=document.createElement("style");


css.innerHTML=`

@keyframes heartFloat{


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

`;


document.head.appendChild(css);