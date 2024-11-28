import{data,localStorageData} from "./validationDuForm.js"

//div de reserve
const reserve=document.querySelector('.cardsJouers')





function displayCard() {
    
   reserve.innerHTML="";

   data.forEach(elment=>
      
    reserve.innerHTML+=`
    <div class="cardeJouer">
                <div class="ratingAndPosition">
                  <h1>${elment.rating}</h1>
                  <p class="position">${elment.position}</p>
                </div>
                <div class="photo">
                 <img src="${elment.photo}" alt="" srcset="">
                </div>
                <div class="name"><h5>${elment.fullName}</h5></div>
                <div class="conditionPhisique">
                   <div class="pace"><p>PAC</p> <h6>${elment.pace}</h6></div>
                   <div class="shooting"><p>SHO</p> <h6>${elment.shooting}</h6></div>
                   <div class="passing"><p>PAS</p> <h6>${elment.passing}</h6></div>
                   <div class="dribbling"><p>DRI</p> <h6>${elment.dribbling}</h6></div>
                   <div class="defending"><p>DFE</p> <h6>${elment.defending}</h6></div>
                   <div class="physical"><p>PHY</p> <h6>${elment.physical}</h6></div>
                </div>
                <div class="club">
                 <div class="nationalite"> <img src="${elment.logo}" alt=""></div>
                 <div class="ekipe"><img src="${elment.flag}" alt=""></div>
                 
                </div>
             </div>
    `
   ) 
   localStorageData()
    
}

export{
    displayCard
}