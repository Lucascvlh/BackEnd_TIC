const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) =>{
  const usuarios = sequelize.define('Usuarios', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  })
  return usuarios;
}