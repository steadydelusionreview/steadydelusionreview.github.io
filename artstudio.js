const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");
const clearCanvas = document.getElementById("clearCanvas");
const saveCanvas = document.getElementById("saveCanvas");
const eraserBtn = document.getElementById("eraserBtn");

let painting = false;
let isErasing = false;

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", stopPosition);
canvas.addEventListener("mousemove", draw);

function startPosition() {
    painting = true;
    ctx.beginPath();
}

function stopPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(event) {
    if (!painting) return;

    ctx.lineWidth = brushSize.value;
    ctx.lineCap = "round";
    ctx.strokeStyle = isErasing ? "#ffffff" : colorPicker.value;

    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

// Clear the canvas
clearCanvas.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Save the drawing as an image
saveCanvas.addEventListener("click", () => {
    let link = document.createElement("a");
    link.download = "artwork.png";
    link.href = canvas.toDataURL();
    link.click();
});

// Eraser mode
eraserBtn.addEventListener("click", () => {
    isErasing = !isErasing;
    eraserBtn.innerText = isErasing ? "Brush Mode" : "Eraser";
});
