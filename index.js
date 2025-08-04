"use strict";

const form = document.querySelector(".form");
const emailInput = document.querySelector(".form input");

const createErrorMessage = (input) => {
  const wrapper = input.closest(".form-wrap");
  let errorElement = wrapper.nextElementSibling;

  if (!errorElement || !errorElement.classList.contains("error-message")) {
    errorElement = document.createElement("p");
    errorElement.className = "error-message";
    wrapper.after(errorElement);
  }

  return errorElement;
};

const isValidEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email.value.trim());
};

const validationForm = (e) => {
  e.preventDefault();

  const errorMessage = createErrorMessage(emailInput);

  emailInput.classList.remove("error-style");
  errorMessage.textContent = " ";

  if (!isValidEmail(emailInput)) {
    emailInput.classList.add("error-style");
    errorMessage.textContent = "Please provide a valid email";
    return;
  }

  alert("Form submitted successfully!");
  form.reset();
};

form.addEventListener("submit", validationForm);
