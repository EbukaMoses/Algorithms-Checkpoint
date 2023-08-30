const sentence = "Your instructor will evaluate your checkpoint based on the criterias mentioned below. All criteria are rated from 0 to 5";

// 1. The length of the sentence (the number of characters).
function CharacterCount(str) { 
  return str.split("").length;
}
console.log(CharacterCount(sentence));

// 2. The number of words in the sentence (assuming that the words are separated by a single space).
function WordCount(str) { 
  return str.split(" ").length;
}
console.log(WordCount(sentence));

// 3. The number of vowels in the sentence.
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
// const vowelSentence = sentence.split("");

function countVowels(str) {
  let counts = 0;
  for(let i = 0; i < sentence.length; i++) {
    if(vowels.includes(str[i])) {
      counts++;
    }
  }
  return counts;
}

countVowels(sentence);
// console.log(sentence);