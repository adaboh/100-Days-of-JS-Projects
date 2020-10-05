const form = document.getElementById("form-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const msgFeedback = document.querySelector(".msg-feedback");
  const formInputValue = document.getElementById("form-input").value;

  if (formInputValue === "") {
    msgFeedback.classList.add("show");
    setTimeout(function () {
      msgFeedback.classList.remove("show");
    }, 2000);
  } else {
    const msgNoti = document.querySelector(".msg-noti");
    msgNoti.textContent = formInputValue;
  }
});
