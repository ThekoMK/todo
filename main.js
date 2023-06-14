const todos = []

class ToDo {
    constructor(title, status, id) {
        this.title = title;
        this.status = status;
        this.id = id;
    }
    uniqueId() {
        this.id = todos.length
    }
}

const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('task');
const addedTasks = document.getElementById('addedTasks');

const ul = document.createElement('ul')
addedTasks.append(ul);

addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const inputValue = taskInput.value;

    const newTask = new ToDo(inputValue)
    
    todos.push(newTask);
    newTask.uniqueId()

    taskInput.value = '';

    console.log(todos)

    const li = document.createElement('li');
    ul.append(li);
    li.innerHTML = `<label for="${newTask.id}">${newTask.title}</label>
                    <input type="checkbox" class="taskCheckBox" id="${newTask.id}">`

});

const checkBoxes = document.querySelectorAll('.taskCheckBox');

console.log(checkBoxes)