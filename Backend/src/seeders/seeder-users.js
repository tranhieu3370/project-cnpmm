'use strict';

module.exports = {

    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            email: 'tranhieu3370@gmail.com',
            password: '123456',
            firstName: 'Hieu',
            lastName: 'Tran',
            address: 'Bien Hoa',
            gender: 1,
            typeRole: 'R1',
            keyRole: 'R1',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};