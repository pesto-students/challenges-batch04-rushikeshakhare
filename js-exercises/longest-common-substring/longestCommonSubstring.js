function longestCommonSubstring(str1, str2) {
  const str1Array = [...str1];
  const str2Array = [...str2];
  const matrix = Array(str2Array.length + 1)
    .fill(null)
    .map(() => Array(str1Array.length + 1).fill(null));

  let maxSubstringLength = 0;
  let maxSubstringColumn = 0;
  let maxSubstringRow = 0;

  for (let rowIndex = 0; rowIndex <= str2Array.length; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex <= str1Array.length; columnIndex += 1) {
      if (
        columnIndex === 0 ||
        rowIndex === 0 ||
        str1Array[columnIndex - 1] !== str2Array[rowIndex - 1]
      ) {
        matrix[rowIndex][columnIndex] = 0;
      } else if (str1Array[columnIndex - 1] === str2Array[rowIndex - 1]) {
        matrix[rowIndex][columnIndex] = matrix[rowIndex - 1][columnIndex - 1] + 1;
      }

      if (matrix[rowIndex][columnIndex] > maxSubstringLength) {
        maxSubstringLength = matrix[rowIndex][columnIndex];
        maxSubstringColumn = columnIndex;
        maxSubstringRow = rowIndex;
      }
    }
  }
  if (!maxSubstringLength) return '';

  let maxSubstring = '';
  while (matrix[maxSubstringRow][maxSubstringColumn] > 0) {
    maxSubstring = str1Array[maxSubstringColumn - 1] + maxSubstring;
    maxSubstringRow -= 1;
    maxSubstringColumn -= 1;
  }
  return maxSubstring;
}

export { longestCommonSubstring };
