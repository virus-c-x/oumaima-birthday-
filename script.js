const btn=document.getElementById("giftBtn");
const glass=document.getElementById("glassPage");
const music=document.getElementById("music");

btn.onclick=()=>{

  music.play();

  glass.classList.add("hide");

  setTimeout(()=>{
    glass.style.display="none";
  },700);
}

/* سلايدر */
const imgs=[
"slider1.png",
"slider2.png",
"slider3.png",
"slider4.png",
"slider5.png",
"slider6.png",
"slider7.png"
];

let i=0;
const slider=document.getElementById("slider");

setInterval(()=>{
  slider.style.opacity=0;

  setTimeout(()=>{
    i=(i+1)%imgs.length;
    slider.src=imgs[i];
    slider.style.opacity=1;
  },500);

},2500);
