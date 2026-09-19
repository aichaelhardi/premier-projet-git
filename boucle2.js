const prompt = require('prompt-sync')();
let n = Number( prompt("donner un nombre positif pour le factorielle :"));
let factorielle = 1;
for (let i= 1; i<=n; i++){
factorielle *= i ;
}
console.log(`${n}! = ${factorielle}`);
