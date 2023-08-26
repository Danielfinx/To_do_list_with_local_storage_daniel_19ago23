//Initial References
const newTaskInput = document.querySelector("#new-task input");
const taskDiv = document.querySelector("#tasks");
let deleteTask, editTasks, tasks;
let updateNote = "";
let count;

//Function on windows load
windows.onload = () => {
    updateNote = "";
    count = Object.keys(localStorage).length;
    displayTasks();
}

//Function to Display the Tasks
const displayTasks = () => {
    if (Object.keys(localStorage).length > 0) {
        taskDiv.style.display = "inline-block";
    } else {
        taskDiv.style.display = "none";
    }

    //clear the tasks
    taskDiv.innerHTML = "";

    //Fetch all the keys in local storage
    let tasks = Object.keys(localStorage);
    tasks = tasks.sort();

    for (let key of tasks) {
        let classValue = "";

        //Get all values
        let value = localStorage.getItem(key);
        let tasksinnerDiv = document.createElement("div");
        tasksinnerDiv.classList.add("task");
        tasksinnerDiv.setAttribute("id", key);
        tasksinnerDiv.innerHTML = `<span id="taskname">${key.split("_")[1]}</span>`;

        //localstorage  would store boolean as string so we parse it to boolean back

        let editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.innerHTML = `<ion-icon name="create"></ion-icon>`;
        if (!JSON.parse(value)) {
            editButton.style.visibility = "visible";   
        } else {
            editButton.style.visibility = "hidden";
            tasksinnerDiv.classList.add("completed");
        }
        tasksinnerDiv.appendChild(editButton);
        tasksinnerDiv.innerHTML += `<button class= "delete<ion-icon name="trash"></ion-icon></button>`;
        taskDiv.appendChild(tasksinnerDiv);
    }
}
