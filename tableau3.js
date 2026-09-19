const prompt = require('prompt-sync')();
let nombre = parseInt(prompt("quelle est le nombre d'element voulez vous:" ));
let tableau =[];
let  somme=0.
for(let i=0; i<nombre ; i++){
let result =  parseInt(prompt(` entrez element ${i} :`))
   tableau.push(result);
   somme = somme + tableau[i];
}
console.log ("le  tableau :" );
console.lig
console.log (`somme est:  ${somme}.`);
