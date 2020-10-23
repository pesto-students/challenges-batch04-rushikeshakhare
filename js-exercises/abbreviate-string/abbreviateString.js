import { isString } from 'util';

function abbreviateString(str) {
  if (!isString(str)) throw new ('Invalid parameters provided')();
  const spaceSeparatedWords = str.split(' ');
  if (spaceSeparatedWords.length === 1) return spaceSeparatedWords[0];
  return `${spaceSeparatedWords[0]} ${spaceSeparatedWords[spaceSeparatedWords.length - 1].substr(0, 1).toUpperCase()}.`;
}

export { abbreviateString };
