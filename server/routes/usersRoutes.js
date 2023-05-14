const { getUser, login, signup, get_one_User } = require('../controller/users');





const router = require('express').Router();

router.get('/users',getUser)
router.get('/oneUser/:userEmail',get_one_User)
router.post('/Oneu',login)
router.post('/users', signup)

module.exports = router;
