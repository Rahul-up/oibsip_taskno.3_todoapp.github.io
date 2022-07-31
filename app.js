document.getElementById("frmTask").addEventListener("submit", saveTask);

function saveTask(e) {
   title = document.getElementById("title").value;
   description = document.getElementById("description").value;
   task = {
    title,
    description
  };
  if (localStorage.getItem("tasks") == null) {
     tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
     tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  getTasks();

  document.getElementById("frmTask").reset();
  e.preventDefault();
}

function deleteTask(title) {
   tasks = JSON.parse(localStorage.getItem("tasks"));
   for ( i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
   tasks = JSON.parse(localStorage.getItem("tasks"));
   tasksView = document.getElementById("tasks");
  tasksView.innerHTML = "";
  for ( i = 0; i < tasks.length; i++) {
     title = tasks[i].title;
     description = tasks[i].description;
    tasksView.innerHTML +=
      `<div class="card mb-3">
        <div class="card-body">
        <div class="row">
          <div class="col-sm-3">
            <p>${title}</p>
          </div>
          <div class="col-sm-7">
            <p>${description}</p>
          </div>
          <div class="col-sm-2">
            <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger">X</a>
          </div>
        </div>  
       </div>
      </div>`;
  }
}
getTasks();