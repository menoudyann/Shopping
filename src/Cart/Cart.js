"use strict";

const EmptyCartException = require("./EmptyCartException.js");
const UpdateCartException = require("./UpdateCartException.js");

module.exports = class Cart {
  //region private attributes
  #items = [];
  //endregion private attributes

  //region public methods
  constructor(items) {
    this.items = items ;
  }

  get items() {
    if (!Array.isArray(this.#items)) {
      throw new EmptyCartException();
    }
    return this.#items;
  }

  set items(value) {
    if (!Array.isArray(this.#items)) {
      throw new EmptyCartException();
    }
    this.#items = value;
  }

  get total() {
    const items = this.items;
    let total = 0;

    for (let item of this.items) {
      total += item.quantity * item.price;
    }
    return total;
  }

  count(unique = false) {
    if (this.#items === null) {
      throw new EmptyCartException();
    }

    if (unique) {
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
