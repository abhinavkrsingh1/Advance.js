const arr = [2,5,8,9]

function double(n){
    return n*2
}

let output = arr.map((n)=> double(n)) 
console.log(output);

function triple(n){
    return n*3
}

let output1=arr.map((n)=> triple(n))
console.log(output1);

function isBinary(n){
    return n.toString(3)
}
let output2=arr.map((n)=> isBinary(n))
console.log(output2);