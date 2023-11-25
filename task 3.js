function addTask() {
  var taskTitle = document.getElementById('taskTitle').value;
  var taskDescription = document.getElementById('taskDescription').value;
  var dueDateTime = document.getElementById('dueDateTime').value;
  var taskColor = document.getElementById('taskColor').value;

  var taskItem = document.createElement('li');
  taskItem.className = 'task';
  taskItem.innerHTML = `
    <span style="color: ${taskColor};">${taskTitle}</span>
    <p>${taskDescription}</p>
    <p>Due: ${dueDateTime}</p>
    <button onclick="removeTask(this)">Remove</button>
  `;

  document.getElementById('taskList').appendChild(taskItem);
}

function removeTask(task) {
  task.parentElement.remove();
}
