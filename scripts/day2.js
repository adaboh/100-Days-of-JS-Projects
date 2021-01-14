const btn = document.querySelector(".btn");
const hex_code_display = document.querySelector(".hex-code");
const body = document.querySelector("body");

function random(value) {
  return Math.floor(Math.random() * value);
}
const alpha_num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", function (e) {
  let hex_code = "#";
  let i = 0;
  while (i < 6) {
    hex_code += alpha_num[random(alpha_num.length)];
    // hex_code += alpha_num[alpha_num.length];
    i++;
  }
  document.body.style.backgroundColor = hex_code;
  hex_code_display.style.display = "block";
  hex_code_display.textContent = hex_code;
});
