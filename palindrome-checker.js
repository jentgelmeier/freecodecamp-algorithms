function palindrome(str) {
  let newStr = str.slice();
  let filtered = str.toLowerCase().match(/[A-Za-z0-9]/g).toString();
  let reverse = newStr.toLowerCase().match(/[A-Za-z0-9]/g).reverse().toString();

  if (filtered == reverse) {
    return true
      } else return false
}

console.log(palindrome("eye"));