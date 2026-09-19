const prompt = require('prompt-sync')();
let a = Number(prompt("quelle est le premier nombre"));
let b = Number (prompt("quelle est le deuxieme nombre"));
let c = Number(prompt("quelle est le troisieme nombre"));
console.log( "le moyenne est:"  , (  (a * b * c)**(1/3)  )   );