"use strict";
// const form = document.querySelector(".form-wrap");

// const emailVal = (email) => {
//   console.log(email);
// };

// function emailVal() {
//   let mailType = "";
//   const email = document.getElementById("email-input").value;
//   for (let i = 0; i < email.length; i++) {
//     if (email[i] === "@") {
//       mailType = email.slice(i);
//     }
//   }
//   let isValid = ["@gmail.com", "@hotmail.com", "@yahoo.com"];
//   for (let i = 0; i < isValid.length; i++) {
//     if (isValid[i] === mailType) {
//       console.log("valid");
//     } else {
//       console.log("invalid");
//     }
//   }
// }

// const fullName = document.getElementById("name");
// const email = document.getElementById("email");
// const nameError = document.getElementById("name-error");
// const emailError = document.getElementById("email-error");
// const submitBtn = document.querySelector(".form-btn");

// fullName.addEventListener("keyup", () => {
//   if (
//     fullName.value == "" ||
//     fullName.value.length < 3 ||
//     fullName.value.length > 60
//   ) {
//     nameError.style.display = "block";
//   } else {
//     nameError.style.display = "none";
//   }
// });

// email.addEventListener("keyup", () => {
//   if (email.value == "" || email.value.length < 6 || email.value.length > 40) {
//     emailError.style.display = "block";
//   } else {
//     emailError.style.display = "none";
//   }
// });

/*
Custom Validation 
*/

// document.getElementById("btn").addEventListener("click", emailVal);

const thisForm = document.getElementById("form");
thisForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form).entries();
  // making request from ...
  const response = await fetch("http://localhost:3000/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  const result = await response.json();
  console.log(result);
});
