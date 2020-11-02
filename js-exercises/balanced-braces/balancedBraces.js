const braces = {
  '[': ']',
  '(': ')',
  '{': '}',
};

const removeAllCharactersExcludingBraces = (rawString) => {
  let modifiedString = '';
  const allBraces = [...Object.keys(braces), ...Object.values(braces)];
  for (const char of rawString) {
    if (allBraces.includes(char)) {
      modifiedString += char;
    }
  }
  return modifiedString;
};

const balancedBraces = (inputString) => {
  const modifiedString = removeAllCharactersExcludingBraces(inputString);
  const stack = [];
  for (const char of modifiedString) {
    if (braces[char]) {
      stack.push(braces[char]);
    } else if (char !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};

export {
  balancedBraces,
};
