// les variables

// forme 
let forme= document.querySelector('#forme')
console.log(forme);


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
 selectInput.addEventListener('change', ()=>{
   
     console.log(selectInput.value);
 })

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
    }
  }

  //validation des inputs image
function validationImage() {
    const regexImage = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))/gi;
  
    for (let i = 0; i < inputsLien.length; i++) {
      if (regexImage.test(inputsLien[i].value)) {
        inputsLien[i].style.border = "2.5px solid green";
      } else {
        inputsLien[i].style.border = "2.5px solid red";
      }
    }
  }
  


function enregitrerData() {

//     for (let i = 0; i < conditionPhisiqueIunput.length; i++) {
//         if (conditionPhisiqueIunput[i].value > 0 &&conditionPhisiqueIunput[i].value < 100) {
//           rating=conditionPhisiqueIunput[0].value
//           console.log(rating);
//           pace=conditionPhisiqueIunput[1].value
//           shooting=conditionPhisiqueIunput[2].value
//           passing=conditionPhisiqueIunput[3].value
//           dribbling=conditionPhisiqueIunput[4].value
//           defending=conditionPhisiqueIunput[5].value
//           physical=conditionPhisiqueIunput[6].value
          
//         }
//     for (let i = 0; i < inputsText.length; i++) {
//       if (regex.test(inputsText[i].value)) {
//         fullName=inputsText[0].value
//         club=inputsText[1].value
//       }
//     }
//     }
    
//         for (let i = 0; i < inputsLien.length; i++) {
//           if (regexImage.test(inputsLien[i].value)) {
//             photo=inputsLien[0].value
//             flag=inputsLien[1].value
//             logo=inputsLien[2].value
//           }
//         }
    
//         if (selectInput.value=="") {
//             selectInput.style.border = "2.5px solid red";
//         }else{
//             position=selectInput.value
//         }
//         if (g) {
            
//         }
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
  
  
}

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

sendDataBtn.addEventListener("click",enregitrerData);
