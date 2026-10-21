//Task 5
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--hover");
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = ""; // back to the original color
});

//Task 6
const typed = document.getElementById("typed");
typed.addEventListener("keyup", () => {
  document.getElementById("typedOut").textContent = typed.value;
});

//Task 7
const inputA = document.getElementById("a");
const inputB = document.getElementById("b");
const calcOut = document.getElementById("calcOut");

function calculate(op) {
  if (inputA.value === "" || inputB.value === "") {
    calcOut.textContent = "Enter both numbers";
    return;
  }
  const x = Number(inputA.value), y = Number(inputB.value);
  let result;
  switch (op) {
    case "+": result = x + y; break;
    case "-": result = x - y; break;
    case "*": result = x * y; break;
    case "/": result = y === 0 ? "Cannot divide by zero" : x / y; break;
  }
  calcOut.textContent = result;
}
document.querySelectorAll("[data-op]").forEach(btn =>
  btn.addEventListener("click", () => calculate(btn.dataset.op))
);
