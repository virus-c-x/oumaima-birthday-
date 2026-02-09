const entry = document.getElementById("entry");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("music");
const celebration = document.getElementById("celebration");
const slider = document.getElementById("memorySlider");

// فتح الموقع
openBtn.addEventListener("click", () => {
  entry.style.opacity = "0";
  setTimeout(()=>entry.style.display="none",800);
  music.play();
  startCelebration();
  cloneSlider();
});

// جعل Slider ذكريات متكرر وسلس
function cloneSlider(){
  const imgs = Array.from(slider.children);
  imgs.forEach(img=>{
    const clone = img.cloneNode(true);
    slider.appendChild(clone);
  });
}

// Celebration Effects
function startCelebration(){
  const emojis = ["🤍","🎉","🎂","💖","✨"];
  function createEmoji(){
    const span = document.createElement("div");
    span.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
    span.style.left = Math.random()*100+"vw";
    span.style.top = Math.random()*100+"vh";
    span.style.fontSize = (15+Math.random()*25)+"px";
    span.style.position="fixed";
    span.style.pointerEvents="none";
    span.style.animation=`floatUp ${3+Math.random()*3}s linear forwards`;
    celebration.appendChild(span);
    setTimeout(()=>span.remove(),5000);
  }
  for(let i=0;i<30;i++){createEmoji();}
  setInterval(()=>{for(let i=0;i<15;i++){createEmoji();}},2000);
}
