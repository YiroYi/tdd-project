const assert = require('assert')

class Money {
  constructor(amount, currency) {
    this.amount = amount
    this.currency = currency
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }

  divide(divider) {
    return new Money(this.amount / divider, this.currency);
  }
}

class Portfolio {
  constructor() {
    this.moneys = []
  }

  add(...moneys) {
    this.moneys = this.moneys.concat(moneys);
  }

  evaluate(currency) {
    let total = this.moneys.reduce((sum, money) => {
      return sum + money.amount
    }, 0)

    return new Money(total, currency)
  }
}

let fiver = new Money(5, "USD")
let tenner = fiver.times(2)
assert.strictEqual(tenner.amount, 10)
assert.strictEqual(tenner.currency, "USD");


let tenEuros = new Money(10, "EUR")
let twentyEuros = tenEuros.times(2)
assert.strictEqual(twentyEuros.amount, 20)
assert.strictEqual(twentyEuros.currency, "EUR")

let originalMoney = new Money(4002, "KWR")
let actualMoneyAfterDivision = originalMoney.divide(4)
let expectedMoneyAfterDivision = new Money(1000.5, "KWR")
assert.deepStrictEqual(actualMoneyAfterDivision, expectedMoneyAfterDivision)

// New Portfolio test

let fiveDollar = new Money(5, "USD")
let tenDollar = new Money(10, "USD")
let fifteenDollars = new Money(15, 'USD')
let portfolio = new Portfolio();
portfolio.add(fiveDollar, tenDollar)
assert.deepStrictEqual(portfolio.evaluate("USD"), fifteenDollars);
