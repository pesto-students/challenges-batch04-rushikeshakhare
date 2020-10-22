/* eslint-disable no-undef */

function flipArgs() {
  return (...args) => {
    const allArguments = args;
    return allArguments.reverse();
  };
}

const flipped = flipArgs();

function encodeString(stringToEncode) {
  const reversedStringArray = flipped(...stringToEncode.split(' '));
  return reversedStringArray.map((stringElement) => stringElement.split('').reverse().join('')).join('$');
}

function decodeString(encodedString) {
  const encodedStringArray = encodedString.split('$');
  const reversedStringArray = flipped(...encodedStringArray);
  return reversedStringArray.map((stringElement) => stringElement.split('').reverse().join('')).join(' ');
}

export {
  flipArgs,
  encodeString,
  decodeString,
};
