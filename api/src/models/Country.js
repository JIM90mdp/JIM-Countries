const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "country",
    {
      // ↓↓↓↓↓↓ Cual es el id en la API?    ---> cca3
      id: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      area: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
