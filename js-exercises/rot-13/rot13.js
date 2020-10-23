const TRANSFORM_CHAR_UPPER_LIMIT = 90;
const TRANSFORM_CHAR_LOWER_LIMIT = 65;

function getTransformedCharCode(currentCharCode) {
  const transformedCharCode = currentCharCode - 13;
  if (transformedCharCode < TRANSFORM_CHAR_LOWER_LIMIT) {
    return TRANSFORM_CHAR_UPPER_LIMIT - (TRANSFORM_CHAR_LOWER_LIMIT - transformedCharCode) + 1;
  }
  if (transformedCharCode > TRANSFORM_CHAR_UPPER_LIMIT) {
    return TRANSFORM_CHAR_LOWER_LIMIT + (transformedCharCode - TRANSFORM_CHAR_UPPER_LIMIT) + 1;
  }
  return transformedCharCode;
}

function rot13(stringToDecode) {
  const transformedChars = [];
  for (const char of stringToDecode) {
    const charCode = char.charCodeAt(0);
    if (charCode >= TRANSFORM_CHAR_LOWER_LIMIT && charCode <= TRANSFORM_CHAR_UPPER_LIMIT) {
      transformedChars.push(getTransformedCharCode(charCode));
    } else transformedChars.push(charCode);
  }
  return String.fromCharCode(...transformedChars);
}

export {
  rot13,
};
