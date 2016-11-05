var moviesJSON = require('../data.json');

//Home Route
exports.home = function(req, res){
    var movies = moviesJSON.movies;
    res.render('index', {
        title: 'StarWars Movies',
        movies: movies
    })
};

//Single cinema page
exports.movieSingle = function(req, res){
    var movie_number = req.params.movie_number;
    res.send('Hello world ' + movie_number);
};

//Not Found page
exports.notFound =function(req, res){
    res.send('Page not Found');
};