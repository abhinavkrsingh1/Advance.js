function isreverse(str){
  let result = str.split("").reverse().join("")
  return result
}

let str = isreverse("hello")
console.log(str);