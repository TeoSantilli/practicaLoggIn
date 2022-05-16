import app from 'firebase/app' 
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAHhSs-dp_apn89E-c8KYRgICLNX4f1_9M",
    authDomain: "pruebafirebase-c93dc.firebaseapp.com",
    projectId: "pruebafirebase-c93dc",
    storageBucket: "pruebafirebase-c93dc.appspot.com",
    messagingSenderId: "111765050482",
    appId: "1:111765050482:web:fea3feee39e608bb879eeb"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()
