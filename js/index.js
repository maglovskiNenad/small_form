"use strict";

const username_input = document.getElementById("username");
const middlename_input = document.getElementById("middlename");
const email_input = document.getElementById("email");
const password_input = document.getElementById("password");
const btn_login = document.getElementById("btn");

let username = false;
let middlename = false;
let email = false;
let password = false;
btn_login.disabled = true;

username_input.addEventListener("focusout", function () {
  if (
    username_input.value.trim() == "" ||
    username_input.value.trim().length < 3
  ) {
    username_input.classList.add("is-invalid");
    username = false;
  } else if (
    username_input.value.trim() !== "" ||
    username_input.value.trim().length >= 3
  ) {
    username_input.classList.remove("is-invalid");
    username = true;
  }
});

middlename_input.addEventListener("focusout", function () {
  if (
    middlename_input.value.trim() == "" ||
    middlename_input.value.trim().length < 3
  ) {
    middlename_input.classList.add("is-invalid");
    middlename = false;
  } else if (
    middlename_input.value.trim() !== "" ||
    middlename_input.value.trim().length >= 3
  ) {
    middlename_input.classList.remove("is-invalid");
    middlename = true;
  }
});

email_input.addEventListener("focusout", function () {
  if (
    email_input.value.trim() == "" ||
    !email_input.value.trim().includes("@")
  ) {
    email_input.classList.add("is-invalid");
    email = false;
  } else if (
    email_input.value.trim() !== "" ||
    email_input.value.trim().includes("@")
  ) {
    email_input.classList.remove("is-invalid");
    email = true;
  }
});

password_input.addEventListener("focusout", function () {
  if (
    password_input.value.trim() == "" ||
    password_input.value.trim().length < 8 ||
    !password_input.value == password_input.value.toUpperCase()
  ) {
    password_input.classList.add("is-invalid");
    password = false;
  } else if (
    password_input.value.trim() !== "" ||
    password_input.value.trim().length >= 8 ||
    password_input.value == password_input.value.toUpperCase()
  ) {
    password_input.classList.remove("is-invalid");
    btn_login.disabled = false;
    password = true;
  }
});

btn_login.addEventListener("click", function () {
  if (
    username == true &&
    middlename == true &&
    email == true &&
    password == true
  ) {
    console.log(username_input.value);
    console.log(middlename_input.value);
    console.log(email_input.value);
    console.log(password_input.value);
  }
});
