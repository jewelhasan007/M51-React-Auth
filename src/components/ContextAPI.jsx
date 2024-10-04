import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";


export const nameContext = createContext(null);

const ContextAPI = ({children}) => {
  const [user, setUser] = useState(null)

  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const logUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // signOut
  const logOut = () =>{
    return signOut(auth);
  }

  // observe auth state change
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      console.log('the user is ', currentUser)
    });
    return ()=>{
      unsubscribe();
    }
  },[])

  const AuthInfo = { user, 
    createUser,
    logUser,
    logOut
     }

    return (
      
          <nameContext.Provider value={AuthInfo}>

        {children}
          </nameContext.Provider>
      
    );
};

export default ContextAPI;