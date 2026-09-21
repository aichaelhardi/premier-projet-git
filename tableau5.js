const prompt = require('prompt-sync')();
let nombre = parseInt(prompt("quelle est le nombre d'élement voulez vous:" ));
let tableau =[];
for(let i=0; i<nombre ; i++){
    let result =  parseInt(prompt(`entrez element ${i} :`));
    tableau.push(result);
}
let min = tableau[0];
for (let i = 0; i < nombre; i++)
{
    if (tableau[i] < min)
    {
        tableau[i] = min;
    }

}
console.log("le manimum est :" , min );
