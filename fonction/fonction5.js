const prompt = require(`prompt-sync`)();
let n =Number(prompt("donner un nombre pour le factorielle  "));
function factorielle(n) {
    let factorielle = n
    for(let i= n-1; i>0 ;i--){
        factorielle = factorielle * i
    }
  return(factorielle)}
  console.log(factorielle(n))
    


  
 