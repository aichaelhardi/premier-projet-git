const prompt = require(`prompt-sync`)();
let nombre = Number(prompt("donner un nombre entier"));
function calcul (nombre) {
    let calcul = 1
    for(let i = nombre ; i>=0 ;i--){
        console.log(i) ;


    }
}
console.log(calcul(nombre))
console.log(calcul(9))