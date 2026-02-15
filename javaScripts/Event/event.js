const button = document.getElementById("myButton");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  output.textContent = "Button Click Event Accured!";
});



const hoverBtn = document.getElementById("hoverBtn");

hoverBtn.addEventListener("mouseover", () => {
  hoverBtn.textContent = "Mouse Hover Event...";
});

hoverBtn.addEventListener("mouseout", () => {
  hoverBtn.textContent = "Hover event occure...";
});




const dblBtn = document.getElementById("dblBtn");
const dblMsg = document.getElementById("dblMsg");

dblBtn.addEventListener("dblclick", () => {
  dblMsg.textContent = "Double Click Event Occured!";
});




const keyInput = document.getElementById("keyInput");
const keyOutput = document.getElementById("keyOutput");

keyInput.addEventListener("keydown", (event) => {
  keyOutput.textContent = "Key pressed: " + event.key;
});




const focusInput = document.getElementById("focusInput");

focusInput.addEventListener("focus", () => {
  focusInput.style.backgroundColor = "lightyellow";
});

focusInput.addEventListener("blur", () => {
  focusInput.style.backgroundColor = "";
});




const form = document.getElementById("myForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formMsg.textContent = "Form Submitted Successfully!";
});




const colorSelect = document.getElementById("colorSelect");

colorSelect.addEventListener("change", () => {
  document.body.style.backgroundColor = colorSelect.value;
});




const rightClickBox = document.getElementById("rightClickBox");
const rightClickMsg = document.getElementById("rightClickMsg");

rightClickBox.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  rightClickMsg.textContent = "Right Click Event Triggered!";
});




const scrollMsg = document.getElementById("scrollMsg");

window.addEventListener("scroll", () => {
  scrollMsg.textContent = "Scrolling... Y position: " + window.scrollY;
});




const resizeMsg = document.getElementById("resizeMsg");

window.addEventListener("resize", () => {
  resizeMsg.textContent = 
    "Window size: " + window.innerWidth + " x " + window.innerHeight;
});



