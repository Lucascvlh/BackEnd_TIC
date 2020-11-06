module.exports = (sequelize, DataTypes) => {
  const agendamentos = sequelize.define('Agendamentos',{
    id_usuario: DataTypes.BIGINT,
    id_prestador: DataTypes.BIGINT,
    id_servico: DataTypes.BIGINT,
    data_marcada: DataTypes.STRING,
    hora_marcada: DataTypes.STRING,
    descricao: DataTypes.STRING,
    cancelamento: DataTypes.DATE
  })
  return agendamentos
}