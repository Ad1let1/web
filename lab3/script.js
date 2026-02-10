const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('new-task-input');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.className = 'task-item'; 

    const span = document.createElement('span');
    span.textContent = taskText;

    const actions = document.createElement('div');
    actions.className = "task-actions";
    
    const doneBtn = document.createElement('button');
    doneBtn.innerText = 'Done';
    doneBtn.className = 'done-btn';
    doneBtn.onclick = () => {
        li.classList.toggle('task-done');
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => {
        taskList.removeChild(li);
    };

    actions.appendChild(doneBtn);
    actions.appendChild(deleteBtn);
    
    li.appendChild(span); 
    li.appendChild(actions);
    
    taskList.appendChild(li);
    taskInput.value = '';
}