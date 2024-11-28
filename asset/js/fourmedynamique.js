import{selectInput} from "./validationDuForm.js"

//div des inputs du GK
let golKepr=document.querySelector('.goolkepr')


//div des inputs du joueurs
let joueur=document.querySelector('.joueurs')



function formedynamiq() {
    if (selectInput.value=="GK"){
        golKepr.style.display="block"
        joueur.style.display="none"
     }else if (selectInput.value=="") {
        golKepr.style.display="none"
        joueur.style.display="none"
     }else{
         joueur.style.display="block"
         golKepr.style.display="none"
     }
      
}


selectInput.addEventListener('change',formedynamiq)

export{
    joueur,golKepr
}