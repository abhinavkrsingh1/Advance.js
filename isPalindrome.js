function isPalindrome(num){
    let original = num;
    let reversed = 0;
    while(num > 0){
        let digit = num % 10
        reversed  = reversed * 10 + digit
        num = Math.floor(num/10)
    }
    return original === reversed ? "Palindrome" : "Not Palindrome"
}

let result = isPalindrome(13321)
console.log(result);