
const input = document.getElementById("taskinput");
const addButton = document.getElementById("addtask");
const listtask = document.getElementById("tasklist");
const clearButton = document.getElementById("clear");

const all = document.getElementById("all");
const active = document.getElementById("active");
const completed = document.getElementById("completed");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";


function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}




function show() {
  listtask.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];

    if (filter === "active" && task.completed) continue;
    if (filter === "completed" && !task.completed) continue;

    let li = document.createElement("li");

   
    let text = document.createElement("span");
    text.textContent = task.text;

    if (task.completed) {
      text.style.textDecoration = "line-through";
      text.style.color = "green"
    }

    text.onclick = function () {
      task.completed = !task.completed;
      save()
      show()
    };

    let edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.onclick = function () {
      let newText = prompt("Edit task:", task.text);
      if (newText && newText.trim() !== "") {
        task.text = newText.trim();
        save();
        show()
      }
    };

    
    let delet = document.createElement("button");
    delet.textContent = "Delete";
    delet.onclick = function () {
      tasks.splice(i, 1);   
      save();
      show()
    };

    li.appendChild(text);
    li.appendChild(edit);
    li.appendChild(delet);

    listtask.appendChild(li);
  }
}


addButton.onclick = function () {
    let text = input.value.trim();
  
    if (text === "") return;
  
    tasks.push({
      text: text,
      completed: false
    });
  
    save();
    show()
  
    input.value = "";
};
  
  
clearButton.onclick = function () {
    tasks = [];
    save();
    show()
};

all.onclick = function () {
  filter = "all";
  show()
};

active.onclick = function () {
  filter = "active";
  show()
};

completed.onclick = function () {
  filter = "completed";
  show()
};


show();
