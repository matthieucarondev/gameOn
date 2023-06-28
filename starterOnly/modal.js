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
const allData =document.getElementById('allData');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal(){
  modalbg.style.display = "block";
}
// close modal form & reset

function closeModal(){
  modalbg.style.display = "none";
  allData.reset();
}
closeForm.addEventListener("click",closeModal);

//    Id formulaire




let firstName= document.getElementById('firstname');
let lastName=document.getElementById('lastname');
let email=document.getElementById('email');
let birthdate=document.getElementById('birthdate');
let numberTournoi=document.getElementById('quantity');
//let location=document.getElementsByClassName();
//let checkbox=document.getElementById();
//let checkboxTwo=document.getElementById();
let comfirmForm=document.getElementById("valid-form");
//let buttonValid=document.getElementById();
//Regex
const nameRegEx = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i);
const emailRegEx =new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
const quantityRegEx = /([0-9])$/;
//message error

const errors ={
errorName1:"2 caractères minimum",
errorName2:"Seul l'alphabet est accépté",
errorName3:"2 caractères minimum",
errorName4: "Seul l'alphabet est accépté",
errorEmail: "Veuillez entrer une adresse mail valide",
birthdateError2:"Veuillez entrer une date de naissance.",
errorBirthdateYear: "age minimun 18 ans",
errorQuantity:"Veuillez entrer un nombre",

//errorCheckbox: "Vous devez valider cette case",
//errorLocation: "Veuillez choisir une ville",
}
//message validation formulaire  plus  fermeture modal*/
allData.addEventListener("submit",function(event){
  event.preventDefault();
  console.log(event);
  if(validateForm()){
    closeModal();
    launchValid();
    return true;
  }
  return false
});
//Les fonctions utilisées pour les input
 function validateForm () {
    firstNameValid();
    lastNameValid()
    emailValid()
    birthdateValid() 
    quantityValid()
    if (firstNameValid() && lastNameValid()&& emailValid()&& birthdateValid() && quantityValid() ) {

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
 function firstNameValid(){
  if (firstName.value.length < 2){
    let firstNameMessage = document.getElementById("firstnameError");
    firstNameMessage.innerHTML=errors.errorName1;
    firstName.style.border= '2px solid red';
    return false;
  }else if (!nameRegEx.test(firstName.value)){
    let firstNameMessage =document.getElementById("firstnameError");
    firstNameMessage.innerHTML=errors.errorName2;
    firstName.style.border= '2px solid red'
    return false;
  }else {
     document
            .getElementById("firstnameError")
            .innerHTML = "";

        firstName.style.border = '2px solid white';

        return true;
  }
 }
 function lastNameValid(){
  if (lastName.value.length <2){
    let lastNameMessage = document.getElementById("lastnameError");
    lastNameMessage.innerHTML=errors.errorName3;
    lastName.style.border= '2px solid red';
    return false;
  }else if (!nameRegEx.test(lastName.value)){
    let lastNameMessage = document.getElementById("lastnameError");
    lastNameMessage.innerHTML=errors.errorName4;
    lastName.style.border= '2px solid red';
    return false;
  }else {
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
  if(emailRegEx.test(email.value) == false){
    let emailMessage =document.getElementById("emailError");
    emailMessage.innerHTML = errors.errorEmail;

    email.style.border ='2px solid red' ;

    return false ;
  } else {
    document 
    .getElementById('emailError')
    .innerHTML ="";
    email.style.border ='2px solid white';
    return true ;
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
let today = new Date(); //Récupère la date actuelle
let currentYear = today.getFullYear(); // Stock l'année dans currentYear
let daysInMonth = [         //on donne un nombre de jour maximum aux mois
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
function birthdateValid() {
  let vari = new Date(birthdate.value);
  if (birthdate.value.length < 1) {
    let birthdatMessage2 = document.getElementById('birthdateError');
    birthdatMessage2.innerHTML = errors.birthdateError2;

    birthdate.style.border ='2px solid red';

    return false;
  } else if (currentYear - vari.getFullYear() < 18 ) {
        let yearMessage = document.getElementById('birthdateError');
        yearMessage.innerHTML = errors.errorBirthdateYear;

        birthdate.style.border = '2px solid red';

        return false;

  }else {
    document.getElementById('birthdate').innerHTML="";
     
    birthdate.style.border='2px solid white';
    return true;
  }
}
  //nombre de numberTournoi
/* On vérifie 
 - si la valeur entrée dans le champs est inférieur à 1
  si ce n'est pas le cas :
 - on affiche un message d'erreur et le cadre du champs devient rouge
 */
function quantityValid(){
  if (numberTournoi.value.length <1){
    let quantityMessage =document.getElementById('quantityError');
    quantityMessage.innerHTML=errors.errorQuantity;

    numberTournoi.style.border ='2px solid red ';
    return false;
  }else {
    document
            .getElementById('quantityError')
            .innerHTML="";

    numberTournoi.style.border='2px solid white';
    return true;
  }
}


function launchValid() {
   comfirmForm.style.display = "block";
}
function closeConfirmation() {
  comfirmForm.style.display = "none";
}
closeMessage.addEventListener("click",closeConfirmation);