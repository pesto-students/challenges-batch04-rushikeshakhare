function throttle(fn, timeInMs) {
  let timeout = null;
  return (...args) => {
    if (timeout) return;
    timeout = setTimeout(() => {
      fn.apply(this, args);
      timeout = null;
    }, timeInMs);
  };
}

export {
  throttle,
};
