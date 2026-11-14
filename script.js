document.addEventListener("DOMContentLoaded", ()=>{
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const todoList = document.getElementById("todo-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


tasks.forEach(task =>renderTask(task));
addTaskButton.addEventListener("click", ()=>{
    const taskText = taskInput.value.trim();

    if(taskText === "") return;

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    }
    tasks.push(taskText);
    saveTask();
    renderTask(newTask);
    taskInput.value = ""; //clear input
    console.log(tasks);

})

function renderTask(task){
const li = document.createElement("li");
li.setAttribute("data-id", task.id);

li.innerHTML='
<span>${task.text}/<span>
<button> Delete /<button>
';
todoList.appendChild(li);
}

function saveTask(){
    localStorage.setItem("task", JSON.stringify(tasks))
}
})

