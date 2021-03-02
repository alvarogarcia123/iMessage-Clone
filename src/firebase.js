// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDEXfWjBRpM3Z1nY5pCX5-Kp2U3BWZEVHk",
    authDomain: "imessge-clone-yt.firebaseapp.com",
    projectId: "imessge-clone-yt",
    storageBucket: "imessge-clone-yt.appspot.com",
    messagingSenderId: "290918495320",
    appId: "1:290918495320:web:0ba275f00141d30d2f862d",
    measurementId: "G-39615RCGPV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;