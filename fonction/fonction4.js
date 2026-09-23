let nombres={
    a:22,
    b:24,
}
function min(a,b) {
    if(a<b){
        return a;
    }
    else{
        return b;
    }
}
let resultat=(min(22,24));
console.log("min est", resultat)