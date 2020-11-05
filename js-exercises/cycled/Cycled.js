class Cycled {
  constructor(inputArray) {
    this.currentArray = inputArray;
    this.iterator = this[Symbol.iterator]();
    this.pointer = 0;
  }

  current() {
    return this.currentArray[this.pointer];
  }

  next() {
    if (this.pointer + 1 === this.currentArray.length) this.pointer = 0;
    else this.pointer += 1;
    this.iterator.next();
    return this.currentArray[this.pointer];
  }

  previous() {
    if (this.pointer - 1 === -1) this.pointer = this.currentArray.length - 1;
    else this.pointer -= 1;
    return this.currentArray[this.pointer];
  }

  step(stepBy) {
    this.pointer += stepBy;
    while (this.pointer < 0) {
      this.pointer += this.currentArray.length;
    }
    return this.currentArray[(this.pointer) % this.currentArray.length];
  }

  reversed() {
    const arrayToReverse = [...this.currentArray];
    return arrayToReverse.reverse()[Symbol.iterator]();
  }

  indexOf(element) {
    return this.currentArray.indexOf(element);
  }

  get index() {
    return this.pointer;
  }

  set index(indexValue) {
    if (this.currentArray[indexValue]) this.pointer = indexValue;
  }

  * [Symbol.iterator]() {
    for (let i = this.pointer; i <= this.currentArray.length - 1; i += 1) {
      yield this.currentArray[i];
    }
    if (this.pointer) yield this.currentArray[this.pointer - 1];
  }
}

export {
  Cycled,
};
