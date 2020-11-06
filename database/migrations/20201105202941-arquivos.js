'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('arquivos',{
      id:{
        primaryKey: true,
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
      },
      id_prestador:{
        type: Sequelize.BIGINT,
        references:{
          model:'prestadores',
          key:'id'
        },
        allowNull:false
      },
      caminho:{
        type: Sequelize.STRING,
      },
      nome:{
        type: Sequelize.STRING
      },
      extencao:{
        type: Sequelize.STRING
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
    return queryInterface.dropTable('arquivos')
  }
};
