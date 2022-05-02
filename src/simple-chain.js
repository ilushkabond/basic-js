const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    if (typeof value)
      this.chains.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || !(position > 0 && position < this.chains.length)) {
      this.chains.length = 0;
      throw Error('You can\'t remove incorrect link!');
    }
    this.chains.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    const chain = this.chains.map(e => `( ${e} )`).join('~~');
    this.chains.length = 0;
    return chain;
  }
};

module.exports = {
  chainMaker
};
