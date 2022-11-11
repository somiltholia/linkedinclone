import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD8eOMKhQE-3oQE7MpYQW1M2SX_UPd-ks4",
    authDomain: "linkedin-clone-693ba.firebaseapp.com",
    projectId: "linkedin-clone-693ba",
    storageBucket: "linkedin-clone-693ba.appspot.com",
    messagingSenderId: "977546522747",
    appId: "1:977546522747:web:eaa80f98fe63b256ecb2de",
    measurementId: "G-RT71KNZM0B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};