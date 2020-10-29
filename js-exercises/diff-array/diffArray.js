function diffArray(firstArray, secondArray) {
  if (!(Array.isArray(firstArray) && Array.isArray(secondArray))) {
    throw new Error(`Error: Expected two array arguments, Received : ${typeof firstArray} ${typeof secondArray}`);
  }
  const arrayWithUniqueElements = Array.from(new Set([...firstArray, ...secondArray]));
  return arrayWithUniqueElements.filter((element) => {
    const isElementPresentInFirstArray = firstArray.find((elem) => elem === element);
    const isElementPresentInSecondArray = secondArray.find((elem) => elem === element);
    return ((isElementPresentInFirstArray && !isElementPresentInSecondArray)
    || (!isElementPresentInFirstArray && isElementPresentInSecondArray));
  });
}

export {
  diffArray,
};
