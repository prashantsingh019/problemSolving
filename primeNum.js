function findPrime(n){
  for(let i = 2;i < n;i++){
     if(n%i==0){
        return `Not a Prime Number`;
     }
  }
  return `It 's a PrimeNum`;
}

let response = findPrime(6);
console.log(response);
