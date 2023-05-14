const { getAllComments, AddComment } = require('../controller/comments');;
const router = require('express').Router();


router.get('/comments',getAllComments)
router.post('/comments',AddComment)