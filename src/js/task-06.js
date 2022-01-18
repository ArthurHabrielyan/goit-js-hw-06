const inputEl = document.querySelector("input#validation-input");

console.log(inputEl.dataset.length);

inputEl.addEventListener("blur", onInputValidation);

function onInputValidation(event) {
  console.log(event.currentTarget.value.length);
  if (inputEl.dataset.length <= event.currentTarget.value.length) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
  if (inputEl.dataset.length <= event.currentTarget.value.length) {
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
  }
}
