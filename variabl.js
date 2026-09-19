const prompt = require('prompt-sync')();
let c = Number(prompt("quelle est la temperature en c"));
let k = c + 273.15;
console.log (`temperature ${k}!.`);