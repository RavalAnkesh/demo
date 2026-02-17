const input = document.getElementById("input")
const taskdate = document.getElementById("duedate")

const add = document.getElementById("addbtn")
const searchInput = document.getElementById("search")
const tasklist = document.getElementById("tasklist")

const all = document.getElementById("all")
const active = document.getElementById("active")
const complete = document.getElementById("complete")
const clearall = document.getElementById("clear")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []
let currentFilter = "all"


function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function render() {
    tasklist.innerHTML = ""

    let fillter = tasks
    if (currentFilter === "active") {
        fillter = tasks.filter(t => !t.complete)
    }

    if (currentFilter === "complete") {
        fillter = tasks.filter(t => t.complete)
    }

    const s = searchInput.value.toLowerCase()
    if (s !== "") {
        fillter = fillter.filter(t => t.text.toLowerCase().includes(s))
    }

    if (fillter.length === 0) {
        const msg = document.createElement("li")
        msg.textContent = "No task found..."
        msg.style.color = "red"
        tasklist.appendChild(msg)
        return
    }

    fillter.forEach((t, index) => {
        const tno = document.createElement("li")

        const check = document.createElement("input")
        check.type = "checkbox"
        check.checked = t.complete
        check.onclick = function (e) {
            t.complete = check.checked
            save()
            render()
            e.stopPropagation()
        }

        const text = document.createElement("span")
        text.textContent = t.text
        if (t.complete) {
            tno.classList.add("complete")
            tno.style.color = "green"
            tno.style.textDecoration = "line-through"
            tno.style.textDecorationColor = "red"
        }


        const date = document.createElement("small")
        if (t.dueDate) {
            date.textContent = t.dueDate
            date.style.marginLeft = "10px"
        }

        const edit = document.createElement("button")
        edit.textContent = "Edit"
        edit.onclick = function (e) {
            e.stopPropagation()
            const newtext = prompt("Edit Task : ", t.text)
            const newDate = prompt("Edit Due Date : ", t.dueDate || "")
            if (newtext) {
                t.text = newtext
            }
            if (newDate !== null){
                t.dueDate = newDate
            }
            save()
            render()
        }

        const del = document.createElement("button")
        del.textContent = "Remove"
        del.onclick = function (e) {
            e.stopPropagation()
            tasks = tasks.filter(task => task !== t)
            save()
            render()
        }
        
        tno.appendChild(check)
        tno.appendChild(text)
        tno.appendChild(date)
        tno.appendChild(edit)
        tno.appendChild(del)
        tno.draggable = true
        tasklist.appendChild(tno)
    });
}

add.onclick = function () {
    const text = input.value.trim()
    const due = taskdate.value.trim()
    if (text === "") {
        return
    }
    tasks.push({
        text: text,
        complete: false,
        dueDate: due || null
    })
    save()
    render()
    input.value = ""
    taskdate.value=""
}

clearall.onclick = function () {
    if (confirm("You want To delete all task?")) {
        tasks = []
        save()
        render()
    }
}

all.onclick = function () {
    currentFilter = "all"
    render()
}
active.onclick = function () {
    currentFilter = "active"
    render()
}
complete.onclick = function () {
    currentFilter = "complete"
    render()
}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter")
        add.onclick()
})

searchInput.addEventListener("input", function () {
    render()
})

render()