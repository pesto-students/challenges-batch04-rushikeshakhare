const accessorProperties = () => ({
  currentNumber: null,
  get number() {
    return this.currentNumber;
  },
  set number(value) {
    this.currentNumber = Number(parseInt(value, 10).toString(2));
  },
});

export {
  accessorProperties,
};
