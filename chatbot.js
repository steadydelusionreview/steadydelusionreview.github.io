const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
    let userMessage = userInput.value;
    chatbox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    
    let botResponse = "I am just a simple bot!";
    if (userMessage.toLowerCase().includes("hello")) {
        botResponse = "Hello! How can I help you?";
    }
    
    setTimeout(() => {
        chatbox.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
    }, 1000);

    userInput.value = "";
});
