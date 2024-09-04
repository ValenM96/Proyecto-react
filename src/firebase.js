import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBGjcIn5OyYgCpfCEWYyk4KF_YtYPt17fc",
    authDomain: "whiskyland-c6d13.firebaseapp.com",
    projectId: "whiskyland-c6d13",
    storageBucket: "whiskyland-c6d13.appspot.com",
    messagingSenderId: "1057597214049",
    appId: "1:1057597214049:web:39ab24d04f02164a0b4920",
    measurementId: "G-J2FW4MM5P4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
