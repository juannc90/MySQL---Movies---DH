const db = require('../database/models')

const GenreModel = {
    findAll: () => {
        let genre = db.Genre.findAll()
        return genre.then(genre => genre)
            .catch(err => err)
    },
    findById: (id) => {
        let oneGenre = db.Genre.findByPk(id)
        return oneGenre.then(movie => movie)
        .catch(err => err)
    }
}
module.exports = GenreModel