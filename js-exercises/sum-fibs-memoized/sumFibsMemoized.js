function sumFibs(num) {
  let firstElement = 0;
  let secondElement = 1;
  let nextElement = firstElement + secondElement;
  let totalSum = 0;
  totalSum += nextElement;

  while (nextElement <= num) {
    if (nextElement % 2 !== 0) totalSum += nextElement;
    firstElement = secondElement;
    secondElement = nextElement;
    nextElement = firstElement + secondElement;
  }
  return totalSum;
}

function cacheFunction(functionToCache) {
  const cache = {};
  return (num) => {
    if (num in cache) {
      return cache[num];
    }
    const result = functionToCache(num);
    cache[num] = result;
    return result;
  };
}

export {
  sumFibs,
  cacheFunction,
};
