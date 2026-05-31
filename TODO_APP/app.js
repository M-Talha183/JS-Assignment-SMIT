let taskInput = document.querySelector('#taskInput');
let addBtn = document.querySelector('#addBtn');
let taskList = document.querySelector('#taskList');


addBtn.addEventListener('click',addTask);

function addTask(){
    let task = taskInput.value.trim();

    if(task === "") return;

    let li = document.createElement('li');
    li.innerHTML = `${task} <button class= "deleteBtn">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = ""
}