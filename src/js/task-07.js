const inputEl = document.querySelector("input#font-size-control");
console.dir(inputEl);
const spanEl = document.querySelector("span#text");

inputEl.addEventListener("input", onChangeSpanSize);

function onChangeSpanSize(event) {
  spanEl.style.fontSize = event.currentTarget.value + "px";
}
