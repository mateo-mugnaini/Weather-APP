const Sequelize = require("sequelize");
const db = require("./db");

const Model = db.define("Model", {
  // Define los campos de tu modelo
  campo1: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  campo2: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Model;
