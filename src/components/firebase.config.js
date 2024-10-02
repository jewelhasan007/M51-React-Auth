// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXUjd4tRyhXe7H8j12Ya_H6uVdc0_TwNg",
  authDomain: "m51-react-auth.firebaseapp.com",
  projectId: "m51-react-auth",
  storageBucket: "m51-react-auth.appspot.com",
  messagingSenderId: "638060161513",
  appId: "1:638060161513:web:b105db124666f2b2e48378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export default app;
