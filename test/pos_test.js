const chai = require('chai');
const expect = chai.expect;
const POS = require('../src/pos');

describe('#POS', function () {
  describe('Initialization values', function () {
    it('Has default tax of twenty percent', function () {
      let pos = new POS();
      expect(pos.tax).to.eq(0.20);
    });
  });
});