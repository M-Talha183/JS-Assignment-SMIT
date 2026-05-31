// let taskInput = document.querySelector('#taskInput');
// let addBtn = document.querySelector('#addBtn');
// let taskList = document.querySelector('#taskList');


// addBtn.addEventListener('click',addTask);

// function addTask(){
//     let task = taskInput.value.trim();

//     if(task === "") return;

//     let li = document.createElement('li');
//     li.innerHTML = `${task} <button class= "deleteBtn">Delete</button>`;
//     taskList.appendChild(li);
//     taskInput.value = ""
// }



let taskInput = document.querySelector('#taskInput');
let addBtn = document.querySelector('#addBtn');
let taskList = document.querySelector('#taskList');

addBtn.addEventListener('click', addTask);

function addTask() {
    let task = taskInput.value.trim();

    if (task === "") return;

    let li = document.createElement('li');

    li.innerHTML = `
        <span class="taskText">${task}</span>
        <button class="updateBtn">Update</button>
        <button class="deleteBtn">Delete</button>
    `;

    // Delete functionality
    let deleteBtn = li.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // Update functionality
    let updateBtn = li.querySelector('.updateBtn');
    updateBtn.addEventListener('click', () => {
        let taskSpan = li.querySelector('.taskText');

        let updatedTask = prompt(
            "Update your task:",
            taskSpan.textContent
        );

        if (updatedTask !== null && updatedTask.trim() !== "") {
            taskSpan.textContent = updatedTask.trim();
        }
    });

    taskList.appendChild(li);
    taskInput.value = "";
}