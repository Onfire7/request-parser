var url = require('url');

var parse = function (func) {
	return function(req, res){
		
		// Handle GET variables
		var parts = url.parse(req.url,true);
		if (parts.query) req.get = parts.query;
		
		// Handle POST variables
		
		
		func(req, res);
	};
};

module.export = parse;