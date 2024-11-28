import{ouverForm,updateDataBtn}from "./ouverERFermeform.js"
import{data,localStorageData,selectInput,photoInputs,flagInputs,clubInputs,logoInputs,ratingInputs,paceInputs,shootingInputs,passingInputs,dribblingInputs,defendingInputs,physicalInputs,
    fullNameInputs} from "./validationDuForm.js"


 

//div des inputs du GK
let golKepr=document.querySelector('.goolkepr')


//div des inputs du joueurs
let joueur=document.querySelector('.joueurs')
 function formeUpdateData(index) {
 
    ouverForm()
    updateDataBtn.style.display="none"
    photoInputs.value=data[index].photo
    flagInputs.value=data[index].flag
    clubInputs.value=data[index].club
    logoInputs.value=data[index].logo
    ratingInputs.value=data[index].rating
    paceInputs.value=data[index].pace
    shootingInputs.value=data[index].shooting
    passingInputs.value=data[index].passing
    dribblingInputs.value=data[index].dribbling
    defendingInputs.value=data[index].defending
    physicalInputs.value=data[index].physical
    fullNameInputs.value=data[index].fullName
    selectInput.value=data[index].position
    // if (selectInput.value=="GK"){
    //     golKepr.style.display="block"
    //     joueur.style.display="none"
    // //  }
    // else{
    //      joueur.style.display="block"
    //      golKepr.style.display="none"
    // //  }
    console.log(data[index]);
    
    
 }



 export{formeUpdateData}