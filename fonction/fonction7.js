
const prompt = require(`prompt-sync`)();
let nombre = Number(prompt("donner un nombre entier"));
function parité(nombre) {
    if(nombre % 2=== 0){
        return (true)
    }
else{
   return(false)
  
}
}
console.log(parité(nombre));