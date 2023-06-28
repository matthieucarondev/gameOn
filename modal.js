function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeForm = document.getElementById('close');
const closeMessage = document.getElementById('closeMessage');
const allData = document.getElementById('allData');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form & reset

function closeModal() {
  modalbg.style.display = "none";
  allData.reset();
}
closeForm.addEventListener("click", closeModal);

//    Id formulaire

let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let email = document.getElementById('email');
let birthdate = document.getElementById('birthdate');
let numberTournoi = document.getElementById('quantity');
let locations = document.getElementsByClassName('location');
let checkbox = document.getElementById('checkbox1');
let checkboxTwo = document.getElementById('checkbox2');
let comfirmForm = document.getElementById("valid-form");

//Regex
const nameRegEx = new RegExp(/([A-Za-z-])+$/);
const emailRegEx = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
const quantityRegEx = new RegExp(/([0-9])$/);
const birthRGEX = new RegExp(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/);
//message error

const errors = {
  errorName1: "2 caractères minimum",
  errorName2: "Seul l'alphabet est accépté",
  errorName3: "2 caractères minimum",
  errorName4: "Seul l'alphabet est accépté",
  errorEmail: "Veuillez entrer une adresse mail valide",
  birthdateError2: "Veuillez entrer une date de naissance.",
  birthdateError: "format invalide",
  errorBirthdateYear: "age minimun 18 ans",
  errorQuantity: "Veuillez entrer un nombre",
  errorLocation: "Veuillez choisir une ville",
  errorCheckbox: "Vous devez valider cette deux case",

}
//message validation formulaire  plus  fermeture modal
allData.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    closeModal();
    launchValid();
    return true;
  }
  return false
});
//Les fonctions utilisées pour les input
function validateForm() {
  firstNameValid()
  lastNameValid()
  emailValid()
  birthdateValid()
  quantityValid()
  locationValid()
  checkValid()
  if (firstNameValid() && lastNameValid() && emailValid() && birthdateValid() && quantityValid() && locationValid() && checkValid()) {

    return true;

  } else {

    return false;
  }
}

//             prénom & nom 
/*On vérifie :
 - si la valeur dans le champs est supérieur à 2 caractères et 
 - si la valeur saisie ne correspond pas aux conditions du regex avec la méthode test()
si ce n'est pas le cas :
 - on affiche un message d'erreur et le cadre du champs devient rouge
 */
function firstNameValid() {
  if (firstName.value.length < 2) {
    let firstNameMessage = document.getElementById("firstnameError");
    firstNameMessage.innerHTML = errors.errorName1;
    firstName.style.border = '2px solid red';
    return false;
  } else if (!nameRegEx.test(firstName.value)) {
    let firstNameMessage = document.getElementById("firstnameError");
    firstNameMessage.innerHTML = errors.errorName2;
    firstName.style.border = '2px solid red'
    return false;
  } else {
    document
      .getElementById("firstnameError")
      .innerHTML = "";

    firstName.style.border = '2px solid white';

    return true;
  }
}
function lastNameValid() {
  if (lastName.value.length < 2) {
    let lastNameMessage = document.getElementById("lastnameError");
    lastNameMessage.innerHTML = errors.errorName3;
    lastName.style.border = '2px solid red';
    return false;
  } else if (!nameRegEx.test(lastName.value)) {
    let lastNameMessage = document.getElementById("lastnameError");
    lastNameMessage.innerHTML = errors.errorName4;
    lastName.style.border = '2px solid red';
    return false;
  } else {
    document
      .getElementById("lastnameError")
      .innerHTML = "";

    lastName.style.border = '2px solid white';

    return true;
  }
}

