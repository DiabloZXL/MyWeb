var express =require("express");

var app = express();

var handlebars = require("express3-handlebars").create({defaultLayout:'main',
helpers:{
    section:function(name,options){
        if (!this._sections) this._sections ={};
        this._sections[name] = options.fn(this);
        return null;
    }
}
});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

var fortune =require('./lib/fortune.js');

var weather =require('./lib/weather.js');

app.set('port',process.env.PORT|| 3000);

app.get('/',function(req,res){
    res.render('home',{layout:null});
});

app.get('/about',function(req,res){
    res.render('about', { fortune: fortune.getFortune() });
    }
);

app.get('/jquerytest',function(req,res){
    res.render('jquerytest');
    }
);
app.use(express.static(__dirname + '/public'));

app.use(function(req,res,next){
    res.status(404);
    res.render('404');
});

app.use(function(req,res,next){
  if (!res.locals.partials) res.locals.partials ={};
  res.locals.partials.weather =  weather.getWeather();
});


app.use(function(req,res,next){
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'),function(){
    console.log( 'Express started on http://localhost:' +app.get('port') + '; press Ctrl-C to terminate.' );
});

