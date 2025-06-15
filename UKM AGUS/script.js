// script.js

document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Kopi Anak Kicik berhasil dimuat!");
});
let target = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const result = document.getElementById("gameResult");

  if (guess === target) {
    result.textContent = "🎉 Benar! Kamu menang!";
    result.style.color = "green";
    target = Math.floor(Math.random() * 10) + 1;
  } else if (guess < target) {
    result.textContent = "Terlalu kecil!";
    result.style.color = "orange";
  } else {
    result.textContent = "Terlalu besar!";
    result.style.color = "red";
  }
}