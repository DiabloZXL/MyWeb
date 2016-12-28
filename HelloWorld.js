var http =require("http");

http.createServer(
    function(req,res){
       // res.writeHead(200,{'ContentType':'text/html'});
       // res.end('<h1>HelloWorld</h1>');

       var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

       switch(path)
       {
        case'':
            res.writeHead(200,{'ContentType':'text/html'});
            res.end('<h1>HelloWorld</h1>');
            break;
        case '/home':
            res.writeHead(200,{'ContentType':'text/html'});
            res.end('<h1>Home</h1>');
            break;
        default:
            res.writeHead(404,{'ContentType':'text/html'});
            res.end('<h1>Page Not Found...</h1>');
            break;
       }
    }
).listen(3000);

console.log("Server started on localhost:3000; press Ctrl-C to terminate....")
