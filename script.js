// DOM elements
const entryCard = document.getElementById('entryCard');
const mainContent = document.getElementById('mainContent');
const bgMusic = document.getElementById('bgMusic');

// Entry card click
entryCard.addEventListener('click', () => {
    entryCard.style.display = 'none';
    mainContent.style.display = 'flex';
    bgMusic.play();
    startConfetti();
});

// Slider
const slides = document.querySelector('.slides');
const images = slides.querySelectorAll('img');
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex+1) % images.length;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex-1+images.length) % images.length;
    updateSlider();
});

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex*100}%)`;
}

// Auto slide
setInterval(() => {
    currentIndex = (currentIndex+1) % images.length;
    updateSlider();
}, 4000);

// Confetti animation
function startConfetti() {
    const colors = ['#ff0','#f0f','#0ff','#f00','#0f0','#00f','#ff8800'];
    setInterval(() => {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random()*100 + 'vw';
        confetti.style.background = colors[Math.floor(Math.random()*colors.length)];
        confetti.style.width = confetti.style.height = Math.random()*10+5+'px';
        confetti.style.animationDuration = Math.random()*3+2+'s';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }, 100);
}
