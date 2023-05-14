const { getComments, Add } = require('../Controller/comments');

const router = require('express').Router();


router.get('/comments',getComments)
router.post('/comments',Add)

module.exports = router;