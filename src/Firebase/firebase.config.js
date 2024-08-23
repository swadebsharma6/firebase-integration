// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMzKEWxIL8sUh2FA4leH7lOv_hc-_tIQs",
  authDomain: "fir-intregration.firebaseapp.com",
  projectId: "fir-intregration",
  storageBucket: "fir-intregration.appspot.com",
  messagingSenderId: "752613633923",
  appId: "1:752613633923:web:6de62fa8be1390da7450b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;