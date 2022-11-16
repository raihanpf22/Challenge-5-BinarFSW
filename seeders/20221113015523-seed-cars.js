"use strict";

// Command hit seeder ==> npx sequelize-cli db:seed:all

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('cars', [
      {
        no_police: "B 4022 KOB",
        brand: "TOYOTA",
        model: "SUV",
        image: "https://img-ik.cars.co.za/images/2020/6/ToyotaFortuner/tr:n-news_1200x/Fortuner5.jpg",
        price_perday: 250000,
        capacity: 7,
        status: true,
        transmision: "Manual",
        type: "Fortuner",
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('cars', null, {});
  },
};
