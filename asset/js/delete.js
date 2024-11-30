import{data,localStorageData} from "./validationDuForm.js"
import{ displayCard} from "./displayCard.js"

function deleteJoueur(indexDelet) {
    
    data.splice(indexDelet,1)
    displayCard(data)
    localStorageData()
}

export{ deleteJoueur}