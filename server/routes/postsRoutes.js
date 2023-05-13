const { getAllPosts, AddPosts, getTeacherPosts, DeletePosts, UpdatePosts } = require('../Controller.js/posts');

const router = require('express').Router();

router.get('/posts', getAllPosts)
router.get('/posts/:id', getTeacherPosts)
router.post('/posts', AddPosts)
router.delete('/posts/id', DeletePosts)
router.put('/posts/:id',UpdatePosts)