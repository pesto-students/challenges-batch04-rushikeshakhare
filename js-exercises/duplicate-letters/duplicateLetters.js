function duplicateLetters(inputString) {
  if (!inputString) return false;
  const occurenceCounter = [];
  inputString.split('').forEach((stringChar) => {
    const charIndex = occurenceCounter.findIndex((element) => element.char === stringChar);
    if (charIndex > -1) {
      const { occurence } = occurenceCounter[charIndex];
      occurenceCounter[charIndex].occurence = occurence + 1;
    } else {
      occurenceCounter.push({
        char: stringChar,
        occurence: 1,
      });
    }
  });
  occurenceCounter.sort((a, b) => a.occurence - b.occurence);
  const maxOccurenceLetter = occurenceCounter[occurenceCounter.length - 1];
  return maxOccurenceLetter.occurence === 1 ? false : maxOccurenceLetter.occurence;
}

export {
  duplicateLetters,
};
