const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const { User, Snack } = require('../../db/models');

const router = express.Router();

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const snacks = await Snack.findAll({
			include: User
		});
		return res.json({ snacks });
	})
);

router.post(
	'/new',
	asyncHandler(async (req, res) => {
		const { ownerId, title, imageUrl, description } = req.body;
		const snack = await Snack.create({
			ownerId,
			title,
			imageUrl,
			description
		});
		return res.json({ snack });
	})
);

router.get(
	'/:ownerId',
	asyncHandler(async (req, res) => {
		const id = req.params.id;
		const userSnacks = await Snack.findByPk(id);

		return res.json(userSnacks);
	})
);

router.get('/:id', asyncHandler(async (req, res) => {
	const id = parseInt(req.params.id);
	const snack = await Snack.findByPk(id);
	if (snack) {
	  return res.json({ snack });
	}}))



  router.put('/:id', asyncHandler(async (req, res) => {
	const id = parseInt(req.params.id);
	const {  title, description, imageUrl } = req.body
	const snack = await Snack.findByPk(id);

	if (snack) {
	  await snack.update({
		title,
		description,
		imageUrl
	  });
	  await snack.save();
	  return res.json({ message: 'Complete' });
	}}));



router.delete('/:id', asyncHandler(async (req, res) => {
	const id = parseInt(req.params.id);
	const snack = await Snack.findByPk(id);
	await db.Snack.findAll({
		where: {id}
	})
	await snack.destroy();
}))

module.exports = router;
