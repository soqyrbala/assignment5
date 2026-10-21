//Task 0
const student = { name: "Saginbek Mansur", group: "Se-2528" }; 
console.log("Name: " + student.name);
console.log("Group: " + student.group);
document.getElementById("alertBtn").addEventListener("click", () => alert("Hello, JavaScript World!"));

//Task 1
const title = "JavaScript";      
const year = 2026;               
const isFun = true;              
const a = 12, b = 5;

const lines = [
  `Types: ${typeof title}, ${typeof year}, ${typeof isFun}`,
  `${a} + ${b} = ${a + b}`,
  `${a} - ${b} = ${a - b}`,
  `${a} * ${b} = ${a * b}`,
  `${a} / ${b} = ${a / b}`,
  `${a} % ${b} = ${a % b}`,
  "Concatenation: " + title + " " + "Basics" + " " + year,
];
lines.forEach(line => console.log(line));
document.getElementById("out").textContent = lines.join("\n");
