const allSettled = (promises) => {
  if (!Array.isArray(promises) || !promises.length) return Promise.resolve([]);
  const promiseResults = [];
  let resultCounter = 0;
  return new Promise(resolve => {
    promises.forEach((promise, index) => Promise.resolve(promise)
      .then(result => {
        resultCounter += 1;
        promiseResults[index] = ({ status: 'fulfilled', value: result });
        if (resultCounter === promises.length) {
          resolve(promiseResults);
        }
      })
      .catch(err => {
        resultCounter += 1;
        promiseResults[index] = ({ status: 'rejected', reason: err });
        if (resultCounter === promises.length) {
          resolve(promiseResults);
        }
      }));
  });
};

export { allSettled };
