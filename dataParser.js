var url = require('url');

module.exports=function(req,res,next){
    		var reqObj = url.parse(req.url);
			req.reqObj= reqObj;
	var resource = reqObj.pathname === '/' ? '/index.html' : reqObj.pathname;
    next();
};
