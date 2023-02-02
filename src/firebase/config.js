import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWAUOmHlvC7WFNnyuDgFbzAkH4jkgFRCc",
    authDomain: "olx-4a534.firebaseapp.com",
    databaseURL: "https://olx-4a534-default-rtdb.firebaseio.com",
    projectId: "olx-4a534",
    storageBucket: "olx-4a534.appspot.com",
    messagingSenderId: "303010564719",
    appId: "1:303010564719:web:f33409f5398342c12f9b9a",
    measurementId: "G-J4DL46YT7S"
  };

  export default firebase.initializeApp(firebaseConfig)