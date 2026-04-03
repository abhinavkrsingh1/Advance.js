// function isreverse(str){
//   let result = str.split("").reverse().join("")
//   return result
// }

// let str = isreverse("hello")
// console.log(str);


const arr = [23,41,25,49,47]
// const res  = Math.max(...arr)
// console.log(res);


let max = 0;
for(let i=0;i<=arr.length;i++){

     if(arr[i] > max){
      max = arr[i];
     }
   
    
}
console.log(max);