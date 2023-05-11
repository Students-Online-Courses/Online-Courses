
const { getUser, getOne_User, addUser, update, deleted } = require('../Controller/users');



const router = require('express').Router();

router.get('/users', getUser)
router.get('/OneUser', getOne_User)
router.post('/users',addUser)
router.put('/users/:id',update)
router.delete('/users/:id',deleted)

module.exports = router;
