const modelM = require('../model/MovieModel.js')

const moviesController = {
    getMovies: (req, res, next) => {
        modelM.findAll()
        .then((movies) => {
                res.render('moviesList', {movies : movies})
            })
            .catch((err) => {
                next(err)
            })
    },
    detail: (req, res, next) => {
        modelM.findById(req.params.id)
        .then((movie) => {
            res.render('moviesDetail', {movie : movie})
        })
    },
    new: (req, res, next) => {
        modelM.findAllOrder()
        .then((movies) => {
                res.render('newestMovies', {movies : movies})
            })
            .catch((err) => {
                next(err)
            })
    },
    recomended: (req, res, next) => {
        modelM.recommended()
        .then((movies) => {
                res.render('recommendedMovies', {movies : movies})
            })
            .catch((err) => {
                next(err)
            })
    },
}

module.exports = moviesController