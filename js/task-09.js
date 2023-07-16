function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector(".color");
const button = document.querySelector(".change-color");
const body = document.body;

function backgroundColor() {
  const color = getRandomHexColor();
  body.style.background = color;
  document.querySelector(".color").textContent = color;
}

button.addEventListener("click", backgroundColor);
