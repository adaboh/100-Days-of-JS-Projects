/* DAY 1(ONE), Change the background project 
https://jsbeginners.com/change-background-color-project/
*/

/* const body = document.querySelector("body");
const btn = document.getElementById("btn");

function random(value) {
  return Math.floor(Math.random() * value);
}

btn.addEventListener("click", function (e) {
  let generateColor = `rgb(${random(256)}, ${random(256)}, ${random(256)})`;
  body.style.backgroundColor = generateColor;
}); */

const body = document.querySelector("body");
const btn = document.getElementById("btn");

const colors = ["red", "cyan", "orange", "green", "pink", "turquoise"];

//! testing js styling of bg
body.style.backgroundColor = "steelblue";

function changeColor() {
  return colors; // not used in the event listener below
}

btn.addEventListener("click", function () {
  randomIndex = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[randomIndex];
});
