import{data,localStorageData} from "./validationDuForm.js"
import{ displayCard} from "./displayCard.js"
import{addjoueurs}from "./ouverERFermeform.js"

// select les card du joueurs
  let cardeJouerTerain=document.querySelectorAll('.cardeJouerTerain')
// position 
let positionJoueur=null

//div dae card filtrer
let cardFiltrer=document.querySelector('.cardFiltrer')

let cardFiltrerParent=document.querySelector('.cardFiltrerParent')




  cardeJouerTerain.forEach((button)=>{
    button.addEventListener('click',(card)=>{
        positionJoueur=card.target.closest('.cardeJouerTerain').dataset.position
        console.log(positionJoueur);
        
        filtrePosition()
    }
    )
  })
  
  function filtrePosition() {
    // filterData=filterData.map()
    let filterData = data.filter(place => place.position == positionJoueur);
    console.log(filterData)
    displayCard(cardFiltrer,filterData)
    cardFiltrer.querySelector('.updateAndDelet').style.display=" none"

    
    cardFiltrerParent.style.display="block"
    addjoueurs.style.display=" none"

  }
 