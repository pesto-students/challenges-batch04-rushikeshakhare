function removeFalsyValues(array) {
  if (!Array.isArray(array)) {
    throw new Error(`Error: Expected array argument, Received : ${typeof array}`);
  }
  return array.filter((elem) => elem);
}

export {
  removeFalsyValues,
};
