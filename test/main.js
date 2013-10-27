var should = require('should');
var parse = require('../index.js');

describe('parse', function() {
    describe('with 2 arguments', function() {
        it('changes result to pass', function() {
            var req = {
                type: "req",
                url: 'http://test.com/folder?test=pass'
            };
            var res = {type:"res"};
            
            
            var func = parse(function(req, res){
                
                res.type.should.eql('res');
                req.type.should.eql('req');
                req.get.test.should.eql('pass');
                
                done();
                
            });
            
            func(req, res);
        });
    });
});