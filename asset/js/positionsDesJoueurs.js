import{data,localStorageData} from "./validationDuForm.js"
import{ displayCard,reserve} from "./displayCard.js"
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

// div chaanger 
let retourAchengemnet=null

let datachandement={}

let objectTerain={}

let dataTerain=[]



  cardeJouerTerain.forEach((button)=>{
    button.addEventListener('click',(card)=>{
      if (button.hasChildNodes()) {
        retourAchengemnet=button.childNodes[0]
        datachandement={

          id:button.childNodes[0].id,
          fullName:retourAchengemnet.childNodes[7].childNodes[0].textContent,
          photo:retourAchengemnet.childNodes[3].childNodes[1].currentSrc,
          position:retourAchengemnet.childNodes[1].childNodes[3].textContent,
          flag:retourAchengemnet.childNodes[11].childNodes[1].childNodes[1].currentSrc,
          logo:retourAchengemnet.childNodes[11].childNodes[3].childNodes[0].currentSrc, 
          rating:retourAchengemnet.childNodes[1].childNodes[1].textContent,
          pace:retourAchengemnet.childNodes[9].childNodes[1].childNodes[2].textContent,
          shooting:retourAchengemnet.childNodes[9].childNodes[3].childNodes[2].textContent,
          passing:retourAchengemnet.childNodes[9].childNodes[5].childNodes[2].textContent,
          dribbling:retourAchengemnet.childNodes[9].childNodes[7].childNodes[2].textContent,
          defending:retourAchengemnet.childNodes[9].childNodes[9].childNodes[2].textContent,
          physical:retourAchengemnet.childNodes[9].childNodes[11].childNodes[2].textContent
          
        }          
      }
      positionJoueur=card.target.closest('.cardeJouerTerain').dataset.position
        idCard=card.target.closest('.cardeJouerTerain').id
          ouverDivCardfitrer()
          filtrePosition()
          transporterdata()
    })
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
        iddelet=button.id
        
        cardeJouerTerain.forEach((button)=>{
    
          if (button.hasChildNodes()) {
            data.push(datachandement)
            localStorageData()  
          }})
          
        deletCard()
        let cardterainId=document.getElementById(idCard)
        cardterainId.innerHTML=``
        cardterainId.appendChild(newcard)
        
        objectTerain={
          id:newcard.id,
          fullName:newcard.childNodes[7].childNodes[0].textContent,
          photo:newcard.childNodes[3].childNodes[1].currentSrc,
          position:newcard.childNodes[1].childNodes[3].textContent,
          flag:newcard.childNodes[11].childNodes[1].childNodes[1].currentSrc,
          logo:newcard.childNodes[11].childNodes[3].childNodes[0].currentSrc, 
          rating:newcard.childNodes[1].childNodes[1].textContent,
          pace:newcard.childNodes[9].childNodes[1].childNodes[2].textContent,
          shooting:newcard.childNodes[9].childNodes[3].childNodes[2].textContent,
          passing:newcard.childNodes[9].childNodes[5].childNodes[2].textContent,
          dribbling:newcard.childNodes[9].childNodes[7].childNodes[2].textContent,
          defending:newcard.childNodes[9].childNodes[9].childNodes[2].textContent,
          physical:newcard.childNodes[9].childNodes[11].childNodes[2].textContent

        }
        // console.log(objectTerain);
        
         dataTerain.push(objectTerain)
         savrTerainLocalstorage()
        //  console.log(dataTerain);
         
       
        button.remove()
        fermereDivCardfitrer()
        // savrTerainLocalstorage()
        
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
     let indexSu= data.findIndex(x=>x.id === iddelet)
   deleteJoueur(indexSu)

  }
  
  function fermereDivCardfitrer() {
       cardFiltrerParent.style.display="none"
   addjoueurs.style.display=" block"
  }

   function savrTerainLocalstorage() {

          console.log(dataTerain);
          
          

   }


  fermereDivCardfitrerBtn.addEventListener('click',fermereDivCardfitrer)














  