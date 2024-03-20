const time = document.querySelector(".time");
const btn = document.getElementById("btn");

function showDate() {
  const date = new Date();
  const dateTime = `Date: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} \nTime: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  time.innerText = dateTime;
}

btn.addEventListener("click", showDate);
