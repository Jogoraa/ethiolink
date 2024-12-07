import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCifApOFq_gezXLGbF6wTdXkLjOPiwWzZE",
    authDomain: "ethiolink-7d04d.firebaseapp.com",
    projectId: "ethiolink-7d04d",
    storageBucket: "ethiolink-7d04d.firebasestorage.app",
    messagingSenderId: "307596710",
    appId: "1:307596710:web:cb310af3a0ee0032b89367",
    measurementId: "G-HKGSJT56LC"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
