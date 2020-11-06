module.exports = (sequelize, DataTypes) => {
  const Arquivos = sequelize.define('Arquivos',{
    id_prestador: DataTypes.BIGINT,
    caminho: DataTypes.STRING,
    nome: DataTypes.STRING,
    extencao: DataTypes.STRING
  })
  return Arquivos;
}