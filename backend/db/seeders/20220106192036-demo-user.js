'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Users',
			[
				{
					email: 'demo@user.io',
					username: 'Demo-lition',
					hashedPassword: bcrypt.hashSync('password')
				},
				{
					email: 'crush@dude.com',
					username: 'Crush',
					hashedPassword: bcrypt.hashSync('dude123')
				},
				{
					email: 'squirt@dude.com',
					username: 'Squirt',
					hashedPassword: bcrypt.hashSync('fin-noggin123')
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete(
			'Users',
			{
				username: { [Op.in]: [ 'Demo-lition', 'Crush', 'Squirt' ] }
			},
			{}
		);
	}
};
