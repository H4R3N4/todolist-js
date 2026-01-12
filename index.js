let tasks = [
    // {
    //     id: 1,
    //     design: 'Revision JS',
    //     done: false
    // }
];

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(t=>{
        const li = document.createElement("li");
        li.textContent = t.design;
        list.appendChild(li);
    })
}

renderTasks();


function addTask() {
    const input = document.getElementById("inputNewTask");
    const title = input.value;
    const newTask = {
        id: Date.now(),
        design: title,
        done: false
    }
    input.value="";
    tasks.push(newTask);
    renderTasks();
};

document
    .getElementById("btnAddNewTask")
    .addEventListener("click",addTask);

