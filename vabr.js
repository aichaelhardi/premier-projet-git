const prompt = require('prompt-sync')();
let num1 = prompt("quelle est le premier nombre");
let num2 = prompt("quelle est le deuxieme nombre");
let num3 = prompt("quelle est le troisieme nombre");
console.log( ((num1*2) + (num2*3) + (num3*5)) /10 );