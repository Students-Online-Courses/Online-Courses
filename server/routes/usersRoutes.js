const { getUser, login, signup } = require('../controller/users');





const router = require('express').Router();

router.get('/users',getUser)
router.post('/Oneu',login)
router.post('/users', signup)

module.exports = router;
