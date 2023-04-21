import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjcgF0TaSyRs4mgSdjluQ-5eNWdc20UtE",
  authDomain: "entregafinalreact-sm1.firebaseapp.com",
  projectId: "entregafinalreact-sm1",
  storageBucket: "entregafinalreact-sm1.appspot.com",
  messagingSenderId: "235189739546",
  appId: "1:235189739546:web:7a1907faff6088383f31a3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


