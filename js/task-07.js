const input = document.querySelector("#font-size-control");
const textInput = document.querySelector("#text");

input.addEventListener("input", handleInput);
function handleInput(event) {
  textInput.style.fontSize = event.currentTarget.value + "px";
}

// console.log(handleInput);
