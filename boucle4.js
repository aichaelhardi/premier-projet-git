const prompt = require('prompt-sync')();
let n = parseInt(prompt("donner un nombre entier:" ));

for (let i=1 ; i<=n ;i++ )
    if(  i % 1 ){
       
        console.log (`le nombre est:"  ${i}`);
    }