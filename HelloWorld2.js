var http =require("http");
var fs = require("fs");


function ServerStaticFile(res,path,contentType,responseCode){
    if (!responseCode) responseCode =200;

    fs.readFile(__dirname + path,function(err,data){
        if (err){
            res.writeHead(500,{'contentType':'text/plain'});
            res.end("Internal Error~~~");
          } else{
             res.writeHead(responseCode,{'contentType':contentType});
             res.end(data);
        }
    })
}
http.createServer(
    function(req,res){
       // res.writeHead(200,{'ContentType':'text/html'});
       // res.end('<h1>HelloWorld</h1>');

       var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

       switch(path)
       {
        case'':
            ServerStaticFile(res,'/public/index1.html','text/html',200);
            break;
        case '/home':
           ServerStaticFile(res,'/public/home.html','text/html',200);
            break;
        case '/logo.jpg':
            ServerStaticFile(res,'/public/img/logo.jpg','image/jpeg',200);
            break;
        default:
            ServerStaticFile(res,'/public/404.html','text/html',404);
            break;
       }
    }
).listen(3000);

console.log("Server started on localhost:3000; press Ctrl-C to terminate!....")
