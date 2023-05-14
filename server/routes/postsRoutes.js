const { getAllPosts, AddPosts, getTeacherPosts, DeletePosts, UpdatePosts } = require('../controller/posts');

const router = require('express').Router();

router.get('/posts', getAllPosts)
router.get('/posts/:id', getTeacherPosts)
router.post('/posts', AddPosts)
router.delete('/posts', DeletePosts)
router.put('/posts',UpdatePosts)