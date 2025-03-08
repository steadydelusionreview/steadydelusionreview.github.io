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

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("user-email").innerText = `Logged in as: ${user.email}`;
    } else {
        // Redirect to login if not authenticated
        window.location.href = "login.html";
    }
});

// Logout functionality
document.getElementById("logoutBtn").addEventListener("click", () => {
    signOut(auth).then(() => {
        alert("Logged out successfully!");
        window.location.href = "login.html";
    }).catch((error) => {
        console.error("Logout Error:", error);
    });
});
