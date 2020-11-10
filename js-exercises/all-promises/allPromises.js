const allPromises = (promises) => {
  if (!Array.isArray(promises) || !promises.length) return Promise.resolve([]);
  return promises.reduce(
    (ac, promise) => ac.then(
      promiseResults => Promise.resolve(promise).then(
        currentPromiseResult => [...promiseResults, currentPromiseResult],
      ),
    ), Promise.resolve([]),
  );
};

export { allPromises };
