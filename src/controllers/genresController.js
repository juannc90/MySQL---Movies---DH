const modelG = require('../model/GenreModel.js')

const genresController = {
    getGenres: (req, res, next) => {
        modelG.findAll()
        .then((genres) => {
                res.render('genresList', {genres : genres})
            })
            .catch((err) => {
                next(err)
            })
    },
    detail: (req, res, next) => {
        modelG.findById(req.params.id)
        .then((genre) => {
            res.render('genresDetail', {genre : genre})
        })
    }
}

module.exports = genresController