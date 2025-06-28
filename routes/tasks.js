const express = require('express');
const router = express.Router();
const tasks = require('../data/tasks.json');

//CRUD DE LAS TASKS
//URL: /tasks

router.get('/', (req, res) => res.json(tasks));

router.post('/', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    ...req.body
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).send('No encontrada');

  task.title = req.body.title ?? task.title;
  task.completed = req.body.completed ?? task.completed;
  res.json(task);
});

router.delete('/:id', (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.status(204).send();
});

module.exports = router;
