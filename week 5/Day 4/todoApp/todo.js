class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, completed: false });
  }

  markComplete(index) {
    if (this.tasks[index]) {
      this.tasks[index].completed = true;
    }
  }

  listTasks() {
    return this.tasks.map((t, i) => `${i + 1}. ${t.task} [${t.completed ? "✓" : " "}]`).join("\n");
  }
}

module.exports = TodoList;
