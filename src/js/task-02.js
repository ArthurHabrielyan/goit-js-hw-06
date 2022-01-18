const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientList = document.querySelector("ul#ingredients");

const ingredientsNamer = () => {
  const ingredientArray = [];
  ingredients.forEach((ingredient) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.textContent = ingredient;
    ingredientItem.classList.add("item");
    ingredientArray.push(ingredientItem);
  });
  ingredientList.append(...ingredientArray);
};

ingredientsNamer();
