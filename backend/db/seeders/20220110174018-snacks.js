'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Snacks', [
				{
					ownerId: 1,
					title: 'Shrimp Chips',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641834276/SnackHunt/4419765_639bb67f28_acehpu.jpg',
					description: 'Light and crispy baked snack. Slight shrimp flavor but mostly salty.',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 1,
					title: 'Yan Yan',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641834304/SnackHunt/1010px-Meiji_Yan_Yan_regular_anxbx2.jpg',
					description: 'Meiji Brand. Biscuit sticks and chocolate dip',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 1,
					title: 'Red Velvet Oreo',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641834593/SnackHunt/16440302275_971e736a68_b_oqyvlv.jpg',
					description: 'Red velvet flavored Oreos with cream cheese filling',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 1,
					title: 'Green Tea Kit Kat',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641834620/SnackHunt/1024px-Kit_Kat_Matcha-9136_ycq8fd.jpg',
					description: 'Green tea flavored Kit Kat ',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 1,
					title: 'Biberli',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641834743/SnackHunt/2560px-Biberli_gross_vnjxri.jpg',
					description: 'Swiss gingerbread cookie with almond filling',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 2,
					title: '7-Eleven Onigiri',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641834775/SnackHunt/3916529126_5cf3e2086e_b_ni2cvy.jpg',
					description: 'Filled riced balls wrapped in seaweed',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 2,
					title: 'Stroopwafels',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641834804/SnackHunt/403876852_b5d0c3c07b_b_eqmpy4.jpg',
					description: 'Waffle cookie with caramel filling',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 2,
					title: 'Tea Cakes',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641834853/SnackHunt/8294917244_b4196f747a_z_vj2rce.jpg',
					description: 'Biscuit covered in chocolate and filled with a light marshmallow filling',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 2,
					title: 'Knoppers',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641834885/SnackHunt/7906047354_e1df51bce6_b_fkyd6y.jpg',
					description: 'Milk-hazelnut wafer - crunchy & sweet!',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 2,
					title: 'Lychee Jelly',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641835062/SnackHunt/11230612563_621fa829a0_b_i9ud2b.jpg',
					description: 'Lychee flavored jelly with little bits of lychee. Easy snack!',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 3,
					title: 'Lilikoi (Passion Fruit) Hi-Chew',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641835140/SnackHunt/30199649355_2bdc143ed8_b_h6ciol.jpg',
					description: 'Soft and chewy candy - passion fruit flavored',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 3,
					title: 'Chocolate & Peanut Butter Chip Cookies',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641835326/SnackHunt/19530354924_ca8f408f7d_p36pof.jpg',
					description: 'Chocolate cookie mix with peanut butter chips. Best eaten cooked.',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 3,
					title: 'Chips Ahoy Double Chocolate Thins',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641835341/SnackHunt/31483410263_6f704ccef9_z_nn8cwp.jpg',
					description: 'The skinny version of your favorite Chips Ahoy cookies - double chocolate flavored!',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 3,
					title: 'Seaweed Flavored Pringles',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641835371/SnackHunt/7347045760_25a0e0b911_z_jyswa4.jpg',
					description: 'A light chip with a hint of seaweed flavoring',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 3,
					title: 'Sriracha Lays',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641835406/SnackHunt/8472184444_fb06af820f_b_w2n9p3.jpg',
					description: 'Lays chips + Sriracha = YUM',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 4,
					title: 'Lychee Candy',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641835494/SnackHunt/2357903553_b5fd43ba9c_b_e9qpof.jpg',
					description: 'Hard candy that is light & sweet like lychee',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 4,
					title: 'New Year Candy Tray',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641835754/SnackHunt/1920px-HK_Chinese_New_Year_food_tray_sweet_February_2021_SSG_02_dsbsxe.jpg',
					description: 'Assortment of different candies - perfect for the new year. You can buy premade or assemble your own!',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 4,
					title: 'Hot & Spicy Cracker Nuts',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641835800/SnackHunt/Nagarya_cracker_nuts_vyfxfx.jpg',
					description: 'Super crunchy and spicy nuts',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 4,
					title: 'Moon Cakes',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641835842/SnackHunt/48726780627_d38db71fff_b_uhbl2z.jpg',
					description: 'Thick buttery crust with dense filling. Variety of fillings available (ex: red bean paste, salted yolk, lotus paste, etc.)',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ownerId: 4,
					title: 'Nutella & Go',
					imageUrl: 'https://res.cloudinary.com/dxubahnmi/image/upload/v1641835927/SnackHunt/24838424275_646c7979ab_b_uwpbjc.jpg',
					description: 'Pretzel sticks with hazelnut dip',
					createdAt: new Date(),
					updatedAt: new Date()
				},
			],
      {}
      );
  },

  down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Snacks', null, {});
  }
};
