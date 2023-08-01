// Function to check if the given word is a palindrome
function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      // if the letters don't match, return false
      return false;
    }
  }

  // if we reach the middle, and all the letters match, return true
  return true;
}

/* 
  Add your pseudocode here:

  1. Start with two pointers, `startIndex` at the beginning of the word and `endIndex` at the end of the word.
  2. While `startIndex` is less than half of the word's length, do the following:
     - Compare the character at `startIndex` with the character at `endIndex`.
     - If they don't match, return false since the word is not a palindrome.
     - Move `startIndex` one step forward and `endIndex` one step backward.
  3. If the loop completes without returning false, it means all characters matched, so the word is a palindrome. Return true.

*/

/*
  Add written explanation of your solution here:

  The `isPalindrome` function takes a word as input and uses two pointers, `startIndex` and `endIndex`, to iterate from the beginning to the middle of the word. In each iteration, it compares the character at `startIndex` with the character at `endIndex`. If they don't match, it means the word is not a palindrome, and the function immediately returns false. If the loop completes without finding different characters, the word is a palindrome, and the function returns true.
*/

// You can run `node index.js` to view these console logs`node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("deified"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abccba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("A man, a plan, a canal, Panama"));
}

module.exports = isPalindrome;
