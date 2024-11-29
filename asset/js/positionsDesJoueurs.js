import{data,localStorageData} from "./validationDuForm.js"


// select les card du joueurs
  let cardeJouerTerain=document.querySelectorAll('.cardeJouerTerain')
// position 
let positionJoueur=null



  cardeJouerTerain.forEach((button)=>{
    button.addEventListener('click',(card)=>{
        positionJoueur=card.target.closest('.cardeJouerTerain').dataset.position
        console.log(positionJoueur);
        
        filtrePosition()
    }
    )
  })
  
  function filtrePosition() {
    console.log('data');
     let filtreData=data.filter(place=>place.position===positionJoueur)
    console.log(filtreData)

    
    // let positionCard=data.filter(position)
    
  }