function isPalindrome(string) {
  let reverseString = string.split("").reverse().join("");
  return string === reverseString;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
