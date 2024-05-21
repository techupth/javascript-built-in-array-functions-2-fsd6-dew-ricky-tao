function isPalindrome(string) {
  // Start coding here
  const checkReverse = string.split("").reverse().join("");
  console.log(checkReverse);
  return string === checkReverse;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
