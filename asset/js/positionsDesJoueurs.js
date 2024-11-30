import{data,localStorageData} from "./validationDuForm.js"
import{ displayCard} from "./displayCard.js"
import{addjoueurs}from "./ouverERFermeform.js"
import{deleteJoueur} from "./delete.js"

// select les card du joueurs
  let cardeJouerTerain=document.querySelectorAll('.cardeJouerTerain')
// position 
let positionJoueur=null

//div da card filtrer
let cardFiltrer=document.querySelector('.cardFiltrer')

//div qui contien les cards filtrer
let cardFiltrerParent=document.querySelector('.cardFiltrerParent')

//btn de retour
const fermereDivCardfitrerBtn=document.querySelector('.retour')

//id du card en html
let idCard=null

// id de card por delet
let iddelet=null

// new array pour filtrer
let filterData=[]




  cardeJouerTerain.forEach((button)=>{
    button.addEventListener('click',(card)=>{
        positionJoueur=card.target.closest('.cardeJouerTerain').dataset.position
        idCard=card.target.closest('.cardeJouerTerain').id
          ouverDivCardfitrer()
          filtrePosition()
          transporterdata()
    }
    )
  })
  
  // la fonction da filtr data par la position en terain
  function filtrePosition() {
    // filterData=filterData.map()
    filterData = data.filter(place => place.position == positionJoueur);
    displayCard(cardFiltrer,filterData)
    cardFiltrer.querySelectorAll('.updateAndDelet').forEach(card=>card.style.display=" none")
  }
 
  // la function da transporter les doner de filtra en terain
  function transporterdata() {
    let addToTerain=cardFiltrer.querySelectorAll('.cardeJouer')
    addToTerain.forEach(button=>{
   
      button.addEventListener('click',()=>{
        let newcard=button.cloneNode(true)
        // console.log(button.id);
        iddelet=button.id
        deletCard()
        // console.log(filterData);
        
     
     
        let cardterainId=document.getElementById(idCard)
      cardterainId.innerHTML=``
        cardterainId.appendChild(newcard)
        button.remove()
        fermereDivCardfitrer()
        
      })
    })

  }
  
  // la fonction da ouvar da div de jdq
  function ouverDivCardfitrer(){
    cardFiltrerParent.style.display="block"
   addjoueurs.style.display=" none"
  }

  // fonction de supremer la filtrer choisei
  function deletCard() {
    
    const indexSu= data.findIndex(x=>x.id == iddelet)
   deleteJoueur(indexSu)
  }
  
  function fermereDivCardfitrer() {
       cardFiltrerParent.style.display="none"
   addjoueurs.style.display=" block"
  }

  fermereDivCardfitrerBtn.addEventListener('click',fermereDivCardfitrer)