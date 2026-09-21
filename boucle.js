const prompt = require(`prompt-sync`)();
let nombre =[1,2,3,4,5];
for (let i=1 ;i<nombre.length;i++){
   if (i === 3){
   continue;
   }
   console.log(`${i}`);
}