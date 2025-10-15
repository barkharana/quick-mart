let signUpbtn = document.querySelector(".signupbtn");
let signInBtn = document.querySelector(".signInBtn");
let nameField = document.querySelector(".namefield");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");
let text = document.querySelector(".text");
signInBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  text.innerHTML = "Lost Password";
  signUpbtn.classList.add("disable");
  signInBtn.classList.remove("disable");
  underline.style.transform = "translateX(35px)";
});
signUpbtn.addEventListener("click", () => {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  text.innerHTML = "Password suggestions";
  signUpbtn.classList.remove("disable");
  signInBtn.classList.add("disable");
  underline.style.transform = "translateX(0)";
});
