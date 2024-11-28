

//div de reserve
const reserve=document.querySelector('.cardsJouers')



function displayCard() {
   
    
    reserve.innerHTML+=`
    <div class="cardeJouer">
                <div class="ratingAndPosition">
                  <h1>90</h1>
                  <p class="position">CF</p>
                </div>
                <div class="photo">
                 <img src="/asset/image/dayez-removebg-preview.png" alt="" srcset="">
                </div>
                <div class="name"><h5>abdo</h5></div>
                <div class="conditionPhisique">
                   <div class="pace"><p>PAC</p> <h6>87</h6></div>
                   <div class="shooting"><p>SHO</p> <h6>90</h6></div>
                   <div class="passing"><p>PAS</p> <h6>87</h6></div>
                   <div class="dribbling"><p>DRI</p> <h6>94</h6></div>
                   <div class="defending"><p>DFE</p> <h6>33</h6></div>
                   <div class="physical"><p>PHY</p> <h6>64</h6></div>
                </div>
                <div class="club">
                 <div class="nationalite"> <img src="/asset/image/moooo.png" alt=""></div>
                 <div class="ekipe"><img src="/asset/image/moooo.png" alt=""></div>
                 
                </div>
             </div>
    `
    
}

displayCard()