'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.addColumn('Sales', 'cgst14Amount', {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      }),
      queryInterface.addColumn('Sales', 'sgst14Amount', {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      }),
      queryInterface.addColumn('Sales', 'igst18Amount', {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      }),
      queryInterface.addColumn('Sales', 'igst28Amount', {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      }),
      queryInterface.addColumn('Sales', 'utgstAmount', {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.removeColumn('Sales', 'cgst14Amount'),
      queryInterface.removeColumn('Sales', 'sgst14Amount'),
      queryInterface.removeColumn('Sales', 'igst18Amount'),
      queryInterface.removeColumn('Sales', 'igst28Amount'),
      queryInterface.removeColumn('Sales', 'utgstAmount'),
    ]);
  }
};
