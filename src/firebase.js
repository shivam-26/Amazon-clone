import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxRbGa0hgBH5owDiJaJBHk8WG3-25ZQK4",
    authDomain: "clone-228b7.firebaseapp.com",
    projectId: "clone-228b7",
    storageBucket: "clone-228b7.appspot.com",
    messagingSenderId: "819904450802",
    appId: "1:819904450802:web:31aa664eb62ee6f0ba006b",
    measurementId: "G-R6HKT8RVJ3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {
    db,
    auth
};