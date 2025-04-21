const todos = require('../data/todos');

exports.getAllTodos = (req, res) => {
  res.json(todos);
};

exports.addTodo = (req, res) => {
  const { task } = req.body;
  const newTodo = { id: Date.now(), task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

exports.updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const { task } = req.body;
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  todo.task = task;
  res.json(todo);
};

exports.deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ error: 'Todo not found' });
  todos.splice(index, 1);
  res.json({ message: 'Deleted' });
};
