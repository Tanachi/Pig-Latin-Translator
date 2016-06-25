var chai = require('chai');
var expect = chai.expect;
var translator = require('./index.js');

describe('translator()', function () {

  it('should be a function', function(){
    expect(translator).to.be.a('function');
  });

});