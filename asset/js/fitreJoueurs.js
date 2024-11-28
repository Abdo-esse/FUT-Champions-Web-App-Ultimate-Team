import{data,localStorageData} from "./validationDuForm.js"
// import{ reserve} from "./displayCard.js"
let cardeJouer = document.querySelector('.cardeJouer')
 console.log(cardeJouer
 );
 
function filtrJours() {
    localStorageData()
    console.log(data);
    
}

cardeJouer.addEventListener('click',filtrJours)