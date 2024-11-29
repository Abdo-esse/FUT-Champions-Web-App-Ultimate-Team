import{ouverForm,updateDataBtn}from "./ouverERFermeform.js"
import{data,localStorageData,sendDataBtn,selectInput,photoInputs,flagInputs,clubInputs,logoInputs,ratingInputs,paceInputs,shootingInputs,passingInputs,dribblingInputs,defendingInputs,physicalInputs,
    fullNameInputs} from "./validationDuForm.js"
    


 //div des inputs du joueurs
let joueur=document.querySelector('.joueurs')


//les labelle des  des inputs du GK
const labelGolkepr=document.querySelectorAll('.goolkepr')


//les labelle des  des inputs du GK
const labelJoueur=document.querySelectorAll('.labelJoueur')



 function formeUpdateData(index) {
 
    ouverForm()
    updateDataBtn.style.display="block"
    sendDataBtn.style.display="none"
    
    
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
    if (selectInput.value=="GK"){
        labelGolkepr.forEach(label=>label.style.display="block")
        labelJoueur.forEach(label=>label.style.display="none")
        joueur.style.display="block"
     }
    else{
        labelGolkepr.forEach(label=>label.style.display="none")
        labelJoueur.forEach(label=>label.style.display="block")
        joueur.style.display="block"
      }
   
    
    
 }


 


 export{formeUpdateData}