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

    var movies = moviesJSON.movies;

    if(movie_number >= 1 && movie_number <= 6) {
        var movie = movies[movie_number -1];

        var title = movie.title;

        res.render('movie_single', {
            title: title,
            movies: movies,
            movie: movie,
            main_characters: movie.main_characters
        })
    } else{
        res.render('notFound',{
            title: "Page not Found",
            movies: movies
        })
    }
};

//Not Found page
exports.notFound =function(req, res){
    var movies = moviesJSON.movies;
    res.render('notFound',{
        title: "Page not Found",
        movies: movies
    })
};