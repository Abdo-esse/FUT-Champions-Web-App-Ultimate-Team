// les variables

// les input du condition phisiquale

let conditionPhisiqueIunput = document.querySelectorAll('.conditionPhisiqueIunput')

//les inpits du text

let inputsText=document.querySelectorAll('.inputsText')



//Button de send data
 const sendDataBtn= document.querySelector('.sendData')

//les inputse d'image 
let inputsLien=document.querySelectorAll('.inputsLien')


 //file
//  const image = document.getElementById(multiple_logo)
  
 const imageRegex = /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i;

//les fonction 

// les fonction de validation des inputs

//validation condition Phisique
 function validationconditionPhisique() {
    
    for (let i = 0; i < conditionPhisiqueIunput.length; i++) {
      
      if (conditionPhisiqueIunput[i].value > 0 && conditionPhisiqueIunput[i].value<100) {
        
        conditionPhisiqueIunput[i].style.border="2.5px solid green"
      }
      else  {
         conditionPhisiqueIunput[i].style.border="2.5px solid red"
      }
    }
}
//valides des inputs text
function validationText() {
   
    const regex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
    for (let i = 0; i < inputsText.length; i++) {
        if (regex.test(inputsText[i].value)) {
        
            inputsText[i].style.border="2.5px solid green"
        }
        else{
            
            inputsText[i].style.border="2.5px solid red"
         }     
    }
}

//validation des inputs image
function validationImage() {
    const regexImage = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))/gi;
    console.log('hfhf');
    
    for (let i = 0; i < inputsLien.length; i++) {
        if (regexImage.test(inputsLien[i].value)) {
            console.log("nadi");
            inputsLien[i].style.border="2.5px solid green"
        }
        else{
            console.log('node tg3d');
            inputsLien[i].style.border="2.5px solid red"
         }     
    }
    //  const image = document.querySelector(".multiple_logo").files
// if (image) {
//     const urlsd = URL.createObjectURL(image)

    
// }
 

 

    
}




 // l'appel des fonctions

 //validation
 //validation de nombre
 for (let i = 0; i < conditionPhisiqueIunput.length; i++) {
    conditionPhisiqueIunput[i].addEventListener('input',validationconditionPhisique)
    
 }
//validation de text
 for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener('input',validationText)
    
 }
 //validation de lien 
 for (let i = 0; i < inputsLien.length; i++) {
    inputsLien[i].addEventListener('input',validationImage)

 }


//  conditionPhisiqueIunput.addEventListener('change',validationInputs)

// sendDataBtn.addEventListener('click',validationText)