const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) =>{
  const servicos = sequelize.define('Servicos',{
    nome_servico: DataTypes.STRING,
    descricao: DataTypes.STRING,
    duracao: DataTypes.STRING,
    categoria: DataTypes.STRING,
    valor: DataTypes.FLOAT
  })
  return servicos;
}