'use strict';

const { sequelize } = require("../../app/models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('enderecos',{
      id:{
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      rua:{
        type: Sequelize.STRING,
      },
      numero:{
        type: Sequelize.INTEGER,
      },
      bairro:{
        type: Sequelize.STRING,
      },
      uf:{
        type: Sequelize.STRING,
      },
      cidade:{
        type: Sequelize.STRING,
      },
      cep:{
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('enderecos')
  }
};
