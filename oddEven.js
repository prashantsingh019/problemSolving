
function findOddEven(n){
   if(n%2==0){
     return `${n} is a Even number.`;
   }else{
     return `${n} is a Odd number`;
   }
}


let result = findOddEven(2);
console.log(result);
