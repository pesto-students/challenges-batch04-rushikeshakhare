const limitFunctionCallCount = (inputFunction, n) => {
  let functionCalls = 0;
  return (...args) => {
    if (functionCalls < n) {
      functionCalls += 1;
      return inputFunction(...args);
    }
    return null;
  };
};

export {
  limitFunctionCallCount,
};
