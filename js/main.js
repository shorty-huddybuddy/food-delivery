//active navbar
let nav=document.querySelector("navbar-wrap");
let topBanner=document.querySelector(".top-banner");
window.onscroll=function(){
    if(document.documentElement.scrollTop >10){
        nav.classList.add("scroll-on");
    }
    else {
        nav.classList.remove("scroll-on");
    }
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  var saladPosition = 160; // replace with estimated position
  console.log(document.body.scrollTop);
  if (document.body.scrollTop > saladPosition || document.documentElement.scrollTop > saladPosition) {
      navbar.style.boxShadow = "none";
} else {
    navbar.style.boxShadow = "0px 10px 20px rgb (0,0,0,0.009)";
  }
}

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  var salad=topBanner.offsetTop;
  console.log(salad);
  if (document.body.scrollTop > salad || document.documentElement.scrollTop > salad) {
    navbar.style.boxShadow = "0px 10px 20px rgba(0,0,0,0.9)";
  } else {
    navbar.style.boxShadow = "none";
  }
}


// counter design js

document.addEventListener("DOMContentLoaded",()=>{
    function counter(id ,start,end ,duration){
        let obj=document.getElementById(id);
        current=start;
        range=end-start;
        increment=end>start ?1 : -1;
        step=Math.abs(Math.floor(duration/range));
        timer=setInterval(()=>  {
            current+=increment;
            obj.textContent=current;
            if(current==end){
                clearInterval(timer);
            }
        },step);

    }
    counter("count1",0,1287,3000);
    counter("count2",100,5700,2500);
    counter("count3",0,1440,3000);        
    counter("count4",0,7110,2000);
});


// navhide

let navlink=document.querySelectorAll('.nav-link');
let navcollapse=document.querySelector('.navbar-collapse.collapse');
 navlink.forEach(function(a) {
    a.addEventListener("click",function(){
        navcollapse.classList.remove("show")
    })
 })
    

 // nav hide 
// let navBar = document.querySelectorAll('.nav-link');
// let navCollapse = document.querySelector('.navbar-collapse.collapse');
// navBar.forEach(function(a){
//     a.addEventListener("click", function(){
//         navCollapse.classList.remove("show");
//     })
// })


