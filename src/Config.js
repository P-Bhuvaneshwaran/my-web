// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1GMOZYLaCMnNXCiRP4zqlGnbRT2mXGwI",
  authDomain: "my-web-40e76.firebaseapp.com",
  projectId: "my-web-40e76",
  storageBucket: "my-web-40e76.appspot.com",
  messagingSenderId: "456210394619",
  appId: "1:456210394619:web:33913a669df53b5bd0ef5e",
  measurementId: "G-31882SQ616"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;