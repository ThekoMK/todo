let todos = [];

class ToDo {
    constructor(id, title, status) {
        this.id = id;
        this.title = title;
        this.status = status;
    }

    setIsCompleted(completionStatus) {
        this.status = completionStatus;
    }
}

const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("task");
const addedTasks = document.getElementById("addedTasks");

const ul = document.createElement("ul");
addedTasks.append(ul);

function renderTasks(newToDo) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const deleteButton = document.createElement('button');
    
    input.setAttribute("type", "checkbox");
    label.setAttribute("for", newToDo.id);
    
    input.id = newToDo.id;
    label.innerText = newToDo.title;
    deleteButton.innerText = 'Delete';
    
    input.addEventListener("click", (e) => {
        if (e.target.checked === true) {
            label.style.textDecoration = 'line-through';
            newToDo.setIsCompleted(true);
        } else {
            label.style.textDecoration = 'none';
            newToDo.setIsCompleted(false);
        }
    });
    
    
    deleteButton.addEventListener('click', (e) => {
        li.remove();

        const filteredList = todos.filter(task => task.id !== newToDo.id);
        todos = filteredList;
        
        console.log(filteredList)
    })
    
    ul.append(li);
    li.append(input, label,deleteButton);
}

addTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const inputValue = taskInput.value;
    const newTask = new ToDo(new Date().valueOf(), inputValue, false);

    todos.push(newTask);

    taskInput.value = "";

    renderTasks(newTask)
});
