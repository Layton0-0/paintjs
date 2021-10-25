const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("controls__colors");
const range = document.getElementById("jsRange");
const button = document.getElementById("jsMode");

canvas.width = 550;
canvas.height = 550;

let painting = false;
let filling = false;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleRangeChange() {
  const size = range.value;
  ctx.lineWidth = size;
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

function handleModeClick() {
  if (filling == true) {
    filling = false;
    button.innerText = "fill";
  } else {
    filling = true;
    button.innerText = "paint";
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

if (colors) {
  Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));
}

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (button) {
  button.addEventListener("click", handleModeClick);
}