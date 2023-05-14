const { getUser, signIn_User, addUser } = require('../Controller/users');





const router = require('express').Router();

router.get('/users',getUser)
router.post('/Oneu',signIn_User)
router.post('/users',addUser)

module.exports = router;
