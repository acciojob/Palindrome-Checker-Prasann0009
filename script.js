// complete the given function

function palindrome(str){
 s = s.replace(/[\W_]/g, '').toLowerCase();
  return s === s.split('').reverse().join('');
}
module.exports = palindrome

