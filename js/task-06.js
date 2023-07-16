const nameInput = document.querySelector("#validation-input");

nameInput.addEventListener("blur", (event) => {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
  } else {
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
  }
});
// console.log(nameInput.value.length);
// console.log(nameInput.dataset.length);
