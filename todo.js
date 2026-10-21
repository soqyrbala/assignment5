// Tasks live in an array (no localStorage), as required.
let tasks = [];
const input = document.getElementById("taskInput");
const listEl = document.getElementById("tasks");
const emptyEl = document.getElementById("empty");

function render() {
  listEl.innerHTML = "";
  emptyEl.hidden = tasks.length > 0;
  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    if (task.done) li.classList.add("done");

    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = task.done;
    check.setAttribute("aria-label", "Mark as completed");
    check.addEventListener("change", () => { task.done = check.checked; render(); });

    const label = document.createElement("span");
    label.textContent = task.text;

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener("click", () => { tasks.splice(i, 1); render(); });

    li.append(check, label, del);
    listEl.appendChild(li);
  });
}

function addTask() {
  const value = input.value.trim();
  if (!value) { input.focus(); return; }
  tasks.push({ text: value, done: false });
  input.value = "";
  input.focus();
  render();
}
document.getElementById("taskBtn").addEventListener("click", addTask);
input.addEventListener("keydown", e => { if (e.key === "Enter") addTask(); });
render();
