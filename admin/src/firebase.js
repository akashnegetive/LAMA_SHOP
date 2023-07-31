// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOP3dJPnw8UqzLrXbGzeVbl2UarC29F68",
  authDomain: "shop-f8e48.firebaseapp.com",
  projectId: "shop-f8e48",
  storageBucket: "shop-f8e48.appspot.com",
  messagingSenderId: "959654028135",
  appId: "1:959654028135:web:419ff084be2a3c9e9c05c2",
  measurementId: "G-4W6X20LX20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
