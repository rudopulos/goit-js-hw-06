const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Va rog completati toate campurile");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log("Form Data:", formData);
    loginForm.reset();
  }
});
