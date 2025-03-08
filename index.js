// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

// Elements
const welcomeMessage = document.getElementById("welcomeMessage");
const loginLink = document.getElementById("loginLink");
const signupLink = document.getElementById("signupLink");
const dashboardLink = document.getElementById("dashboardLink");
const logoutBtn = document.getElementById("logoutBtn");

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
    if (user) {
        welcomeMessage.innerText = `Welcome, ${user.email}!`;
        loginLink.style.display = "none";
        signupLink.style.display = "none";
        dashboardLink.style.display = "inline";
        logoutBtn.style.display = "inline";
    } else {
        welcomeMessage.innerText = "Welcome to Steady Delusion Review";
        loginLink.style.display = "inline";
        signupLink.style.display = "inline";
        dashboardLink.style.display = "none";
        logoutBtn.style.display = "none";
    }
});

// Logout functionality
logoutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
        alert("Logged out successfully!");
        window.location.reload();
    }).catch((error) => {
        console.error("Logout Error:", error);
    });
});
