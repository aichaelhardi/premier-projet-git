const prompt = require('prompt-sync')();
let n = parseInt(prompt("entrer le nombre de la table de multiplication"));
console.log(` table de multiplication de n  ${n}: `);
 for (let i=1 ; i<=10 ; i++) {
    let result = n * i;
    
console.log (`${n}*${i}= ${result} `);
 }
