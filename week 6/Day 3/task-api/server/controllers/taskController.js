const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/tasks.json');

// Helper: lire les données
const readTasks = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Helper: écrire les données
const writeTasks = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

exports.getAllTasks = (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
};

exports.getTaskById = (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

exports.createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  const tasks = readTasks();
  const newTask = {
    id: tasks.length + 1,
    title,
    description: description || '',
  };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: "Task not found" });

  const { title, description } = req.body;
  if (title) task.title = title;
  if (description) task.description = description;

  writeTasks(tasks);
  res.json(task);
};

exports.deleteTask = (req, res) => {
  let tasks = readTasks();
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (taskIndex === -1) return res.status(404).json({ message: "Task not found" });

  const removedTask = tasks.splice(taskIndex, 1);
  writeTasks(tasks);
  res.json({ message: "Task deleted", task: removedTask });
};
