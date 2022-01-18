const counterValue = document.querySelector("span#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counter = 0;

decrementBtn.addEventListener("click", () => {
  counterValue.textContent = counter -= 1;
});

incrementBtn.addEventListener("click", () => {
  counterValue.textContent = counter += 1;
});
