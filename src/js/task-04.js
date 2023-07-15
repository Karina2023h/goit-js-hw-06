const decrementBtn = document.querySelector(
  "button[data-action = 'decrement']"
);
const incrementBtn = document.querySelector(
  "button[data-action = 'increment']"
);
const valueBtn = document.querySelector("#value");

let counterValue = 0;

function decrement(event) {
  counterValue -= 1;
  valueBtn.textContent = counterValue;
}

function increment(event) {
  counterValue += 1;
  valueBtn.textContent = counterValue;
}

// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueBtn);

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
// valueBtn.addEventListener("value");
