// theme toggle

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{

document.body.classList.toggle("light");

});


// smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});

});

});


// counter animation

const counters=document.querySelectorAll(".counter");

let started=false;

window.addEventListener("scroll",()=>{

const section=document.querySelector("#about");

const trigger = section.getBoundingClientRect().top;

if(trigger < window.innerHeight && !started){

counters.forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

const update=()=>{

count+=target/200;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});

started=true;

}

});