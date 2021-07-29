const expect = require('chai').expect
  , version = require('./version')
  ;

describe('Version', () => {

  describe('#getName()', () => {

    it('should get the name of the package', () => {
      expect(version.getName()).to.equal('build-and-test-demo');
    });
  });

  describe('#getVersion()', () => {

    it('should get the version of the package', () => {
      expect(version.getVersion()).to.equal('1.0.0');
    });
  });
});