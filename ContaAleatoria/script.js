const operators = ["+", "-", "*", "/"];

let num1;
let num2;
let operator;
let answer;

do {
  operator = operators[Math.floor(Math.random() * operators.length)];
  if (operator === "/") {
    num1 = Math.floor(Math.random() * 100) * Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
  } else {
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
  }
  answer = eval(num1 + operator + num2);
} while (answer % 1 !== 0);

document.getElementById("num1").innerHTML = num1;
document.getElementById("operator").innerHTML = operator;
document.getElementById("num2").innerHTML = num2;

document.getElementById("answer").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    document.getElementById("submit").click();
  }
});

document.getElementById("submit").addEventListener("click", function() {
  const inputAnswer = document.getElementById("answer").value;
  if (answer == inputAnswer) {
    alert("Resposta correta!");
  } else {
    alert("Resposta incorreta. Tente novamente.");
  }
});
