const hexCodeDisplay = document.querySelector(".hex-code");
const btn = document.querySelector(".btn");
const body = document.querySelector("body");

// var hex = [0, 1, 2, 3, 4, 5, 6, 7, 9, "a", "b", "c", "d", "e", "f"];

btn.addEventListener("click", function () {
  // let hex = "123456789abcdef";
  let hex = [0, 1, 2, 3, 4, 5, 6, 7, 9, "A", "B", "D", "E", "F", "f"];
  let hexCode = "#";
  let i = 0;
  while (i < 6) {
    hexCode += hex[random(hex.length)];
    i++;
  }

  hexCodeDisplay.style.display = "block";
  hexCodeDisplay.textContent = ":" + hexCode;
  body.style.backgroundColor = `${hexCode}`;
});
