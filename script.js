const wishButton = document.getElementById("wishButton");
const prayButton = document.getElementById("prayButton");
const wishText = document.getElementById("wishText");
const floatingHearts = document.querySelector(".floating-hearts");

const wishMessage = `
Happy Birthday, beautiful! May your day be wrapped in warmth, lit with joy,
filled with sweet surprises, and surrounded by love. You deserve every smile today.
`;

const prayerMessage = `
I pray that God blesses you with peace, strength, and endless happiness.
May your year ahead be filled with dreams coming true and your heart always safe.
`;

function typeMessage(text) {
  wishText.textContent = "";
  const chars = [...text];
  let index = 0;

  const interval = setInterval(() => {
    wishText.textContent += chars[index++] || "";
    if (index >= chars.length) {
      clearInterval(interval);
    }
  }, 28);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  const size = Math.random() * 20 + 18;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.left = `${Math.random() * 94 + 2}%`;
  heart.style.animationDuration = `${Math.random() * 3 + 4}s`;
  heart.style.opacity = `${Math.random() * 0.4 + 0.6}`;
  floatingHearts.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

function burstHearts() {
  for (let i = 0; i < 12; i += 1) {
    setTimeout(createHeart, i * 120);
  }
}

function showWish(message) {
  typeMessage(message);
  burstHearts();
}

wishButton.addEventListener("click", () => showWish(wishMessage));
prayButton.addEventListener("click", () => showWish(prayerMessage));

// Start with a gentle welcome heart burst
window.addEventListener("load", () => {
  burstHearts();
});
