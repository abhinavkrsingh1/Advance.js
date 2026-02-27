function isVowels(str){
      let vowels="aeiouAEIOU"
      for (let char of str){
      if(vowels.includes(str)){
      return true
      }
      return false
      }
} 

let result = isVowels("aeiou")
console.log(result);