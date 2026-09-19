const prompt = require('prompt-sync')();

let age = parseInt(prompt("age conducteur  (en années) :" ));
let type=  parseInt(prompt("1: sportife ,2:utilitaire ,3: familiale : "));
let accident = parseInt(prompt(" donner le nombre accident au cours de dernier 5 année:" ));
let prime = 500;

if ( age < 25 ) {
    prime *=1.5;
}  

else if (age> 65) {
    
     prime *= 1.2 ;
}
if ( type === 1 ) {
     prime *= 2;
}  else if (   type=== 2   ) {
    prime*= 1.2;
} else if ( type === 3 ) {
     prime*= 1.1;
} 
    
if ( accident> 1 ){
   prime *= 1/3;
    }
    console.log(` votre prime d'assurance sera de :${ prime}€ `);