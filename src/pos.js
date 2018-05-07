class POS {
  constructor(tax = 0.20, phoneValue = 99.99, budget = 150, accessoryValue = 25) {
    this.tax = tax;
    this.phoneValue = phoneValue;
    this.accessoryValue = accessoryValue;
    this.budget = budget;
  }
}

module.exports = POS;