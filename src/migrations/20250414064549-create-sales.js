'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sales', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false,
      },
      date: Sequelize.DATEONLY,
      month: Sequelize.STRING,
      invoiceNo: Sequelize.STRING,
      category: Sequelize.STRING,
      partyName: Sequelize.STRING,
      description: Sequelize.TEXT,
      hsnSac: Sequelize.STRING,
      gstin: Sequelize.STRING,
      quantity: Sequelize.INTEGER,
      rate: Sequelize.DECIMAL(10, 2),
      netAmount: Sequelize.DECIMAL(10, 2),
      cgst: Sequelize.DECIMAL(10, 2),
      sgst: Sequelize.DECIMAL(10, 2),
      igst: Sequelize.DECIMAL(10, 2),
      utgst: Sequelize.DECIMAL(10, 2),
      totalAmount: Sequelize.DECIMAL(12, 2),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sales');
  }
};
