import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_KRu_2EO7glu7cHvK_lWzsM2zB9w6kH4",
  authDomain: "admin-panel-384cb.firebaseapp.com",
  projectId: "admin-panel-384cb",
  storageBucket: "admin-panel-384cb.appspot.com",
  messagingSenderId: "522802723422",
  appId: "1:522802723422:web:85af829d0e62a649f392cf",
  measurementId: "G-N4X5N2MWMZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, googleProvider, facebookProvider };
