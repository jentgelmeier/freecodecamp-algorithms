function convertToRoman(num) {
  let roman = []
 const key = {
   'M': 1000,
   'CM': 900,
   'D': 500,
   'CD': 400,
   'C': 100,
   'XC': 90,
   'L': 50,
   'XL': 40,
   'X': 10,
   'IX': 9,
   'V': 5,
   'IV': 4,
   'I': 1
 }
 while (num >= 1000) {
   num -= 1000;
   roman.push('M');
 }
 while (num >= 900) {
   num-= 900
   roman.push('CM')
 }
 while (num >= 500) {
   num-= 500
   roman.push('D')
 }
while (num >= 400) {
   num-= 400
   roman.push('CD')
 }
 while (num >= 100) {
   num-= 100
   roman.push('C')
 }
 while (num >= 90) {
   num-= 90
   roman.push('XC')
 }
while (num >= 50) {
   num-= 50
   roman.push('L')
 }
while (num >= 40) {
   num-= 40
   roman.push('XL')
 }
 while (num >= 10) {
   num-= 10
   roman.push('X')
 }
 while (num >= 9) {
   num-= 9
   roman.push('IX')
 }
 while (num >= 5) {
   num-= 5
   roman.push('V')
 }
while (num >= 4) {
   num-= 4
   roman.push('IV')
 }
while (num >= 1) {
   num-= 1
   roman.push('I')
 }

 return roman.join('');
}

console.log(convertToRoman(36));