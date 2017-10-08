var calculator = require('./calculator'),
url = require('url'),
querystring = require('querystring');


function processCalc(qry)
{
    	var reqData = querystring.parse(qry);
		var op = reqData.op,
			n1 = parseInt(reqData.n1, 10),
			n2 = parseInt(reqData.n2, 10);
		var result = calculator[op](n1, n2);
        return result;
}

module.exports=function(req,res,next){
    var reqObj = url.parse(req.url);
    if (reqObj.pathname === '/calculator'){
        if(req.method === 'GET'){
                var result= processCalc(reqObj.query);
                res.write(result.toString());
                res.end();
                }
        else if(req.method === 'POST'){
                            var rawData='';
                            req.on('data', function(chunk)
                                {
                                    rawData+=   chunk;
                                }
                            );
                    req.on('end', function()
                        {
                            var result= processCalc(rawData);
                            res.write(result.toString());
                            res.end();
                        }
                    );
        }

    }
    else
        next();
    };
