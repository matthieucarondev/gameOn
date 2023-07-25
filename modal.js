const colorMessageErr = "#ff0000";
const borderImputErr = '2px solid #ff0000';
const borderImputNoErr=  '2px solid white';
const messageNoErr = "" ;
const display = "block";
const noDisplay= "none";



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
const firstNameMessage = document.getElementById('firstnameError');
const lastNameMessage = document.getElementById('lastnameError');
const emailMessage = document.getElementById('emailError');
const birthdatMessage = document.getElementById('birthdateError');
const quantityMessage = document.getElementById('quantityError');
const locationMessage = document.getElementById('locationMessage');
const checkboxMessage = document.getElementById('checkboxMessage');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form 
function launchModal() {
  modalbg.style.display = display;

  firstNameMessage.innerHTML = messageNoErr;
  firstName.style.border = borderImputNoErr;

     lastNameMessage.innerHTML = messageNoErr;
    lastName.style.border = borderImputNoErr;

    emailMessage.innerHTML = messageNoErr;
    email.style.border = borderImputNoErr;

    birthdatMessage.innerHTML = messageNoErr;
    birthdate.style.border = borderImputNoErr;

    quantityMessage.innerHTML = messageNoErr;
    numberTournoi.style.border = borderImputNoErr;

    locationMessage.innerHTML = messageNoErr;

    checkboxMessage .innerHTML = messageNoErr;
    
}
// close modal form & reset

function closeModal() {
  modalbg.style.display = noDisplay;
  allData.reset();
  
}

closeForm.addEventListener("click", closeModal );

//    Id formulaire

let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let email = document.getElementById('email');
let birthdate = document.getElementById('birthdate');
let numberTournoi = document.getElementById('quantity');
let locations = document.querySelectorAll('input[name="location"]');
let checkbox = document.getElementById('checkbox1');
let comfirmForm = document.getElementById("valid-form");
//  radio  //
const loc1 = locations[0]; // Permet de cibler directement le radio choisi New York
const loc2 = locations[1]; // Permet de cibler directement le radio choisi SanFrancisco
const loc3 = locations[2]; // Permet de cibler directement le radio choisi Seattle
const loc4 = locations[3]; // Permet de cibler directement le radio choisi Chicago
const loc5 = locations[4]; // Permet de cibler directement le radio choisi Boston 
const loc6 = locations[5]; // Permet de cibler directement le radio choisi Portland
//Regex
const nameRegEx = new RegExp(/^\w{2,}[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z]*)*$/i);
const emailRegEx = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
const quantityRegEx = new RegExp(/^([0-9])$/);
const birthRGEX = new RegExp(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/);
//message error

const errors = {
  errorName: "2 caractères minimum ou caractére invalide",
  errorEmail: "Veuillez entrer une adresse mail valide",
  birthdateError: "Veuillez entrer une date de naissance.",
  errorBirthdateYear: "age minimun 18 ans",
  errorQuantity: "Veuillez entrer un nombre",
  errorLocation: "Veuillez choisir une ville",
  errorCheckbox: "Vous devez valider cette case",

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
 const isfirstNameValid = firstNameValid()
 const islastNameValid =lastNameValid()
 const isemailValid =  emailValid()
 const isbirthdateValid = birthdateValid()
 const isquantityValid = quantityValid()
 const islocationValid =locationValid()
 const ischeckValid= checkValid()
 return isfirstNameValid && islastNameValid && isemailValid && isbirthdateValid && isquantityValid && islocationValid && ischeckValid }
   



//             prénom & nom 
/*On vérifie :
 - si la valeur dans le champs est supérieur à 2 caractères et 
 - si la valeur saisie ne correspond pas aux conditions du regex avec la méthode test()
si ce n'est pas le cas :
 - on affiche un message d'erreur et le cadre du champs devient rouge
 */
function firstNameValid() {
  
   
  if (!nameRegEx.test(firstName.value)) {
    firstNameMessage.innerHTML = errors.errorName;
    firstNameMessage.style.color= colorMessageErr;
    firstName.style.border = borderImputErr;
    return false;
  } else {
      firstNameMessage.innerHTML = messageNoErr;
    firstName.style.border = borderImputNoErr;
    return true;
  }
}
function lastNameValid() { 
  if (!nameRegEx.test(lastName.value)) {
    lastNameMessage.innerHTML = errors.errorName;
    lastNameMessage.style.color= colorMessageErr;
    lastName.style.border = borderImputErr;
    return false;
  } else {
      lastNameMessage.innerHTML = messageNoErr;
    lastName.style.border = borderImputNoErr;
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
  
  if (!emailRegEx.test(email.value)) {
    emailMessage.innerHTML = errors.errorEmail;
    emailMessage.style.color =colorMessageErr;
    email.style.border = borderImputErr;
    return false;
  } else {
      emailMessage.innerHTML = messageNoErr;
    email.style.border = borderImputNoErr;
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
 la valeur saisie est inférieur à 18 ans
  Dans ce cas là, on affiche un message d'erreur et le cadre devient rouge
 */
function birthdateValid() {
  const vari = new Date(birthdate.value);
  const today = new Date(); //Récupère la date actuelle
  const diffTime = today.getTime() - vari.getTime();//diff entre les date
  const diffDays = diffTime / (1000 * 3600 * 24); // Conversion en jours
  const age = diffDays / 365.25; // Conversion en années
  
  if (!birthRGEX.test(birthdate.value)) {
    birthdatMessage.innerHTML = errors.birthdateError;
     birthdatMessage.style.color=colorMessageErr;
    birthdate.style.border = borderImputErr;
    return false;
  } else if ((age < 18)) {
    birthdatMessage.innerHTML = errors.errorBirthdateYear;
    birthdate.style.border = borderImputErr;
     birthdatMessage.style.color=colorMessageErr;
    return false;
  } else {
    birthdatMessage.innerHTML = messageNoErr;
    birthdate.style.border = borderImputNoErr;
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
    quantityMessage.innerHTML = errors.errorQuantity;
    quantityMessage.style.color=colorMessageErr;
    numberTournoi.style.border = borderImputErr;
    return false;
  } else {
    quantityMessage.innerHTML = messageNoErr;
    numberTournoi.style.border = borderImputNoErr;
    return true;
  }
}
// location
/* On vérifie si :
 - au moins une des cases a été validé 
  Si ce n'est pas le cas :
 - on affiche un message d'erreur
 */
function locationValid() {

        if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) { 
    locationMessage.innerHTML = errors.errorLocation;
    locationMessage.style.color=colorMessageErr;
    return false; 
     }else{
     locationMessage.innerHTML = messageNoErr;
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
 checkboxMessage.innerHTML = errors.errorCheckbox;
     checkboxMessage.style.color=colorMessageErr;
     return false;
  } else {
checkboxMessage .innerHTML = messageNoErr;
     return true;
  }
}

function launchValid() {
  comfirmForm.style.display = display;
}
function closeConfirmation() {
  comfirmForm.style.display = noDisplay;//on ferme avec le bouton fermer
}
closeMessage.addEventListener("click", closeConfirmation);// on ferme avec la croix