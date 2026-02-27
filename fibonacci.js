
printFibonacci(8)
function printFibonacci(num){
    let a = 0;
    let b = 1;
    if(num === 0 && num ===1) return 
    for(let i=2;i<=num;i++ ){
        let temp = a + b;
        console.log(temp);
        a=b;
        b=temp;
    }
}
printFibonacci(8)