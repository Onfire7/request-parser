var should = require('should');
var parse = require('../index');

describe('parse', function() {
    describe('with no arguments', function() {
        it('returns an empty array', function() {
            var result = parse();
            result.should.eql([]);
        });
    });
});