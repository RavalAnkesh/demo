
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "123") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("app").style.display = "flex";
  } else {
    document.getElementById("error").innerText = "Invalid username or password";
  }
}

function logout() {
  document.getElementById("app").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}


let display = document.getElementById("display");

function press(val) {
  display.value += val;
}

function calculate() {
  display.value = eval(display.value);
}

function clearAll() {
  display.value = "";
}

/* COUNTER */
let count = 0;
let countText = document.getElementById("count");

document.getElementById("inc").addEventListener("click", () => {
  count++;
  countText.innerText = count;
});

document.getElementById("dec").addEventListener("click", () => {
  count--;
  countText.innerText = count;
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  countText.innerText = count;
});



