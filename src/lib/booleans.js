const negate = a => {
  return a !== true;
};

const both = (a, b) => {
  return (a && b) === true;
};

const either = (a, b) => {
  return (a || b) === true;
};

const none = (a, b) => {
  if (a || b === true) {
    return false;
  } else if (a && b === true) {
    return false;
  } else {
    return true;
  }
};

const one = (a, b) => {
  return Boolean(a !== b);
};

const truthiness = a => {
  return Boolean(a);
};

const isEqual = (a, b) => {
  return ( a === b ) === true;
};

const isGreaterThan = (a, b) => {
  return ( a > b ) === true; 
};

const isLessThanOrEqualTo = (a, b) => {
  return ( a <= b ) === true;
};

const isOdd = a => {
  return Boolean(a % 2 !== 0);
};

const isEven = a => {
  return Boolean(a % 2 === 0);
};

const isSquare = a => {
  return Boolean ( Math.sqrt(a) % 1 === 0 );
};

const startsWith = (char, string) => {
  return Boolean( char === string.charAt(0));
};

const containsVowels = string => {
  let matchingInstances = string.match(/[aeiou]/gi);
    // Check if matching instances exist then calculate length
    if(matchingInstances) {
         // Return number of vowels
        return true
    } else{
        return false
    }
};


const isLowerCase = string => {
 return ( string == string.toLowerCase()) === true;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
}; 