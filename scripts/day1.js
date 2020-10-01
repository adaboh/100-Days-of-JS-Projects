/* DAY 1(ONE), Change the background project 
https://jsbeginners.com/change-background-color-project/
*/

/* const body = document.querySelector("body");
const btn = document.getElementById("btn");

function random(value) {
  return Math.floor(Math.random() * value);
}
ja
btn.addEventListener("click", function (e) {
  let generateColor = `rgb(${random(256)}, ${random(256)}, ${random(256)})`;
  body.style.backgroundColor = generateColor;
}); */

const body = document.querySelector("body");
const btn = document.getElementById("btn");

colors = ["red", "cyan", "orange", "green", "pink", "turquoise"];

body.style.backgroundColor = "cyan";

function changeColor() {
  return colors;
}

btn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[randomIndex];
});
