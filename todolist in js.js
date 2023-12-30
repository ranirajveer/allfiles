function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  var taskText = document.createTextNode(taskInput.value);
  var taskItem = document.createElement("li");
  taskItem.appendChild(taskText);
  
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function() {
    taskList.removeChild(taskItem);
  };
  taskItem.appendChild(deleteButton);
  
  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.onclick = function() {
    var editText = prompt("Enter new task text:");
    if (editText !== null) {
      taskText.nodeValue = editText;
    }kk
  };
  taskItem.appendChild(editButton);
  
  taskList.appendChild(taskItem);
  taskInput.value = "";
}
