function getMaximumSubarray(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;
  let maxStartIndex = 0;
  let maxEndIndex = arr.length - 1;
  let currentStartIndex = 0;

  arr.forEach((currentNumber, currentIndex) => {
    currentSum += currentNumber;
    if (maxSum < currentSum) {
      maxSum = currentSum;
      maxStartIndex = currentStartIndex;
      maxEndIndex = currentIndex;
    }
    if (currentSum < 0) {
      currentSum = 0;
      currentStartIndex = currentIndex + 1;
    }
  });
  return arr.slice(maxStartIndex, maxEndIndex + 1);
}

export { getMaximumSubarray };
