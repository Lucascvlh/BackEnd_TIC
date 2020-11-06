module.exports = (sequelize, DataTypes) =>{
  const Prestadores = sequelize.define("Prestadores",{
    id_endereco: DataTypes.BIGINT,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    descricao: DataTypes.STRING,
    hr_func: DataTypes.STRING,
    permissao: DataTypes.STRING,
    pontuacao: DataTypes.FLOAT,
    cpf: DataTypes.STRING,
    cnpj: DataTypes.STRING
  })
  return Prestadores;
}