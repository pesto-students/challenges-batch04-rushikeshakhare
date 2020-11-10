function debounce(fn, timeInMs) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), timeInMs);
  };
}

export { debounce };
