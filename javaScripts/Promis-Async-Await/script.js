const outputDiv = document.getElementById("output");

function doTask(taskName, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(taskName + " is done!");
        }, delay);
    });
}

function runPromises() {
    outputDiv.innerText = "Pizza Order (Promises Example)\n\n";
    outputDiv.innerText += "Ordering Pizza ...\n";

    doTask("Pizza Ready ", 2000)
        .then(result => {
            outputDiv.innerText += result + "\n";
            return doTask("Cold Drink Ready ", 1000);
        })
        .then(result => {
            outputDiv.innerText += result + "\n";
        })
        .catch(error => {
            outputDiv.innerText += "Error: " + error + "\n";
        });

    outputDiv.innerText += "Watching Mobile (Non-blocking)\n";
}

async function runAsyncAwait() {
    outputDiv.innerText = "Train Journey (Async/Await Example)\n\n";
 
    try {
        outputDiv.innerText += "Waiting for Train A \n";
        const trainA = await doTask("Train A Arrived ", 2000);

        outputDiv.innerText += trainA + "\n";

        outputDiv.innerText += "Waiting for Train B \n";
        const trainB = await doTask("Train B Arrived ", 1000);
        outputDiv.innerText += trainB + "\n";
    } catch (error) {
        outputDiv.innerText += "Error: " + error + "\n";
    }

    outputDiv.innerText += "Reached Home \n";
}