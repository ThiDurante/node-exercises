'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Christine',
        author: 'Stephen King',
        pageQuantity: 616,
        createdAt: new Date('2022-01-28T13:23:32.514Z'),
        updatedAt: new Date('2022-01-28T13:23:32.514Z'),
      },
      {
        title: 'Apanhador de Sonhos',
        author: 'Stephen King',
        pageQuantity: 656,
        createdAt: new Date('2022-01-28T04:51:32.514Z'),
        updatedAt: new Date('2022-01-28T04:51:32.514Z'),
      },
      {
        title: 'A Dança da Morte',
        author: 'Stephen King',
        pageQuantity: '1248',
        createdAt: new Date('2022-01-28T19:37:32.514Z'),
        updatedAt: new Date('2022-01-28T19:37:32.514Z'),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
