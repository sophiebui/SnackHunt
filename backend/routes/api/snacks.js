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
	'/:ownerId(\\d+)',
	asyncHandler(async (req, res) => {
		const userSnacks = await Snack.findAll(
			{ where: { ownerId: req.params.ownerId } });

		return res.json(userSnacks);
	})
);

router.get(
	'/:snackId',
	asyncHandler(async (req, res) => {
		const snackId = parseInt(req.params.id);
		const snack = await Snack.findByPk(snackId);
		if (snack) {
			return res.json({ snack });
		}
	})
);

router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const id = parseInt(req.params.id);
		const snack = await Snack.findByPk(id);
		if (snack) {
			return res.json({ snack });
		}
	})
);

router.put(
	'/:id',
	asyncHandler(async (req, res) => {
		const id = parseInt(req.params.id);
		const { title, description, imageUrl } = req.body;
		const snack = await Snack.findByPk(id);

		if (snack) {
			await snack.update({
				title,
				description,
				imageUrl
			});
			await snack.save();
			res.status(204).end()
		}
	})
);

router.delete(
	'/:id',
	asyncHandler(async (req, res) => {
		const id = parseInt(req.params.id);
		const snack = await Snack.findByPk(id);
		await db.Snack.findAll({
			where: { id }
		});
		await snack.destroy();
		res.status(204).end()
	})
);

module.exports = router;
