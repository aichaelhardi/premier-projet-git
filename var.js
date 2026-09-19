const prompt = require('prompt-sync')();
let c = prompt("quelle est la valeur de c?");
if (c<0) {
    console.log("solide");
} else if (  c>=0 && c<100 ) {
    console.log("liquide");
} else {
    console.log("gaz");
} 
    
