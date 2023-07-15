const categoriesEl = document.querySelector("#categories");
const items = categoriesEl.querySelectorAll(".item");

console.log(`Number of categories:${items.length}`);

items.forEach((item) => {
  const categorys = item.querySelector("h2").textContent;
  const element = item.querySelectorAll("li").length;

  console.log(`Category:${categorys}`);
  console.log(`Elements:${element}`);
});
