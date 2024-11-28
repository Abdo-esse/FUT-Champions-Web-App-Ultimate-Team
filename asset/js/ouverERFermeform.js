//import
import{conditionPhisiqueIunput,inputsText,inputsLien, selectInput}from "./validationDuForm.js"

 
 
 const addjoueurs=document.querySelector('.addJouersImag')

 

 const forme=document.querySelector('#forme')



function ouverForm(){
    console.log('khdam');
    
    addjoueurs.style.display=" none"
    forme.style.display="block"

}


function fermeForme() {
    console.log('khdam');
    for (let i = 0; i < conditionPhisiqueIunput.length; i++) {
        conditionPhisiqueIunput[i].value=""
    }
    for (let i = 0; i < inputsText.length; i++) {
        inputsText[i].value=""
    }
    for (let i = 0; i < inputsLien.length; i++) {
        inputsLien[i].value=""
    }
    selectInput.value=""



    addjoueurs.style.display=" block"
    forme.style.display="none"

    
}




addjoueurs.addEventListener('click',ouverForm)

//expotre
export{fermeForme}