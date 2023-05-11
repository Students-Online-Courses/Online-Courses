const { getAllComments, AddComment } = require('../Controller.js/comments');;
const router = require('express').Router();


router.get('/comments',getAllComments)
router.post('/comments',AddComment)