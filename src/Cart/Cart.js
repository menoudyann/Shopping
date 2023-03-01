"use strict";

const EmptyCartException = require("./EmptyCartException.js");
const UpdateCartException = require("./UpdateCartException.js");
const MultipleCurrenciesException = require("./MultipleCurrenciesException.js");

module.exports = class Cart {
  //region private attributes
  #items = [];
  #currency;
  //endregion private attributes

  //region public methods
  constructor(items) {
    if (items) {
      if (items.length === 0) {
          this.#currency = 'CHF';
      } else {
        let currentCartCurrency = items[0].currency;
        items.forEach(function (item) {
          if (item.currency !== currentCartCurrency) {
            throw new MultipleCurrenciesException();
          }
        });
        this.#currency = items[0].currency;
      }
      this.items = items;
    } else {
        this.#currency = 'CHF';
    }
  }

  get items() {
    return this.#items;
  }

  get currency() {
    return this.#currency;
  }

  set items(value) {
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
