// Armstrong number means a num sum is equal to 

function checkArmstrong(num){
   let str = num.toString();
   let n = str.length;
   let sum = 0;
   for(let i = 0;i < n;i++){
      let toNum = parseInt(str[i]);
      sum += Math.pow(toNum,n);
   }
   if(num === sum){
    return `${num} is a Armstrong Number`;
   }else{
    return `${num} is not a Armstrong Number`;
   }
}

let result = checkArmstrong(370); // 1 + 125 + 27
console.log(result);
