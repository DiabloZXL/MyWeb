var express =require("express");

var app = express();

app.set('port',process.env.PORT|| 3000);

app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 Not Found..');
});

app.use(function(err,req,res,next){
    console.err(err.statck);
    res.type('text/plain');
    res.status(500);
    res.send('Internal Error..');
});


app.listen(app.get('port'),function(){
    console.log( 'Express started on http://localhost:' +app.get('port') + '; press Ctrl-C to terminate.' );
});

