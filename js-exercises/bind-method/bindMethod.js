// You can change the `args`
function bind(inputFunction, objectToBind) {
  return (...args) => inputFunction.apply(objectToBind, args);
}

module.exports = { bind };
