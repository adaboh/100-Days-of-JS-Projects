(function () {
  const counter = document.querySelectorAll(".btn");
  let count = 0;

  counter.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.classList.contains("add")) {
        count++;
      } else if (btn.classList.contains("low")) {
        count--;
      } else if (btn.classList.contains("reset")) {
        count = 0;
      }
      //set count No text to count
      let countNo = document.querySelector(".counter-no");

      countNo.textContent = count;

      if (count > 0) {
        countNo.style.color = "green";
      } else if (count < 0) {
        countNo.style.color = "red";
      } else {
        countNo.style.color = "#000";
      }
    });
  });
})();
