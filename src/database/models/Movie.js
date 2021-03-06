module.exports = (sequelize, dataTypes) => {
    const alias = "Movies"
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: dataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        length: {
            type: dataTypes.INTEGER,
        },
        genre_id: {
            type: dataTypes.INTEGER
        } 
    }
    const config = {
        tableName: "movies",
        timestamps: false
    }
    const Movie = sequelize.define(alias, cols, config)

    return Movie
}