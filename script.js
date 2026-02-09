const music = document.getElementById("bgMusic");
const message = document.getElementById("giftMessage");

function openGift() {
  message.style.display = "block";
  music.play();

  // Confetti effect (simple)
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "🤍";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "20px";
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
