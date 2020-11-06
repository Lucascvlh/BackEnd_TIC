'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('servicos', {
      id:{
        type: Sequelize.BIGINT,
        primaryKey:true,
        allowNull: false,
        autoIncrement: true,
      },
      nome_servico:{
        type: Sequelize.STRING,
      },
      descricao:{
        type: Sequelize.STRING,
      },
      duracao:{
        type: Sequelize.STRING,
      },
      categoria:{
        type: Sequelize.STRING,
      },
      valor:{
        type: Sequelize.FLOAT
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type:Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('servicos')
  }
};
