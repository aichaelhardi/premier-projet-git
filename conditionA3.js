const prompt = require('prompt-sync')();
let CA= Number(prompt("determiner le nombre de jour de congé accordé :"));
let CU = Number(prompt("determiner le nombre de jour de congé utilisé : "));
let statut = prompt("statut de employé : (0: pour temps partiel, 1: pour temps plein ");
if ( CA<CU) {
    console.log(" erreur");
}
else{ 
    if ( statut == 0) {
      result = (CA / 2) - CU;
        

    }  else if  ( statut ==1 ) {
         result = CA - CU;
        
    } 

    }
    console.log (`les jours restants sont :" ${result} `);




