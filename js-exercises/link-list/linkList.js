import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
    this.nodes = [];
  }

  prepend(value) {
    this.nodes.unshift(new LinkListNode(value));
    [this.head] = this.nodes;
  }

  append(value) {
    this.nodes.push(new LinkListNode(value));
    [this.head] = this.nodes;
  }

  delete(value) {
    const valueIndexToRemove = this.nodes.findIndex((elem) => elem.value === value);
    if (valueIndexToRemove < 0) return false;
    const removedValue = this.nodes.splice(valueIndexToRemove, 1);
    [this.head] = this.nodes;
    return removedValue.length;
  }

  traverse() {
    [this.head] = this.nodes;
  }

  contains(value) {
    return this.nodes.find((elem) => elem.value === value);
  }

  length() {
    return this.nodes.length;
  }
}
