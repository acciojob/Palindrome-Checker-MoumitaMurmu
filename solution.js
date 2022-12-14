// complete the given function

  
  
  
 
function palindrome(str){
  var remove = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(remove, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
palindrome("racecar", "RaceCar","raceCAR");
module.exports = palindrome
