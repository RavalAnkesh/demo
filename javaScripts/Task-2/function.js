const taskInput = document.getElementById("input")
const dueInput = document.getElementById("duedate")
const addBtn = document.getElementById("addbtn")
const searchInput = document.getElementById("search")
const taskList = document.getElementById("tasklist")
const allBtn = document.getElementById("all")
const activeBtn = document.getElementById("active")
const completeBtn = document.getElementById("complete")
const clearBtn = document.getElementById("clear")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []
let filter = "all"
let draggedItem = null;

function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function add() {
    const text = taskInput.value.trim()
    const due = dueInput.value.trim()
    if (!text) return
    tasks.push({
        text,
        done: false,
        due: due || null
    })
    save()
    taskInput.value = ""
    dueInput.value = ""
    show()
}

function remove(task) {
    tasks = tasks.filter(t => t !== task)
    save()
    show()
}

function edit(task) {
    const newText = prompt("Task : ", task.text)
    const newdate = prompt("Date : ", task.due || "")
    if (newText !== null) task.text = newText
    if (newdate !== null) task.due = newDue
    save()
    show()
}

function toggle(task) {
    task.done = !task.done
    save()
    show()
}

function getFiltered() {
    let filtered = tasks
    if (filter === "active") filtered = filtered.filter(t => !t.done)
    if (filter === "complete") filtered = filtered.filter(t => t.done)

    const sear = searchInput.value.toLowerCase()
    if (sear)
        filtered = filtered.filter(t => t.text.toLowerCase().includes(sear))
    return filtered
}




function show() {
    taskList.innerHTML = ""

    const filtered = getFiltered()

    if (filtered.length === 0) {
        const li = document.createElement("li")
        li.textContent = "No task found..."
        li.style.color = "red"
        taskList.appendChild(li)
        return
    }

    filtered.forEach(task => {
        const li = document.createElement("li")

        const check = document.createElement("input")
        check.type = "checkbox"
        check.checked = task.done
        check.onclick = () => toggle(task)

        const textSpan = document.createElement("span")
        textSpan.textContent = task.text
        if (task.done) {
            textSpan.style.color = "green";
            textSpan.style.textDecoration = "line-through";
            textSpan.style.textDecorationColor = "red";
        }

        const dueSpan = document.createElement("small")
        if (task.due) {
            dueSpan.textContent = `${task.due}`
            dueSpan.style.marginLeft = "20px"
        }

        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        editBtn.style.marginLeft ="15px"
        editBtn.onclick = () => edit(task)

        const delBtn = document.createElement("button")
        delBtn.textContent = "Delete"
        delBtn.onclick = () => remove(task)


        li.draggable = true;
        li.addEventListener("dragstart", () => {
            draggedItem = task;
        })

        li.addEventListener("dragover", e => {
            e.preventDefault();
        })

        li.addEventListener("drop", () => {
            if (draggedItem === task) return

            const oldIndex = tasks.indexOf(draggedItem)
            const newIndex = tasks.indexOf(task)

            tasks.splice(oldIndex, 1)
            tasks.splice(newIndex, 0, draggedItem)

            save()
            show()
        });


        li.appendChild(check)
        li.appendChild(textSpan)
        li.appendChild(dueSpan)
        li.appendChild(editBtn)
        li.appendChild(delBtn)

        taskList.appendChild(li)
    })
}


addBtn.onclick = add

clearBtn.onclick = () => {
    if (confirm("You want To delete all task?")) {
        tasks = []
        save()
        show()
    }
}

allBtn.onclick = () => {
    filter = "all"
    show()
}
activeBtn.onclick = () => {
    filter = "active"
    show()
}
completeBtn.onclick = () => {
    filter = "complete"
    show()
}

function sortByName() {
    tasks.sort((a, b) => a.text.localeCompare(b.text))
    save()
    show()
}

function sortByDate() {
    tasks.sort((a, b) => {
        if (!a.due) return 1
        if (!b.due) return -1
        return new Date(a.due) - new Date(b.due)
    })
    save()
    show()
}

taskInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        dueInput.focus()
    }
})
dueInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        add()
        taskInput.focus()
    }
})

searchInput.addEventListener("input", show);

document.addEventListener("keydown", e => {
    if (e.key === "f") {
        searchInput.focus();
    }
});
document.addEventListener("keydown",e=>{
    if(e.key === "Delete"){
        clearBtn.onclick()
    }
})

show()
taskInput.focus()
