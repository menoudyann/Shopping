"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");
const InvalidCurrencyException = require("./InvalidCurrencyException.js");

module.exports = class CartItem {
  //region private attributes
  #articleId;
  #name;
  #quantity;
  #price;
  #currency;

  //endregion private attributes

  //region public methods
  constructor(articleId, name, quantity, price, currency) {
    if (articleId < 1) {
      throw new InvalidArticleIdException();
    }
    if (!currency){
      this.#currency = 'CHF';
    }else{
      if (currency.length !== 3 && currency.match(/([A-Z])$/)) {
        throw new InvalidCurrencyException();
      }
      this.#currency = currency;
    }
    this.#articleId = articleId;
    this.quantity = quantity;
    this.price = price;
    this.#name = name;

  }

  get articleId() {
    return this.#articleId;
  }

  get name() {
    return this.#name;
  }

  get quantity() {
    return this.#quantity;
  }

  set quantity(value) {
    if (value < 1) {
      throw new InvalidQuantityException();
    }
    this.#quantity = value;
  }

  get price() {
    return this.#price;
  }

  set price(value) {
    if (value < 10) {
      throw new InvalidPriceException();
    }
    this.#price = value;
  }

  get total() {
    return this.#quantity * this.#price;
  }

  get currency() {
    return this.#currency;
  }
  //endregion public methods

  //region private methods
  //endregion private methods
};
