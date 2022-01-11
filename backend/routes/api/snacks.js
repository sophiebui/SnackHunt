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
		const {ownerId, title, imageUrl, description } = req.body;
		const snack = await Snack.create({
			ownerId,
			title,
			imageUrl,
			description
		});
		return res.json({ snack });
	})
);

router.get('/:ownerId', asyncHandler(async(req, res)=> {
	// const userSnacks = await Snack.findByPk(id);
	// console.log('/*--------------------------------------------------------------------*/')
	// console.log('this is user snacks', userSnacks)
	// return res.json(userSnacks)
	const snacks = await Snack.findAll({
		include: User
	});
	return res.json({ snacks });
}))

module.exports = router;
