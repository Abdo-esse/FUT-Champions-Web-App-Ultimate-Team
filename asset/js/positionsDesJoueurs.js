import{data,localStorageData} from "./validationDuForm.js"


// select les card du joueurs
  let cardeJouerTerain=document.querySelectorAll('.cardeJouerTerain')
console.log(cardeJouerTerain);
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
    
    console.log(data);

    
    // let positionCard=data.filter(position)
    
  }