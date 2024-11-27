// les variables

// les input du condition phisiquale

let conditionPhisiqueIunput = document.querySelectorAll('.conditionPhisiqueIunput')

//les inpits du text

let inputsText=document.querySelectorAll('.inputsText')
console.log(inputsText);


//Button de send data
 const sendDataBtn= document.querySelector('.sendData')

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
//vali des inputs text
function validationText() {
//  const image = document.querySelector(".multiple_logo").files
// if (image) {
//     const urlsd = URL.createObjectURL(image)

    
// }
 

 
// console.log(image);

    console.log(300);
    
    const regex = /^[a-zA-Z]+$/;
    for (let i = 0; i < inputsText.length; i++) {
        if (inputsText[i].value== regex) {
            console.log("nadi");
            
        }
        else{
            console.log('node tg3d');
            
        }
        
    }
}




 // l'appel des fonctions

 //validation

 for (let i = 0; i < conditionPhisiqueIunput.length; i++) {
    conditionPhisiqueIunput[i].addEventListener('input',validationconditionPhisique)
    
 }

//  conditionPhisiqueIunput.addEventListener('change',validationInputs)

sendDataBtn.addEventListener('click',validationText)