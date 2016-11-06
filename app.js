var express = require('express');
var app = express();

//Static
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//Templator
app.set('view engine', 'pug');

//Routes
var routes = require('./routes');

//Home Route
app.get('/', routes.home);

//Single cinema page
app.get('/movie-episode/:movie_number?', routes.movieSingle);

//Not Found page
app.get('*', routes.notFound);

//Server
app.set('port', process.env.PORT || 3000) ;
var server = app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + server.address().port);
});


