const input = document.getElementById("taskinput")
const taskdate = document.getElementById("taskdate");

const addbtn = document.getElementById("addtask")
const listtask = document.getElementById("tasklist")
const clearbtn = document.getElementById("clear")

const allbtn = document.getElementById("all")
const activebtn = document.getElementById("active")
const completebtn = document.getElementById("complete")

const searchInput = document.getElementById("search")




let tasks = JSON.parse(localStorage.getItem("tasks")) || []
let filter = "all"
let draggedTaskIndex = null;


function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}


function show() {
  listtask.innerHTML = ""

  let filtertask = tasks
  

  if (filter === "active") {
    filtertask = tasks.filter(t => !t.completed)
  }

  if (filter === "completed") {
    filtertask = tasks.filter(t => t.completed)
  }



  const searchText = searchInput.value.toLowerCase()
  if (searchText !== "") {
    filtertask = filtertask.filter(t =>
      t.text.toLowerCase().includes(searchText)
    )
  }



  filtertask.forEach((task,index) => {
    let li = document.createElement("li")

    li.addEventListener("dragstart", function () {
      draggedTaskIndex = index; 
    });

    li.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

   
    li.addEventListener("drop", function () {

        if (draggedTaskIndex === null) return;

        const droppedIndex = index; 
        const draggedTask = tasks[draggedTaskIndex];

        tasks.splice(draggedTaskIndex, 1);

        tasks.splice(droppedIndex, 0, draggedTask);

        draggedTaskIndex = null;
        save();
        show();
    });


    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = task.completed

    checkbox.onchange = function () {
      task.completed = checkbox.checked
      save()
      show()
    }

    let text = document.createElement("span")
    text.textContent = task.text
    let date = document.createElement("small")

    if (task.dueDate) {
      date.textContent =  task.dueDate
      date.style.marginLeft = "30px"
    }


    if (task.completed) {
        text.style.color = "#11e809"
    }


    let edit = document.createElement("button")
    edit.textContent = "Update"
    edit.style.marginLeft="20px"

    edit.onclick = function () {
      let newText = prompt("Update task:", task.text)
      if (newText && newText.trim() !== "") {
        task.text = newText.trim()
        save()
        show()
      }
    }


    let delet = document.createElement("button")
    delet.textContent = "Delete"

    delet.onclick = function () {
      tasks = tasks.filter(t => t.text !== task.text)
      save()
      show()
    }

    li.appendChild(checkbox)
    li.appendChild(text)
    li.appendChild(date)
    li.appendChild(edit)
    li.appendChild(delet)
    
    li.draggable=true
  
    listtask.appendChild(li)
  })
}

addbtn.onclick = function () {
  let text1 = input.value.trim()
  const dueDate = taskdate.value;
  if (text1 === "") return

  tasks.push({
    text: text1,
    completed: false,
    dueDate: dueDate || null
  })

  save()
  show()
  input.value = ""
  taskdate.value=""
}
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    taskdate.focus()
  }                                       
  taskdate.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
      addbtn.click()
    }
  })
})




clearbtn.onclick = function () {
  tasks = []
  save()
  show()
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Delete") {
    tasks = []
    save()
    show()
  }
})

document.addEventListener("keydown", function(e) {
  if (e.key === "f") {
    e.preventDefault();      
    searchInput.focus();      
    searchInput.select();    
  }
});




allbtn.onclick = function () {
  filter = "all"
  show()
}

activebtn.onclick = function () {
  filter = "active"
  show()
}

completebtn.onclick = function () {
  filter = "completed"
  show()
}

searchInput.addEventListener("input", function () {
  show()
})


function assending() {
  tasks.sort((a, b) => 
    a.text.localeCompare(b.text)
  )
  save()
  show()
}


function desending() {
  tasks.sort((a, b) => 
    b.text.localeCompare(a.text)
  )
  save()
  show()
}


show()
input.focus()