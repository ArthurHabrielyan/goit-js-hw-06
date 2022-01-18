function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonsArray = document.querySelectorAll("button");
const boxes = document.getElementById("boxes");
const inputEl = document.querySelector("input");
buttonsArray[0].addEventListener("click", getAmount);
buttonsArray[1].addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = +inputEl.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.width = size + "px";
    div.style.height = size + "px";
    const color = getRandomHexColor();
    div.style.backgroundColor = color;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
