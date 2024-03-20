const digit = document.querySelector(".digit");
const num = document.getElementById("num");
const counter_value = document.getElementById("counter-value");
let value = 0;

function increment() {
  value += 1;
  digit.innerText = value;
}

function setValue() {
  value = Number(num.value);
  digit.innerText = value;
  num.value = "";
}

function getValue() {
  counter_value.innerText = value;
}
