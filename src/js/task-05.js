const inputEl = document.querySelector("input#name-input");
const spanEl = document.querySelector("span#name-output");

inputEl.addEventListener("input", onInputEL);

function onInputEL(event) {
  spanEl.textContent = event.currentTarget.value;
}
