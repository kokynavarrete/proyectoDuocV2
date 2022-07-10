// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcfiqqENKNjijCd5L9t6D0ImcE_ULbnGo",
    authDomain: "proyecto-jardin-firebase.firebaseapp.com",
    projectId: "proyecto-jardin-firebase",
    storageBucket: "proyecto-jardin-firebase.appspot.com",
    messagingSenderId: "1043248227049",
    appId: "1:1043248227049:web:feda24c001f6ded7868678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Conexion a db
const db = getFirestore()


export const guardarParvularia = (nombre, rut, edad, direccion) => {
    addDoc(collection(db, 'parvularias'), {
        nombre: nombre, rut: rut, edad: edad, direccion: direccion
    })
}

export const guardarAlumno = (nombre, rut, edad, direccion) => {
    addDoc(collection(db, 'alumnos'), {
        nombre: nombre, rut: rut, edad: edad, direccion: direccion
    })
}