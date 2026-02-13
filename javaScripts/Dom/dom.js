const todoInput = document.getElementById("todoInput");
  const addTodoBtn = document.getElementById("addTodoBtn");
  const todoList = document.getElementById("todoList");
  const taskCount = document.getElementById("taskCount");
  const clearAllBtn = document.getElementById("clearAllBtn");

  const redBtn = document.getElementById("redBtn");
  const greenBtn = document.getElementById("greenBtn");
  const blueBtn = document.getElementById("blueBtn");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function updateTaskCount() {
    taskCount.textContent = `Total tasks: ${tasks.length}`;
  }

  function renderTasks() {
    todoList.innerHTML = "";

    tasks.forEach((task, index) => {
      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = task.text;
      if (task.completed) span.classList.add("completed");

      // Toggle Complete
      span.addEventListener("click", () => {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
      });

      // Edit Task
      span.addEventListener("dblclick", () => {
        const newText = prompt("Edit task:", task.text);
        if (newText !== null && newText.trim() !== "") {
          tasks[index].text = newText.trim();
          saveTasks();
          renderTasks();
        }
      });

      // Delete Button
      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.addEventListener("click", () => {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
      });

      // Move Up
      const upBtn = document.createElement("button");
      upBtn.textContent = "UP";
      upBtn.addEventListener("click", () => {
        if (index > 0) {
          [tasks[index], tasks[index - 1]] =
          [tasks[index - 1], tasks[index]];
          saveTasks();
          renderTasks();
        }
      });

      // Move Down
      const downBtn = document.createElement("button");
      downBtn.textContent = "DOWN";
      downBtn.addEventListener("click", () => {
        if (index < tasks.length - 1) {
          [tasks[index], tasks[index + 1]] =
          [tasks[index + 1], tasks[index]];
          saveTasks();
          renderTasks();
        }
      });

      li.appendChild(span);
      li.appendChild(delBtn);
      li.appendChild(upBtn);
      li.appendChild(downBtn);

      todoList.appendChild(li);
    });

    updateTaskCount();
  }

  // Add Task
  addTodoBtn.addEventListener("click", () => {
    const text = todoInput.value.trim();
    if (!text) {
      alert("Please enter a task!");
      return;
    }

    tasks.push({ text: text, completed: false });
    todoInput.value = "";
    saveTasks();
    renderTasks();
  });

  // Clear All
  clearAllBtn.addEventListener("click", () => {
    tasks = [];
    saveTasks();
    renderTasks();
  });

  // Theme Save Function
  function saveTheme(color) {
    localStorage.setItem("theme", color);
    document.body.style.backgroundColor = color;
  }

  redBtn.addEventListener("click", () => saveTheme("lightcoral"));
  greenBtn.addEventListener("click", () => saveTheme("lightgreen"));
  blueBtn.addEventListener("click", () => saveTheme("lightblue"));

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.style.backgroundColor = savedTheme;
  }

  // Initial Load
  renderTasks();