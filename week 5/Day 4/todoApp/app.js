const TodoList = require('./todo');

const myList = new TodoList();

myList.addTask("Finish bootcamp");
myList.addTask("Do exercise 4");
myList.markComplete(0);

console.log(myList.listTasks());
