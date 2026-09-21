const prompt = require('prompt-sync')();
let nombre = parseInt(prompt("combien de nombre voulez vous :"));
let facteur = parseInt(prompt("quelle est le valeur de multiplication"));
let table=[];
facteur = tableau[0] 
for (let i=0 ; i<nombre ;i++){

    let result =  parseInt(prompt(` entrez element ${i} :`))
   tableau.push(result);

    facteur= facteur * tableau[i];
}
console.log( `${facteur}` );