const form = document.getElementById("form");
const firstname = document.getElementById("firstName");
const surname = document.getElementById("surName");
const phonenumber = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const textarea = document.getElementById("additional-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  errorDisplay.classList.add("error");
  errorDisplay.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  errorDisplay.classList.add("success");
  errorDisplay.classList.remove("error");
};

const validateInputs = () => {
  const firstnameValue = firstname.value.trim();
  const surnameValue = surname.value.trim();
  const phonenumberValue = phonenumber.value.trim();
  const emailValue = email.value.trim();
  const textareaValue = textarea.value.trim();

  if (firstnameValue === "") {
    setError(firstname, "First name is required.");
  } else {
    setSuccess(firstname);
  }

  if (surnameValue === "") {
    setError(surname, "Surname is required.");
  } else {
    setSuccess(surname);
  }

  if (phonenumberValue === "") {
    setError(phonenumber, "Phone Number is required.");
  } else if (!/^\d+$/.test(phonenumberValue)) {
    setError(phonenumber, "Phone Number must contain only digits.");
  } else {
    setSuccess(phonenumber);
  }

  if (emailValue === "") {
    setError(email, "Email is required.");
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue)) {
    setError(email, "Provide a valid email address.");
  } else {
    setSuccess(email);
  }

  if (textareaValue === "") {
    setError(textarea, "Company is required.");
  } else {
    setSuccess(textarea);
  }
};
