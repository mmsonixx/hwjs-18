import { trees } from "./data-trees.js";

const listTrees = document.querySelector(".tree__list");

function renderTrees(infoTree, container) {
  const html = infoTree.reduce((acc, element) => {
    return (acc += `
        <li class="tree__item">
    <atticle class="tree">
  <div class="tree__container">
      <img src="${element.image}" alt="${element.name}" class="img">
        </div>
         <div class="tree__wrapper">
      <h2 class="tree__title">${element.name}</h2>
      <p class="tree__text">${element.description}</p>
      <p class="tree__info">Де росте: <span class = "span"> ${element.location.join(", ")}</span> </p>
       </div>
     <p class="tree__type"> ${element.rare ? ` <svg class="icon icon-star-svgrepo-com"><use href="./img/symbol-defs.svg#icon-star-svgrepo-com"></use> </svg> Рідкісне` : "Звичайне"}</p>
    </atticle>
  </li>
            `);
  }, "");
  container.innerHTML = html;
}
renderTrees(trees, listTrees);
const text = document.querySelectorAll(".tree__type");

text.forEach((item) => {
  if (item.textContent.includes("Рідкісне")) {
        item.style.backgroundImage = "linear-gradient(to right, rgba(255,230,0,0.2), rgba(255,0,0,0.2))";
    }
});

//1
const categories = document.querySelectorAll(".item");
console.log(`У списку ${categories.length} категорії.`);

console.log(categories)
function searchCategories(arrItem, nameCategories) {
  arrItem.forEach(element => {
    if (element.firstElementChild.textContent === nameCategories) {
      console.log(`Категорія: ${nameCategories}
Кількість елементів: ${element.lastElementChild.querySelectorAll("li").length}`);
    }
})
}
searchCategories(categories, "Тварини");
searchCategories(categories, "Продукти");
searchCategories(categories, "Технології");

//2
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const listIngredients = document.querySelector("#ingredients");
const ingredientsAll = [];

ingredients.forEach(element => {
  const itemIngredient = document.createElement("li");
  const textIngredient = document.createElement("p");
  itemIngredient.append(textIngredient);
  itemIngredient.classList.add("item__ingredients");
  textIngredient.classList.add("text__ingredients");
  textIngredient.textContent = element;
  ingredientsAll.push(itemIngredient);
});
listIngredients.append(...ingredientsAll);

//3
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

const listGallery = document.querySelector('#gallery');
function renderImages(imges, container) {
  const html = imges.reduce((acc, element) => { 
    return (acc += `
       <li class="gallery__item"> <img class = "gallery__img" src="${element.url}" alt="${element.alt}"></li>
      `);
  }, "");
  container.insertAdjacentHTML('beforeend',html);
}
renderImages(images, listGallery);

//4
let count = 0;
const counterEl = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action= "decrement"]');
  incrementBtn.addEventListener("click", () => {
    count++;
    counterEl.textContent = count;
  });

  decrementBtn.addEventListener("click", () => {
    count--;
    counterEl.textContent = count;
  });
