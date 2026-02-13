class Student {
    constructor(name, feedback) {
      this.name = name
      this.feedback = feedback
    }
}
  
class FeedbackManager {
  clean(text) {
      console.log({text});
      return text.toLowerCase().trim().split(/\s+/)
    }
  
    check(word) {
      if (word.includes("excelent") || word.includes("good")) {
        return "Good"
      } else if (word.includes("bad")) {
        return "Bad"
      } else {
        return "Average"
      }
    }
  
    process(student) {
      const cleaned = this.clean(student.feedback)
      const status = this.check(cleaned)
  
      return {
        name: student.name,
        feedback: cleaned,
        status: status
      }
    }
}
  
function fetchCourse() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("JavaScript Basics")
      }, 1500)
    })
}
  
async function handleSubmit(event) {
    try{
        event.preventDefault();
        const name = document.getElementById("name").value
        const feedback = document.getElementById("feedback").value
  console.log({feedback});
        const student = new Student(name, feedback)
        const manager = new FeedbackManager()
  
        const output = document.getElementById("result")
        output.innerHTML = "Fetching your course details..."
  
        const course = await fetchCourse()
        const res = manager.process(student)
  
        output.innerHTML = `
            <p>Student Name: ${res.name}</p>
            <p>Course: ${course}</p>
            <p>Feedback: ${res.feedback.join(" ")}</p>
            <p>Status: ${res.status}</p>
        `;
    }catch(error){
        document.write("Erro To fetch data : ",error)
    }
}
  
 