//Let's make a Palindrome Words Checker****
let palindromeChecker = (word) => {
  let revStr = "";
  let len = word.length;
  for (i = len - 1; i >= 0; i--) {
    revStr = revStr + word[i];
  }
  if (revStr == word) {
    console.log(`Yes ${word} is a Palindrome Word.`);
  } else {
    console.log(`No ${word} Not a Palindrome Word.`);
  }
};
////////////////////////
//Enter Your Words Here*
let word = "rotator";
////////////////////////
palindromeChecker(word);
