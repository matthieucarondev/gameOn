function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const Validform = document.getElementById("Valid-form");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
// lauch valid form
function openValidform() {
  modalbg.style.display="none"
  Validform.style.display ="block";
}
// close valid form
function closeValidform() {
  modalbg.style.display="none"
  Validform.style.display="none"
  document.getElementById("formFull").reset();

}
