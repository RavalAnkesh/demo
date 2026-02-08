let count = 0;

let countText = document.getElementById("count");
let incBtn = document.getElementById("inc");
let decBtn = document.getElementById("dec");
let resetBtn = document.getElementById("reset");

incBtn.addEventListener("click", function () {
  count++;
  countText.innerText = count;
});

decBtn.addEventListener("click", function () {
  count--;
  countText.innerText = count;
});

resetBtn.addEventListener("click", function () {
  count = 0;
  countText.innerText = count;
});
