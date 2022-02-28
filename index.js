const submitBtn = document.querySelector(".section-content--email-btns_submit");
const errorImage = document.querySelector(
  ".section-content--email-btns_errorImg"
);
const errorMessage = document.querySelector(".section-content--email-errormsg");
// let emailText = document.getElementById("email").value;

function validate() {
  const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)(.[a-z]+)?$/;

  if (!regx.test(document.getElementById("email").value)) {
    errorImage.style.opacity = "1";
    errorMessage.style.opacity = "1";
  } else {
    document.getElementById("email").value = "";
    errorImage.style.opacity = "0";
    errorMessage.style.opacity = "0";
  }
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  validate();
});
