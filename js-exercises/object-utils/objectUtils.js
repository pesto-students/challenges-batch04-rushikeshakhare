const map = (obj, fn) => Object.fromEntries(Object.entries(obj).map(fn));

const invert = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === 'object') return false;
  }
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key]),
  );
};

const filter = (obj, fn) => Object.fromEntries(
  Object.entries(obj).filter(fn),
);

const all = (obj, fn) => Object.entries(obj).every(fn);

const some = (obj, fn) => Object.entries(obj).some(fn);

const merge = (...args) => {
  let mergedObject = {};
  args.forEach((inputArgument) => {
    mergedObject = { ...mergedObject, ...inputArgument };
  });
  return mergedObject;
};

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
