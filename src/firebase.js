import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfNh4aI_lSFPqNq5GYaaIB4dQuja5Y7Vc",
  authDomain: "clone-a718a.firebaseapp.com",
  projectId: "clone-a718a",
  storageBucket: "clone-a718a.appspot.com",
  messagingSenderId: "599365930972",
  appId: "1:599365930972:web:87c985c974acd9c71e4919",
  measurementId: "G-QXNPQ58ND1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };