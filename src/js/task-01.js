const categoriesListEl = document.querySelector("ul#categories");
const numberOfCategoriesItem = document.querySelectorAll("li.item > h2");
const numberOfElementsList = document.querySelectorAll("li.item > ul");

const nameOfCategories = () => {
  console.log(`Categories: ${categoriesListEl.children.length}`);
  Array.from(numberOfCategoriesItem).forEach((element, index) =>
    console.log(
      `Category: ${element.innerHTML} \nElements: ${numberOfElementsList[index].children.length}`
    )
  );
};

nameOfCategories();
