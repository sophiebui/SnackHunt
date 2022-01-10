'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Snacks',
			[
				{
					ownerId: 1,
					title: 'Shrimp Chips',
					imageUrl: 'https://flic.kr/p/oDQR',
					description: 'Light and crispy baked snack. Can be found in most Asian grocery stores',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 1,
					title: '',
					imageUrl: 'https://flic.kr/p/2jcEkr1',
					description: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 1,
					title: '',
					imageUrl: '',
					description: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 1,
					title: 'Sweet Potato Fries',
					imageUrl:
						'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
					description: 'Exactly what it sounds like but better. Plus it is easy to make!',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 1,
					title: '',
					imageUrl: '',
					description: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 1,
					title: '',
					imageUrl: '',
					description: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 1,
					title: '',
					imageUrl: '',
					description: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 1,
					title: '',
					imageUrl: '',
					description: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 1,
					title: '',
					imageUrl: '',
					description: '',
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Snacks', null, {});
	}
};
