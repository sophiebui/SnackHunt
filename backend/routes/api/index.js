const router = require('express').Router();
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js')
const snacksRouter = require('./snacks.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter)

router.use('/snacks', snacksRouter)

// router.post('/test', function(req, res) {
// 	res.json({ requestBody: req.body });
// });


module.exports = router;
