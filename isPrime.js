function isPrime(num){
    if(num <= 1) return "Not Prime";
    for(let i =2; i<=Math.sqrt(num);i++){
        if(num %  i === 0){
            return "Not prime"
        }
        return "Prime"
    }
}

let result = isPrime(7)
console.log(result);