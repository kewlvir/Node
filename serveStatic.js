var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url');

var staticResExtns = ['.html', '.css', '.js', '.jpg', '.png', '.xml', '.json'];
function isStatic(resource){
	return staticResExtns.indexOf(path.extname(resource)) !== -1;
}

var resourcePath='';

module.exports=function(req,res,next){
    var reqObj = url.parse(req.url);
	var resource = reqObj.pathname === '/' ? '/index.html' : reqObj.pathname;
	if (isStatic(resource))
    {
		 resourcePath= path.join(__dirname, resource);
		if (!fs.existsSync(resourcePath)){
			 //next();
             return;
		}
		fs.createReadStream(resourcePath).pipe(res);
    }
    else
        next();
};
