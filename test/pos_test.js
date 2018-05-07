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
    });
  });
});