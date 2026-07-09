
//=========================================
//          ELEMENTS
//=========================================


const pages = document.querySelectorAll(".page");

const nextButtons = document.querySelectorAll(".next-btn");

const closeBtn = document.querySelector(".close-book");

const music = document.getElementById("bgMusic");


let currentPage = 0;




//=========================================
//          PAGE TURN FUNCTION
//=========================================


nextButtons.forEach(button => {


    button.addEventListener("click",()=>{


        if(currentPage < pages.length - 1){


            pages[currentPage].classList.add("flip");


            currentPage++;


            pages[currentPage].classList.add("active");


            createSparkles();


            createHearts();


        }


    });


});




//=========================================
//          OPEN MUSIC
//=========================================


document.body.addEventListener("click",()=>{


    if(music){


        music.play()
        .catch(()=>{});


    }


},{once:true});






//=========================================
//          SPARKLE CREATOR
//=========================================


function createSparkles(){



    for(let i=0;i<15;i++){


        let sparkle=document.createElement("div");


        sparkle.className="sparkle";


        sparkle.innerHTML="✨";



        sparkle.style.left=
        Math.random()*100+"%";



        sparkle.style.top=
        Math.random()*100+"%";



        document.body.appendChild(sparkle);



        setTimeout(()=>{


            sparkle.remove();


        },2000);



    }



}






//=========================================
//          HEART CREATOR
//=========================================


function createHearts(){



    for(let i=0;i<10;i++){


        let heart=document.createElement("div");


        heart.className="heart";


        heart.innerHTML="❤️";



        heart.style.left=
        Math.random()*100+"%";



        heart.style.animationDelay=
        Math.random()*3+"s";



        document.body.appendChild(heart);



        setTimeout(()=>{


            heart.remove();


        },5000);



    }


}






//=========================================
//          CLOSE BOOK
//=========================================


if(closeBtn){


closeBtn.addEventListener("click",()=>{



    pages.forEach(page=>{


        page.style.transform=
        "rotateY(-180deg)";


    });



    createSparkles();

    createHearts();



    setTimeout(()=>{


        alert(
        "❤️ The End... But Our Story Continues ❤️"
        );


    },1200);



});

}




//=========================================
//          RANDOM FLOATING SPARKLES
//=========================================


setInterval(()=>{


    let sparkle=document.createElement("div");


    sparkle.className="sparkle";


    sparkle.innerHTML="✨";


    sparkle.style.left=
    Math.random()*window.innerWidth+"px";


    sparkle.style.top=
    Math.random()*window.innerHeight+"px";


    document.body.appendChild(sparkle);



    setTimeout(()=>{


        sparkle.remove();


    },2000);



},1500);