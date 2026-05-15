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
     <p class="tree__type"> ${element.rare ? ` <svg class="icon icon-star-svgrepo-com"><use href="./symbol-defs.svg#icon-star-svgrepo-com"></use> </svg> Рідкісне` : "Звичайне"}</p>
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

