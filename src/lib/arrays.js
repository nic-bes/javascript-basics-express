const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
  return array;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => {
  return numbers.toString().split(",");

};

const uppercaseWordsInArray = strings => {
  return strings.toString().toUpperCase().split(",");

};

const reverseWordsInArray = strings => {
  return strings.toString().reverse().join(" ").split("");
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter(index, 1);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(str => /^[aeiou]/i.test(str));
};

const removeSpaces = string => {
  return string.replace(/\s+/g, "");
};

const sumNumbers = numbers => {
  return (
    numbers.reduce((a, b) => a + b, 0)
  );
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
