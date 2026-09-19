const prompt = require('prompt-sync')();
let taille = parseInt(prompt("que taille voulez vous :"));
let tableau =[];
for(let i=0; i<taille ;i++){
let result = prompt(` entrez element ${i+1} :`);
tableau.push (result);

}
console.log ("le  tableau :" );
console.log ( tableau);