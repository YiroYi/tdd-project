const assert = require('assert')
const Money = require('./money')
const Portfolio = require('./portfolio')

class MoneyTest {
  testMultiplication() {
    let tenEuros = new Money(10, "EUR")
    let twentyEuros = new Money(20, "EUR");
    assert.deepStrictEqual(tenEuros.times(2), twentyEuros);
  }

  testDivision() {
    let originalMoney = new Money(4002, "KWR")
    let actualMoneyAfterDivision = originalMoney.divide(4)
    let expectedMoneyAfterDivision = new Money(1000.5, "KWR")
    assert.deepStrictEqual(actualMoneyAfterDivision, expectedMoneyAfterDivision)
  }

  testAddition() {
    let fiveDollar = new Money(5, "USD")
    let tenDollar = new Money(10, "USD")
    let fifteenDollars = new Money(15, 'USD')
    let portfolio = new Portfolio();
    portfolio.add(fiveDollar, tenDollar)
    assert.deepStrictEqual(portfolio.evaluate("USD"), fifteenDollars);
  }

  getAllTestMethods() {
    let moneyPrototype = MoneyTest.prototype
    let allProps = Object.getOwnPropertyNames(moneyPrototype);

    let testMethods = allProps.filter(p => {
      return typeof moneyPrototype[p] === 'function'  && p.startsWith("test")
    })

    return testMethods
  }

  runAllTest() {
    let testMethods = this.getAllTestMethods();
    testMethods.forEach(m => {
      console.log("Running: %s()", m)
      let method = Reflect.get(this, m)

      try {
        Reflect.apply(method, this, [])
      } catch(e) {
        if( e instanceof assert.AssertionError) {
          console.log(e)
        } else {
          throw e;
        }
      }
    })
  }
}

new MoneyTest().runAllTest();

const = 'This is a test '

