import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyArIxczqOcoTqIakDWka8HozBmp7AmFkDk",
    authDomain: "react-amzn-clone-40077.firebaseapp.com",
    projectId: "react-amzn-clone-40077",
    storageBucket: "react-amzn-clone-40077.appspot.com",
    messagingSenderId: "816576743436",
    appId: "1:816576743436:web:d38155266d474d2c26c629",
    measurementId: "G-R2T8EMZ4K2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };