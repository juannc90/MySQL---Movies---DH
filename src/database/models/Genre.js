module.exports = (sequelize, dataTypes) => {
    const alias = "Genre"
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        ranking: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        active: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    const config = {
        tableName: "genres",
        timestamps: false
    }
    const Genre = sequelize.define(alias, cols, config)

    return Genre
}