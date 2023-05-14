const { getPosts, getOne, getTeacherPosts, deleted, update, add } = require('../Controller/posts');


const router = require('express').Router();

router.get('/posts', getPosts )
router.get('/onePost', getOne )
router.get('/posts/:id', getTeacherPosts )
router.post('/posts', add)
router.delete('/posts/:id', deleted)
router.put('/posts/:id',update)

module.exports = router;