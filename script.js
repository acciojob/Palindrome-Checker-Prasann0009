// complete the given function

function palindrome(str){
 str = str.replace(/[\W_]/g, '').toLowerCase();
  return str === str.split('').reverse().join('');
}
module.exports = palindrome

