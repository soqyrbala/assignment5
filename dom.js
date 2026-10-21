//Task 2
const text = document.getElementById("text");
document.getElementById("textBtn").addEventListener("click", () => {text.textContent = 
  "The paragraph text has been changed!";});

//Task 3
const box = document.getElementById("box");
const colors = ["#ffd6d6", "#d6f0ff", "#d9f7d6", "#fff3c4"];
const sizes = ["16px", "22px", "30px"];
let c = 0, s = 0;
document.getElementById("colorBtn").addEventListener("click", () => {
  box.style.backgroundColor = colors[c++ % colors.length];
  box.style.color = "#1c2333"; // keep text readable in dark mode
});
document.getElementById("sizeBtn").addEventListener("click", () => {
  box.style.fontSize = sizes[++s % sizes.length];
});

//Task 4
const list = document.getElementById("list");
document.getElementById("addBtn").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Item " + (list.children.length + 1);
  list.appendChild(li);
});
document.getElementById("removeBtn").addEventListener("click", () => {
  if (list.lastElementChild) list.removeChild(list.lastElementChild);
});
