const nameInput = document.querySelector("#name-input ");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", handleInput);

let anonymous = "Anonymous";

function handleInput(event) {
  nameOutput.textContent = event.target.value || anonymous;
}
