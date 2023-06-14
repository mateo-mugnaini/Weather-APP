const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "nombre-de-la-base-de-datos",
  "nombre-de-usuario",
  "contraseña",
  {
    host: "localhost",
    dialect: "mysql", // Puedes cambiarlo a 'postgres' o 'sqlite' según tu base de datos
  }
);

module.exports = sequelize;
