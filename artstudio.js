const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");
const brushType = document.getElementById("brushType");
const clearCanvas = document.getElementById("clearCanvas");
const saveCanvas = document.getElementById("saveCanvas");
const eraserBtn = document.getElementById("eraserBtn");

let painting = false;
let isErasing = false;

// Load Texture Brush Image
const textureImg = new Image();
textureImg.src = "texture.png";  // Replace with your texture image

function getCursorPosition(event) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

canvas.addEventListener("mousedown", (event) => {
    painting = true;
    ctx.beginPath();
    let pos = getCursorPosition(event);
    ctx.moveTo(pos.x, pos.y);
});

canvas.addEventListener("mouseup", () => {
    painting = false;
    ctx.beginPath();
});

canvas.addEventListener("mousemove", (event) => {
    if (!painting) return;
    let pos = getCursorPosition(event);

    ctx.lineWidth = brushSize.value;
    ctx.strokeStyle = isErasing ? "#ffffff" : colorPicker.value;

    switch (brushType.value) {
        case "round":
            ctx.lineCap = "round";
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
            break;

        case "square":
            ctx.lineCap = "butt";
            ctx.fillRect(pos.x, pos.y, brushSize.value, brushSize.value);
            break;

        case "spray":
            for (let i = 0; i < 10; i++) {
                let offsetX = (Math.random() - 0.5) * brushSize.value * 2;
                let offsetY = (Math.random() - 0.5) * brushSize.value * 2;
                ctx.fillRect(pos.x + offsetX, pos.y + offsetY, 1, 1);
            }
            break;

        case "texture":
            ctx.drawImage(textureImg, pos.x, pos.y, brushSize.value * 2, brushSize.value * 2);
            break;
    }
});

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
