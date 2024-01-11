function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var newTask = document.createElement("li");
        newTask.innerHTML = `
        <span>${taskInput.value}</span>
        <span class="check" onclick="completeTask(this)">✓</span>
        <span class="cross" onclick="deleteTask(this)">✗</span>
      `;
        taskList.appendChild(newTask);

        // Clear the input field after adding a task
        taskInput.value = "";
    }
}

function completeTask(element) {
    var taskItem = element.closest("li");
    taskItem.classList.toggle("completed");
}

function deleteTask(element) {
    var taskItem = element.closest("li");
    taskItem.remove();
}
