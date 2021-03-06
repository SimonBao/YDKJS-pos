const chai = require('chai');
const expect = chai.expect;
const POS = require('../src/pos');

describe('#POS', function () {
  let pos;
  beforeEach(function () {
    this.pos = new POS();
  });

  describe('Initialization values', function () {
    it('Has default tax of twenty percent', function () {
      expect(this.pos.tax).to.eq(0.20);
    });

    it('Has default phone value of 99.99', function () {
      expect(this.pos.phoneValue).to.eq(99.99);
    });

    it('Has default phone accessory value of 25', function () {
      expect(this.pos.accessoryValue).to.eq(25);
    });

    it('Has budget above phone value', function () {
      expect(this.pos.budget).to.be.above(this.pos.phoneValue);
    });

    describe('#buyPhone', function () {
      it('reduces budget by phoneValue', function () {
        expect(this.pos.budget).to.eq(150);
        this.pos.buyPhone();
        expect(this.pos.budget).to.eq(50.01);
      });
    });

    describe('#buyAccessory', function () {
      it('reduces budget by accessoryValue', function () {
        expect(this.pos.budget).to.eq(150);
        this.pos.buyAccessory();
        expect(this.pos.budget).to.eq(125);
      });
    });

  });

});