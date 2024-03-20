const setButton = document.getElementById("set-cookie");
const getButton = document.getElementById("get-cookie");
const checkButton = document.getElementById("check-cookie");

setButton.addEventListener("click", setCookie);
getButton.addEventListener("click", getCookie);
checkButton.addEventListener("click", checkCookie);

function setCookie() {
  const cookieName = prompt("Enter the cookie name: ");
  const cookieValue = prompt("Enter the cookie value: ");

  const expires = new Date();
  expires.setTime(expires.getTime() + 24 * 3600000);
  document.cookie = `${cookieName}=${cookieValue};expires=${expires.toUTCString()}`;
  alert(`Cookie ${cookieName} set successfully!`);
}

function getCookie() {
  const cookieName = prompt("Enter cookie name:");
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=").map((c) => c.trim());
    if (name === cookieName) {
      alert(`Value of cookie "${cookieName}" is "${value}"`);
      return;
    }
  }
  alert(`Cookie "${cookieName}" not found!`);
}

function checkCookie() {
  const cookieName = prompt("Enter cookie name:");
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name] = cookie.split("=").map((c) => c.trim());
    if (name === cookieName) {
      alert(`Cookie "${cookieName}" exists!`);
      return;
    }
  }
  alert(`Cookie "${cookieName}" does not exist!`);
}
