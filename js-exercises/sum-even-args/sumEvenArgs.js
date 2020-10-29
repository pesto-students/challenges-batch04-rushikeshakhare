const sumEvenArgs = (...args) => {
  let sum = 0;
  args.forEach((numberArg) => {
    if (numberArg % 2 === 0) sum += numberArg;
  });
  return sum;
};

export {
  sumEvenArgs,
};
