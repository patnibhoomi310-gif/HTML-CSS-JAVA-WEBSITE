let currentPage = 1;

const totalPages = 5;


/* 
   TURN PAGE FUNCTION
*/

function nextPage(){

    if(currentPage < totalPages){

        let oldPage = document.getElementById(
            "page" + currentPage
        );


        let newPage = document.getElementById(
            "page" + (currentPage + 1)
        );


        oldPage.classList.remove("active");


        setTimeout(()=>{

            newPage.classList.add("active");

        },400);


        currentPage++;

    }

}



/*
    CLOSE GIFT FUNCTION
*/


function closeGift(){

    let container = document.querySelector(
        ".gift-container"
    );


    container.style.transform =
    "scale(0) rotate(360deg)";


    container.style.transition =
    "1s ease";


    setTimeout(()=>{


        document.body.innerHTML =
        `

        <div class="end">

            <h1>
            💖 Gift Closed 💖
            </h1>

            <p>
            Hope you liked this surprise ✨
            </p>

        </div>

        `;


    },1000);


}





/*
    CREATE FLOATING HEARTS
*/


function createHeart(){


    let heart = document.createElement("div");


    heart.innerHTML="❤️";


    heart.style.position="fixed";

    heart.style.left =
    Math.random()*100+"vw";


    heart.style.bottom="-20px";


    heart.style.fontSize =
    Math.random()*25+15+"px";


    heart.style.animation =
    "floatHeart 5s linear";


    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },5000);



}



setInterval(createHeart,500);





/*
    Add Heart Animation CSS Automatically
*/


let style=document.createElement("style");


style.innerHTML=`

@keyframes floatHeart{

    from{

        transform:translateY(0)
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



.end{

height:100vh;

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

text-align:center;

background:
linear-gradient(135deg,#ff9a9e,#fad0c4);

}


.end h1{

font-size:55px;

color:#ff4f81;

}


.end p{

font-size:20px;

color:#555;

}

`;


document.head.appendChild(style);