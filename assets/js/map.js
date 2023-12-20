/*
  Map - карта словник асоціативний масив
*/

// const map1 = new Map();

//add = set
// map1.set('a', [10,'why'])
// map1.set(123, 'number')
// map1.set([10,'why'], 'also')

//=========
const vocabulary = new Map();

vocabulary.set('cat', 'кіт');
vocabulary.set('gray', 'сірий');
vocabulary.set('mouse', 'миша');
vocabulary.set('hunted', 'вполював');
vocabulary.set('run', 'бігти');
vocabulary.set('after', 'за');
// vocabulary.set('it', 'це');
vocabulary.set('and', 'та');

const testText = 'Cat run after gray mouse and hunted it';

// function translate(str) {
//   const words = str.toLowerCase().split(' ');
//   const translatedWords = [];
//   for (const word of words) {
//     translatedWords.push(vocabulary.has(word) ? vocabulary.get(word) : word);
//   }
//   return translatedWords.join(' ');
// }

// function translate2(str) {
//   return str
//     .toLowerCase()
//     .split(' ')
//     .map((word) => (vocabulary.has(word) ? vocabulary.get(word) : word))
//     .join(' ');
// }

translate3 = (str, vocab=vocabulary) =>
  str
    .toLowerCase()
    .split(' ')
    .map((word) => (vocab.has(word) ? vocab.get(word) : word))
    .join(' ');


const textTest = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const hwTask = new Map();

function makeMapOfLetters(text){
  const map = new Map();

  for (const letter of text) {
    // if(letter>='a' && letter <='z' || letter>='A' && letter <='Z'){
    if(letter.toLowerCase() !== letter.toUpperCase()){
      map.has(letter) ? map.set(letter, map.get(letter)+1) : map.set(letter, 1)
    }
  }

  return map
}

mapOfText1 = makeMapOfLetters(textTest)