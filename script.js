const entry = document.getElementById("entry");
const music = document.getElementById("music");
const finalText = document.getElementById("finalText");

function enterSite() {
  entry.style.opacity = "0";
  setTimeout(() => entry.style.display = "none", 800);
  music.play();
}

function finalGift() {
  finalText.style.opacity = "1";

  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "🤍";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "22px";
    heart.style.animation = "floatUp 4s ease forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
