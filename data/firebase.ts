import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGAhFQ31kTetWneTzQrYaiZ8agLTzjL3I",
  authDomain: "web-gim-b9331.firebaseapp.com",
  projectId: "web-gim-b9331",
  storageBucket: "web-gim-b9331.appspot.com",
  messagingSenderId: "295682308291",
  appId: "1:295682308291:web:27d420b2b2a2dd8f0bca76",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore();
