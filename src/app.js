const items = ["Learn Git", "Learn CI", "Deploy App"];

const list = document.getElementById("list");

items.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
});
