const prompt = require('prompt-sync')();
let a = Number(prompt("donner la premier valeur"  ));
let b = Number(prompt("donner la deuxieme valeur" ));
if (a!=b ) {
    console.log(a+b);
} else if(a==b) {
    console.log(   (a+b)*3     );
    
}
