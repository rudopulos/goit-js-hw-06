const validationInput = document.getElementById("validation-input");
validationInput.addEventListener("blur", () => {
  const desiredLength = Number(validationInput.getAttribute("data-length"));
  const inputValue = validationInput.value.trim();
  const isValid = inputValue.length === desiredLength;

  if (isValid) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
