class POS {
  constructor(tax = 0.20, phoneValue = 99.99, budget = 150, accessoryValue = 25) {
    this.tax = tax;
    this.phoneValue = phoneValue;
    this.accessoryValue = accessoryValue;
    this.budget = budget;
  }

  buyPhone() {
    this.budget = Number((this.budget - this.phoneValue).toFixed(2));
  }

  buyAccessory(){
    this.budget = Number((this.budget - this.accessoryValue).toFixed(2));
  }
}

module.exports = POS;