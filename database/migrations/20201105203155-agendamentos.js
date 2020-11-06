'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('agendamentos',{
      id:{
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      id_usuario:{
        type: Sequelize.BIGINT,
        allowNull:false,
        references:{
          model: 'usuarios',
          key:'id'
        }
      },
      id_prestador:{
        type: Sequelize.BIGINT,
        allowNull:false,
        references:{
          model: 'prestadores',
          key:'id'
        }
      },
      id_servico:{
        type: Sequelize.BIGINT,
        allowNull:false,
        references:{
          model: 'servicos',
          key:'id'
        }
      },
      data_marcada:{
        type: Sequelize.STRING,
      },
      hora_marcada:{
        type: Sequelize.STRING,
      },
      descricao:{
        type: Sequelize.STRING,
      },
      cancelamento:{
        type: Sequelize.DATE
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type:Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('agendamentos')
  }
};
