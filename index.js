let tasks = [];

function loadTasks(){ //from localstorage
    const data = localStorage.getItem("tasks");
    if (data) {
        tasks = JSON.parse(data);
    }
}

loadTasks();

function toggleTask(id){
    const task = tasks.find(t=> t.id === id);

    if (!task) return;

    task.done = !task.done;

    saveTasks();
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(t=>{
        const li = document.createElement("li");
        li.textContent = t.design   ;
        li.dataset.id = t.id;
        
        li.addEventListener("click",() =>{
            toggleTask(t.id);
        });

        if(t.done){
            li.style.textDecoration = "line-through";
        }

        const btnDelete = document.createElement("button");
        btnDelete.textContent = "Supprimer";

        btnDelete.addEventListener("click", (event) =>{
            event.stopPropagation();
            deleteTask(t.id);
        })    
        
        li.appendChild(btnDelete);
        list.appendChild(li);       
    })
}

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

renderTasks();

function addTask() {
    const input = document.getElementById("inputNewTask");
    const title = input.value.trim();
    if (title === "") return;
    const newTask = {
        id: Date.now(),
        design: title,
        done: false
    }
    input.value="";
    tasks.push(newTask);
    saveTasks();
    renderTasks();
};

document
    .getElementById("btnAddNewTask")
    .addEventListener("click",addTask);

function deleteTask(id){
    tasks = tasks.filter(t => t.id != id);

    saveTasks();
    renderTasks();
}

