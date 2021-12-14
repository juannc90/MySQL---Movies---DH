const db = require('../database/models')

const MovieModel = {
    findAll: () => {
        let movies = db.Movies.findAll()
        return movies.then(movies => movies)
            .catch(err => err)
    },
    findById: (id) => {
        let oneMovie = db.Movies.findByPk(id)
        return oneMovie.then(movie => movie)
        .catch(err => err)
    },
    findAllOrder: () => {
        let movies = db.Movies.findAll({
            order: [
                ['release_date', 'DESC']
            ]
        })
        return movies.then(movies => movies)
            .catch(err => err)
    },
    recommended: () => {
        let movies = db.Movies.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
        return movies.then(movies => movies)
            .catch(err => err)
    }
}
module.exports = MovieModel

// MovieModel.findAll()
//     .then((movies) => { 
//         console.log(movies)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// MovieModel.findById(5)
//     .then((movie) => { 
//         console.log(movie)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// MovieModel.findAllOrder()
//     .then((movies) => { 
//         console.log(movies)
//     })
//     .catch((err) => {
//         console.log(err)
//     })