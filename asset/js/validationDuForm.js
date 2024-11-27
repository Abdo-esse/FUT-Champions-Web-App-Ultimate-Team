// les variables
// les input du condition phisiquale

let conditionPhisiqueIunput = document.querySelectorAll( ".conditionPhisiqueIunput");

//les inpits du text

let inputsText = document.querySelectorAll(".inputsText");

//Button de send data
const sendDataBtn = document.querySelector(".sendData");

//les inputse d'image
let inputsLien = document.querySelectorAll(".inputsLien");

// select
let selectInput=document.querySelector('.selectInput')


// l'inpet de fullNam
let fullNameInputs =document.querySelector('.fullName')

// l'inpet de photo
let photoInputs =document.querySelector('.photo')

// l'inpet de  position
let  positionInputs =document.querySelector('. position')

// l'inpet de flag
let flagInputs =document.querySelector('.flag')

// l'inpet de club
let clubinputs =document.querySelector('.club')

// l'inpet de logo
let logoinputs =document.querySelector('.logo')

// l'inpet de fullNam
let  ratinginputs =document.querySelector('.fullName')

// l'inpet de fullNam
let fullNameinputs =document.querySelector('.fullName')

// l'inpet de fullNam
let fullNameinputs =document.querySelector('.fullName')

// l'inpet de fullNam
let fullNameinputs =document.querySelector('.fullName')

// l'inpet de fullNam
let fullNameinputs =document.querySelector('.fullName')
 

//data
let data = [];
// fullNam
let fullName,
  photo,
  position,
  flag,
  club,
  logo,
  rating,
  pace,
  shooting,
  passing,
  dribbling,
  defending,
  physical;

  //la formul de regix de valides un text
  const regex = /^[a-zA-ZÀ-ÿ\s'-]+$/;


  //la formul de regix de valides un text
 const regexImage = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))/gi;

//les fonction

// les fonction de validation des inputs
 //validation condition Phisique
 function validationconditionPhisique() {
    for (let i = 0; i < conditionPhisiqueIunput.length; i++) {
      if (conditionPhisiqueIunput[i].value > 0 &&conditionPhisiqueIunput[i].value < 100) {
        conditionPhisiqueIunput[i].style.border = "2.5px solid green";
        rating=conditionPhisiqueIunput[0].value
                  pace=conditionPhisiqueIunput[1].value
                  shooting=conditionPhisiqueIunput[2].value
                  passing=conditionPhisiqueIunput[3].value
                  dribbling=conditionPhisiqueIunput[4].value
                  defending=conditionPhisiqueIunput[5].value
                  physical=conditionPhisiqueIunput[6].value
        
      } else {
        conditionPhisiqueIunput[i].style.border = "2.5px solid red";
        

      }
    }
  }

//valides des inputs text
function validationText() {
    for (let i = 0; i < inputsText.length; i++) {
      if (regex.test(inputsText[i].value)) {
        inputsText[i].style.border = "2.5px solid green";
        fullName=inputsText[0].value
                club=inputsText[1].value
        
        
      } 
      else {
        inputsText[i].style.border = "2.5px solid red";
      }
    }
  }
// valodation de select
  function select() {
    if (selectInput.value=="") {
        selectInput.style.border = "2.5px solid red";
    }else{
        selectInput.style.border ="none"
        position=selectInput.value
    }
  }

  //validation des inputs image
function validationImage() {
    const regexImage = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))/gi;
  
    for (let i = 0; i < inputsLien.length; i++) {
      if (regexImage.test(inputsLien[i].value)) {
        inputsLien[i].style.border = "2.5px solid green";
        photo=inputsLien[0].value
        flag=inputsLien[1].value
        logo=inputsLien[2].value
      } else {
        inputsLien[i].style.border = "2.5px solid red";
      }
    }
  }
  


// function enregitrerData() {
  
//  if (condition) {
    
//  }
//   console.log(fullName,
//     photo,
//     position,
//     flag,
//     club,
//     logo,
//     rating,
//     pace,
//     shooting,
//     passing,
//     dribbling,
//     defending,
//     physical
//   );

// }

  

// l'appel des fonctions

//validation
//validation de nombre
for (let i = 0; i < conditionPhisiqueIunput.length; i++) {
  conditionPhisiqueIunput[i].addEventListener(
    "input",
    validationconditionPhisique
  );
}
//validation de text
for (let i = 0; i < inputsText.length; i++) {
  inputsText[i].addEventListener("input", validationText);
}
//validation de lien
for (let i = 0; i < inputsLien.length; i++) {
  inputsLien[i].addEventListener("input", validationImage);
}
//validation select
selectInput.addEventListener('change',select)
//  conditionPhisiqueIunput.addEventListener('change',validationInputs)

sendDataBtn.addEventListener("click",enregistrerData);
