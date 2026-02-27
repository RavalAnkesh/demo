function calculate() {
    event.preventDefault();

    let roll = document.getElementById("rollnumber").value;
    let name = document.getElementById("sname").value;

    let guj = Number(document.getElementById("gujarti").value);
    let sci = Number(document.getElementById("science").value);
    let math = Number(document.getElementById("math").value);
    let eng = Number(document.getElementById("english").value);

    let total = guj + sci + math + eng;
    let percentage = total / 4; 

    let passing = 33;
    let result = (guj >= passing && sci >= passing && math >= passing && 
        eng >= passing) ? "PASS" : "FAIL";

    let grade;
    if (percentage >= 90) {
        grade = "A+";
    }else if (percentage >= 75) {
        grade = "A";
    }else if (percentage >= 60){
         grade = "B";
    }else if (percentage >= 50) {
        grade = "C";
    }else if (percentage >= 33){
         grade = "D";
    }else grade = "F";

    let resultBox = document.getElementById("resultBox");
    resultBox.style.display = "block";
    resultBox.innerHTML = `
        <h3>Student Result</h3>
        <p><strong>Roll Number:</strong> ${roll}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Total Marks:</strong> ${total}</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Result:</strong> <span id="resultText">${result}</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
    
    let resultText = document.getElementById("resultText");
    resultText.style.color = (result === "PASS") ? "green" : "red";
}
