import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9u78Q9Fjk-59PYuLRlWJyqfO2MmBEYPw",
  authDomain: "slack-clone-3ab1a.firebaseapp.com",
  projectId: "slack-clone-3ab1a",
  storageBucket: "slack-clone-3ab1a.appspot.com",
  messagingSenderId: "947828943161",
  appId: "1:947828943161:web:9aff12441e1ac9907720e8",
  measurementId: "G-6G9RLY4WY8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
