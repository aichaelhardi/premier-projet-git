const prompt = require('prompt-sync')();
let lettre = prompt("entrez une lettre:" ). toLowerCase();
switch(lettre){ 
    case`a`:
    case`e`:
    case`i`:
    case`o`:
    case`u`:
    case`y`:
    console.log(`la lettre "${lettre}" est voyelle .`  );
    break;
    default:
    console.log(`  la lettre "${lettre}" est consonne . ` );    
}