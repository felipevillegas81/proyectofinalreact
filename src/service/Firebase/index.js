import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCFgMI70CS4g7MegBcVPGz--qosAf5wXUQ",
    authDomain: "optimax-999bb.firebaseapp.com",
    projectId: "optimax-999bb",
    storageBucket: "optimax-999bb.appspot.com",
    messagingSenderId: "610051249514",
    appId: "1:610051249514:web:9e820caa5fbcdddbed8113"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)