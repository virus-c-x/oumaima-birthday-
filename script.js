const entry = document.getElementById("entry");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("music");
const celebration = document.getElementById("celebration");
const slider = document.getElementById("memorySlider");

// فتح الموقع عند الضغط على الزر
openBtn.addEventListener("click", () => {
  entry.style.opacity = "0";
  setTimeout(()=>entry.style.display="none",800);
  music.play();
  startCelebration();
  cloneSlider();
});

// Memory Slider سلس ومتكرر
function cloneSlider(){
  const imgs = Array.from(slider.children);
  imgs.forEach(img=>{
    const clone = img.cloneNode(true);
    slider.appendChild(clone);
  });
}

// Celebration Effects من الأعلى للأسفل
function startCelebration(){
  const emojis = ["🤍","🎉","🎂","💖","✨"];
  function createEmoji(){
    const span = document.createElement("div");
    span.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
    span.style.left = Math.random()*100+"vw";
    span.style.top = "-10vh";
    span.style.fontSize = (15+Math.random()*25)+"px";
    span.style.position="fixed";
    span.style.pointerEvents="none";
    span.style.animation = `fallDown ${6 + Math.random()*4}s linear forwards`;
    celebration.appendChild(span);
    setTimeout(()=>span.remove(),10000);
  }
  for(let i=0;i<20;i++){ createEmoji(); }
  setInterval(()=>{for(let i=0;i<10;i++){ createEmoji(); }},3000);
}
