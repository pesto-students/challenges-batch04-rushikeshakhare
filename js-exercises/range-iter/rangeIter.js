function validateRangeIter(inputFn) {
  return (lb, ub) => {
    if (Number.isNaN(lb)) throw new TypeError(`${lb} is not a number`);
    if (Number.isNaN(ub)) throw new TypeError(`${lb} is not a number`);
    if (lb > ub) return [];
    return inputFn.call(this, lb, ub);
  };
}

function* rangeIter(lb, ub) {
  for (let i = lb; i <= ub; i += 1) {
    yield i;
  }
}

const validatedRangeIter = validateRangeIter(rangeIter);

export { validatedRangeIter as rangeIter };
