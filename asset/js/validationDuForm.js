// les variables

// les input du condition phisiquale

let conditionPhisiqueIunput = document.querySelectorAll('.conditionPhisiqueIunput')

//les inpits du text

let inputsText=document.querySelector('.inputsText')

//Button de send data
 const sendDataBtn= document.querySelector('.sendData')


//les fonction 

// la fonction de validation des inputs
 function validationInputs() {
     console.log('khdama');
     
   for (let i = 0; i < conditionPhisiqueIunput.length; i++) {
      
      if (conditionPhisiqueIunput[i].value > 0 && conditionPhisiqueIunput[i].value<100) {
        
        conditionPhisiqueIunput[i].style.border="2.5px solid green"
      }
      else  {
         conditionPhisiqueIunput[i].style.border="2.5px solid red"
      }
    
   }

    
 }




 // l'appel des fonctions

 //validation

 conditionPhisiqueIunput.addEventListener('input',validationInputs)