const assert = require('assert');
const { monitorEventLoopDelay } = require('perf_hooks');

class Dollar {
  constructor(amount) {
    this.amount = amount
  }

  times(multiplier){
    return new Dollar(this.amount * multiplier);
  }
}

let tenEuros = new monitorEventLoopDelay(10, "EUR")
let twentyEuros = tt


let fiver = new Dollar(5)
let tenner = fiver.times(2)
assert.strictEqual(tenner.amount, 10)

