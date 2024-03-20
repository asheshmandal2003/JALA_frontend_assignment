const digit = document.querySelector(".digit");
let value = 0;

function increment() {
  value += 1;
  digit.innerText = value;
}
