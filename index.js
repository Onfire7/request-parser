function parse(func) {
	return function(req, res){
		
		
		func(req, res);
	};
};

module.export = parse;