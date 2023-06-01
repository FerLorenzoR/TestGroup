//---------------------IMPORTACIONES---------------------

const { DataTypes } = require ('sequelize');

//---------------------EXPORTACIONES---------------------

module.exports = (sequelize) => {

    sequelize.define ('temperament', {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }, {
        timestamps: false
    })

};
