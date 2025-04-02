const tasks = [];

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

const addTask=()=> {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;

    tasks.push(taskText);
    taskInput.value = '';
    renderTasks();
}

const renderTasks=()=> {
    const listTasksDiv = document.querySelector('.listTasks');
    listTasksDiv.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const label = document.createElement('label');
        label.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(label);
        taskDiv.appendChild(deleteBtn);
        listTasksDiv.appendChild(taskDiv);
    });
}
