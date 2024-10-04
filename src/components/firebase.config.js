// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPOo4aFJF6CnrOdV6dKXNh5_ByRGu8S8k",
  authDomain: "m51-react-auth-b9a9b.firebaseapp.com",
  projectId: "m51-react-auth-b9a9b",
  storageBucket: "m51-react-auth-b9a9b.appspot.com",
  messagingSenderId: "515318492338",
  appId: "1:515318492338:web:e307dd00717207d0e82dab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
export default auth;