// email
/*On vérifie si :
- la valeur saisie correspond aux conditions du regex
si ce n'est pas le cas:
- on affiche un message d'erreur et le cadre du champs devient rouge
*/
function emailValid() {
  if (emailRegEx.test(email.value) == false) {
    let emailMessage = document.getElementById("emailError");
    emailMessage.innerHTML = errors.errorEmail;

    email.style.border = '2px solid red';

    return false;
  } else {
    document
      .getElementById('emailError')
      .innerHTML = "";
    email.style.border = '2px solid white';
    return true;
  }
}
// date anniversaire

/*Pour la fonction birthdateValid() : 
 On vérifie si :
  - si la date de naissance a bien été saisi
   si ce n'est pas le cas :
  - on affiche un message d'erreur et le champs devient rouge
  Ensuite :
  on vérifie si :
  currentYear(l'année actuelle) moins la valeur saisie est inférieur à 18 ans
  Dans ce cas là, on affiche un message d'erreur et le cadre devient rouge
 */
function birthdateValid() {
  const vari = new Date(birthdate.value);
  const today = new Date(); //Récupère la date actuelle
  const diffTime = today.getTime() - vari.getTime();//diff entre les date
  const diffDays = diffTime / (1000 * 3600 * 24); // Conversion en jours
  const age = diffDays / 365.25; // Conversion en années
  if (birthRGEX.test(birthdate)) {
    let birthdatMessage = document.getElementById('birthdateError');
    birthdatMessage.innerHTML = errors.birthdateError;
    birthdate.style.border = '2px solid red';
    return false;
  } else if (birthdate.value.length < 1) {
    let birthDateMessage2 = document.getElementById('birthdateError');
    birthDateMessage2.innerHTML = errors.birthdateError2;

    birthdate.style.border = '2px solid red';

    return false;
  } else if ((birthdate.value == "") || (age <= 18)) {
    let birthdatMessage2 = document.getElementById('birthdateError');
    birthdatMessage2.innerHTML = errors.errorBirthdateYear;

    birthdate.style.border = '2px solid red';

    return false;

  } else {
    document.getElementById('birthdateError').innerHTML = "";

    birthdate.style.border = '2px solid white';
    return true;
  }
}
//nombre de numberTournoi
/* On vérifie 
 - si la valeur entrée dans le champs est inférieur à 1
  si ce n'est pas le cas :
 - on affiche un message d'erreur et le cadre du champs devient rouge
 */
function quantityValid() {
  if (numberTournoi.value.length < 1) {
    let quantityMessage = document.getElementById('quantityError');
    quantityMessage.innerHTML = errors.errorQuantity;

    numberTournoi.style.border = '2px solid red ';
    return false;
  } else {
    document
      .getElementById('quantityError')
      .innerHTML = "";

    numberTournoi.style.border = '2px solid white';
    return true;
  }
}
// location
/* On vérifie si :
 - au moins une des cases a été validé en parcourant le tableau avec i++
  Si ce n'est pas le cas :
 - on affiche un message d'erreur
 */
function locationValid() {
  const result = Array.from(locations).filter(
    (loca) => loca.checked === true
  );
  if (result.length <= 0) {
    let locationMessage = document.getElementById('locationMessage');
    locationMessage.innerHTML = errors.errorLocation;
    return false;
  } else {
    document
      .getElementById('locationMessage')
      .innerHTML = "";
    return true;

  }
}
// checkbox
/* On vérifie  si :
- la checkbox n'est pas validé
- on affiche un message d'erreur
function checkbox */
function checkValid() {
  if (!checkbox.checked) {

    let checkboxMessage = document.getElementById("checkboxMessage");
    checkboxMessage.innerHTML = errors.errorCheckbox;

    return false;

  } else {
    document
      .getElementById("checkboxMessage")
      .innerHTML = "";

    return true;
  }
}

function launchValid() {
  comfirmForm.style.display = "block";
}
function closeConfirmation() {
  comfirmForm.style.display = "none";//on ferme avec le bouton fermer
}
closeMessage.addEventListener("click", closeConfirmation);// on ferme avec la croix