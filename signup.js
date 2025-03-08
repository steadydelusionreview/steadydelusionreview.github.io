// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCr8p4cFxgm37hNBPE2onT5B9k7AzC7Pmc",
    authDomain: "delusionreview.firebaseapp.com",
    projectId: "delusionreview",
    storageBucket: "delusionreview.firebasestorage.app",
    messagingSenderId: "1089046319832",
    appId: "1:1089046319832:web:68bc9231b26990e3783dad",
    measurementId: "G-HFVL79FHV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup Event Listener
document.getElementById("signupBtn").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        errorMessage.innerText = "Passwords do not match!";
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Signup Successful! Redirecting to login page...");
            window.location.href = "login.html"; // Redirect to login page after signup
        })
        .catch((error) => {
            errorMessage.innerText = "Error: " + error.message;
        });
});
