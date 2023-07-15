const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const items = ingredients.map((ingredient) => {
  const liItems = document.createElement("li");
  liItems.textContent = ingredient;
  liItems.classList.add("item");

  return liItems;
});
list.append(...items);

console.log(items);
