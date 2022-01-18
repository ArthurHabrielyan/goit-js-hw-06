const emailInputEl = document.querySelector(".login-form");

emailInputEl.addEventListener("submit", onButtonSubmit);
let formData = {};

function onButtonSubmit(event) {
  event.preventDefault();
  const eventElements = event.currentTarget.elements;
  const email = eventElements.email.value;
  const password = eventElements.password.value;
  console.log(email, password);
  if (!email || !password) {
    alert("Все поля должны быть заполнены");
  } else {
    formData = { email, password };
    console.log(formData);
    emailInputEl.reset();
  }
}
