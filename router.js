var http = require('http');
var urlLib = require('url');
var util = require('util');
function routeFunc(){
    setTimeout(function(){
        console.log('2000s')
    },2000)
    console.log(__filename)
    console.log(this == exports,'this')


  
   
     
    http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(util.inspect(urlLib.parse(req.url, true)));
    }).listen(3000);








    return this;
}


exports.func=routeFunc;