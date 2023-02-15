// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsv0Af24wdEQ7zd-k-KgoGFrh6lU0tS8E",
  authDomain: "cocktails-e7b8f.firebaseapp.com",
  projectId: "cocktails-e7b8f",
  storageBucket: "cocktails-e7b8f.appspot.com",
  messagingSenderId: "487805951393",
  appId: "1:487805951393:web:b192ab4031b169e8d67fe0",
  measurementId: "G-YYH45C6778",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
