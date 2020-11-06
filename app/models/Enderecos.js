module.exports = (sequelize, DataTypes) =>{
  const Enderecos = sequelize.define("Enderecos",{
    rua: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairro: DataTypes.STRING,
    uf: DataTypes.STRING,
    cidade: DataTypes.STRING,
    cep: DataTypes.STRING,
  })
  return Enderecos;
}