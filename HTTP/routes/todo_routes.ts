const express = require('express');
const router = express.Router();
const todoController = require('../controller/todoController');

// Routes...
router.get('/', todoController.todo_index);
router.post('/create-task', todoController.todo_create);
router.get('/delete-task', todoController.todo_delete);

module.exports = router;

