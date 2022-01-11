const express = require('express');
const asyncHandler = require('express-async-handler');

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
	'/',
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

module.exports = router;
