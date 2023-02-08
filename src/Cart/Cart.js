"use strict";

const EmptyCartException = require("./EmptyCartException.js");
const UpdateCartException = require("./UpdateCartException.js");
//const InvalidQuantityException = require("./InvalidQuantityException.js");
//const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class Cart {
  //region private attributes
  #items = [];
  #total;
  #quantity;
  #price;
  //endregion private attributes

  //region public methods
  constructor(items) {
    this.#items = items;
    this.#total = this.#quantity * this.#price;
  }

  get items() {
    if (this.#items === null) {
      throw new EmptyCartException();
    }
    return this.#items;
  }

  get total() {
    if (this.#items === null) {
      throw new EmptyCartException();
    }

    let total = 0;

    for (let item of this.items) {
      total += item.quantity * item.price;
    }
    return total;
  }

  count(bool = false) {
    if (this.#items === null) {
      throw new EmptyCartException();
    }

    if (bool) {
      return this.#items.length;
    }

    let total = 0;
    for (let item of this.items) {
      total += item.quantity;
    }

    return total;
  }

  add(items) {
    if (items === null) {
      throw new UpdateCartException();
    }

    this.#items = items;
  }
  //endregion public methods
  //region private methods
  //endregion private methods
};
