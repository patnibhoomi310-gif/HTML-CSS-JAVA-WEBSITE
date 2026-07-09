// page transition
function go(page){
document.body.style.opacity="0";
setTimeout(()=>{
window.location.href=page;
},400);
}

// envelope open
function openEnvelope(el){
el.classList.toggle("open");
}

// gallery bg particles (optional light effect)
window.addEventListener("load",()=>{
let bg=document.querySelector(".bg");
if(!bg) return;

for(let i=0;i<20;i++){
let s=document.createElement("span");
s.style.left=Math.random()*100+"%";
s.style.animationDuration=(5+Math.random()*8)+"s";
bg.appendChild(s);
}
});