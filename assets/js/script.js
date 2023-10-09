const password = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~|}{[]></-=";

function generatePassword() {
  let passwordValue = "";
  let characters = upperCase + lowerCase + numbers + symbols;
  for (let i = 0; i < length; i++) {
    passwordValue += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  password.value = passwordValue;
}
