let fruits = ["Mango", "Apple", "Litchi", "Watermelon", "Banana", "Grape"];

const ul = document.getElementById("fruits"); // Finding the ul element which has a id name "fruits"

const showFruits = () =>
  fruits.map((fruit) => {
    const li = document.createElement("li"); // Creating a "li" element
    li.innerText = fruit; // Setting the inner text of the li element as the name of a fruit
    ul.appendChild(li); // Adding the li element with the ul element
  });

showFruits();

const sort = () => {
  while (ul.firstChild) {
    // While there is a first element remove the element
    ul.removeChild(ul.firstChild);
  }
  fruits = fruits.sort((a, b) => a.localeCompare(b)); // Sorting the fruits in descending order
  showFruits();
};
