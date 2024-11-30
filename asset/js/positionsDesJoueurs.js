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

const fermereDivCardfitrerBtn=document.querySelector('.retour')



let idCard=null






  cardeJouerTerain.forEach((button)=>{
    button.addEventListener('click',(card)=>{
        positionJoueur=card.target.closest('.cardeJouerTerain').dataset.position
        idCard=card.target.closest('.cardeJouerTerain').id
        
        
        
        console.log(positionJoueur);
        ouverDivCardfitrer()
        filtrePosition()
        transporterdata()
    }
    )
  })
  
  function filtrePosition() {
    // filterData=filterData.map()
    let filterData = data.filter(place => place.position == positionJoueur);
    
    displayCard(cardFiltrer,filterData)
    cardFiltrer.querySelectorAll('.updateAndDelet').forEach(card=>card.style.display=" none")
    
    
  }
 
  function transporterdata() {
    let addToTerain=cardFiltrer.querySelectorAll('.cardeJouer')
    addToTerain.forEach(button=>{
   
      
      button.addEventListener('click',()=>{
        let newcard=button.cloneNode(true)
     
        let cardterainId=document.getElementById(idCard)
        cardterainId.appendChild(newcard)
        button.remove()
        fermereDivCardfitrer()
        
      })
    })

  }
  
  function ouverDivCardfitrer(){
    console.log(cardFiltrer.querySelectorAll('.updateAndDelet'));
    
    
    cardFiltrerParent.style.display="block"
   addjoueurs.style.display=" none"
  }
  
  function fermereDivCardfitrer() {
       cardFiltrerParent.style.display="none"
   addjoueurs.style.display=" block"
  }

  fermereDivCardfitrerBtn.addEventListener('click',fermereDivCardfitrer)