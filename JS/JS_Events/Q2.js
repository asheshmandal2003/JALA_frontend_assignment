const formElement = document.getElementById("myForm");
const nameElement = document.getElementById("name");
const errorElement = document.querySelector(".error");

console.log(nameElement.value);

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameElement.value;
  if (name.trim() === "") {
    errorElement.innerText = "Name is required!";
  } else {
    errorElement.innerText = "";
    nameElement.innerText = "";
    alert(`Hello ${name}, your form submitted successfully!`);
  }
});
