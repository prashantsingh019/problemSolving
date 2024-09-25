function generatefibonacci(limit){
  let fibArr = [0,1];
  for(let i = 2;i < limit;i++){
    if(fibArr[i-1] + fibArr[i-2]<limit){
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }
    }
  return fibArr;
}


let result = generatefibonacci(10);
console.log(result);
