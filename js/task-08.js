const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const emailForm = loginForm.elements.email;
  const passwordForm = loginForm.elements.password;

  if (emailForm.value === "" || passwordForm.value === "") {
    alert("Всі поля повинні бути заповнені");
    return;
  }
  const loginData = {
    email: emailForm.value,
    password: passwordForm.value,
  };

  loginForm.reset();

  console.log(loginData);
}

// const login = document.querySelector(".login-form");

// login.addEventListener("submit", (event) => {
//   const loginData = {};
//   event.preventDefault();
//   for (const element of login.elements) {
//     if (element.name) {
//       loginData[element.name] = element.value;
//     }
//   }
//   if (loginData.email && loginData.password) {
//     login.reset();
//   } else {
//     alert("Будь-ласка, всі поля повинні бути заповнені");
//   }
//   console.log(loginData);
//   console.log("Будь-ласка,всі поля повинні бути заповнені");
// });
