function createItemCounter(outputId) {
    let count = 0; 

    return function () {
        count++;
        document.getElementById(outputId).innerText = count;
    };
}

const counter1 = createItemCounter("qty1");
const counter2 = createItemCounter("qty2");
const counter3 = createItemCounter("qty3");

document.querySelectorAll(".addBtn")[0].addEventListener("click", counter1);
document.querySelectorAll(".addBtn")[1].addEventListener("click", counter2);
document.querySelectorAll(".addBtn")[2].addEventListener("click", counter3);
 