var should = require('should');
var parse = require('../index.js');

describe('parse', function() {
    describe('with 2 arguments', function() {
        it('returns an empty array', function() {
            var req = {type:"req"};
            var res = {type:"res"};
            
            var result = 'fail';
            
            var func = parse(function(req, res){
                if (req.type == 'req' && res.type == 'res') {
                    result = 'pass';
                }
            });
            
            func(req, res);
            
            result.should.eql('pass');
        });
    });
});