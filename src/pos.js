class POS {
  constructor(tax = 0.20, phoneValue = 99.99, budget = 150) {
    this.tax = tax;
    this.phoneValue = phoneValue;
    this.budget = budget;
  }
}

module.exports = POS;