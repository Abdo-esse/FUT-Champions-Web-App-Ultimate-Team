// import
 import{sendDataBtn,data} from "./validationDuForm.js"



 

 sendDataBtn.addEventListener('click', () => {
    // // Appeler la fonction pour enregistrer les données
    // enregitrerData();

    // Vérifier si le tableau 'data' est vide ou non
    if (data.length > 0) {
        console.log("Données enregistrées :", data); // Si 'data' n'est pas vide
    } 
});

 