
let revenu   = parseFloat(prompt( " quelle est votre revenu annuel (en euros) :" ));
let score    = parseInt(prompt( "quelle est votre score (sur 1000) :" )); 
let duréé    =parseInt(prompt("quelle est votre duréé de prét (en année:" ));
if (  revenu>=30000   && score>=700 && duréé<= 10                                ) {
    console.log(" eligible");
}else if ( revenu >=30000   && score>=650 && duréé<= 15                           ) {
    console.log(" eligible avec conditions");
} else {
    console.log("pas eligible")
} 
    




