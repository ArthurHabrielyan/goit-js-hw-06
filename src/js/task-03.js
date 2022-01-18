const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEL = document.querySelector(".gallery");

const imagesFunction = () => {
  const imageArray = [];
  images.forEach((image) => {
    const imageLiItem = document.createElement("li");
    const imageItem = document.createElement("img");
    imageItem.setAttribute("src", image.url);
    imageItem.setAttribute("alt", image.alt);
    imageLiItem.appendChild(imageItem);
    imageArray.push(imageLiItem);
  });
  galleryEL.append(...imageArray);
};

imagesFunction();
