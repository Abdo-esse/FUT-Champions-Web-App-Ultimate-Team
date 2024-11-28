import{ouverForm}from "./ouverERFermeform.js"
import{data,localStorageData} from "./validationDuForm.js"


 
// // Ajout des événements dynamiquement
// document.querySelectorAll('.updat').forEach((button) => {
//     button.addEventListener('click', updateData);
//  });
 function updateData(index) {
    ouverForm()
    console.log(index);
    console.log(data[index]);
    
    
 }



 export{updateData}