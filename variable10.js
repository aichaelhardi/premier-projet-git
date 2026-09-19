const prompt = require('prompt-sync')();
let Rayon = Number(prompt("quelle est le rayon de sphére" ));
const pi   = 3.14159;
let volume = Number( (4/3) * pi * (Rayon**3) );
console.log(`le rayon est : ${volume}`);
 