const entry = document.getElementById("entry");
const music = document.getElementById("music");
const celebration = document.getElementById("celebration");

entry.addEventListener("click", () => {
  entry.style.opacity = "0";
  setTimeout(() => entry.style.display = "none", 800);
  music.play();
  startCelebration();
});

function startCelebration() {
  const emojis = ["🤍","🎉","🎂","💖","✨"];
  for (let i = 0; i < 50; i++) {
    const span = document.createElement("div");
    span.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
    span.style.left = Math.random()*100+"vw";
    span.style.top = Math.random()*100+"vh";
    span.style.fontSize = (15 + Math.random()*25) + "px";
    span.style.position = "fixed";
    span.style.pointerEvents = "none";
    span.style.animation = `floatUp ${3 + Math.random()*3}s linear infinite`;
    celebration.appendChild(span);

    setTimeout(()=>span.remove(),8000);
  }

  // Repeat every few seconds
  setInterval(()=>{
    for(let i=0;i<15;i++){
      const span = document.createElement("div");
      span.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
      span.style.left = Math.random()*100+"vw";
      span.style.top = Math.random()*100+"vh";
      span.style.fontSize = (15 + Math.random()*25) + "px";
      span.style.position = "fixed";
      span.style.pointerEvents = "none";
      span.style.animation = `floatUp ${3 + Math.random()*3}s linear infinite`;
      celebration.appendChild(span);
      setTimeout(()=>span.remove(),8000);
    }
  },2000);
}
