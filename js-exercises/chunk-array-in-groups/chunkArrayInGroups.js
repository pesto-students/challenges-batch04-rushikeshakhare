function chunkArrayInGroups(array, chunkSize) {
  if (array.length <= chunkSize) return [array];
  return [array.slice(0, chunkSize), ...chunkArrayInGroups(array.slice(chunkSize), chunkSize)];
}

export {
  chunkArrayInGroups,
};
