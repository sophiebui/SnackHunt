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
	const id = parseInt(req.params.id, 10);
	const snack = await Snack.findByPk(id);
	if (snack) {
	  return res.json({ snack });
	}
	return res.json({ message: 'no snack found'});
  }))

router.delete('/:id', asyncHandler(async (req, res) => {
	const id = parseInt(req.params.id, 10);
	const snack = await Snack.findByPk(id);

	await db.Snack.findAll({
		where: {id}
	})
	await snack.destroy();
}))

module.exports = router;
