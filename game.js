let score = 0;
document.getElementById("clickerBtn").addEventListener("click", () => {
    score++;
    document.getElementById("score").innerText = score;
});
