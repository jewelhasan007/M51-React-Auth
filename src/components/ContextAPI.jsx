import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";


export const nameContext = createContext(null);

const ContextAPI = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const logUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // signOut
  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }

  // observe auth state change
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      // loading false for PrivateRoute page loading
      setLoading(false)
      console.log('the user is ', currentUser)
    });
    return ()=>{
      unsubscribe();
    }
  },[])

  const AuthInfo = { user, 
    createUser,
    logUser,
    logOut,
    loading
     }

    return (
      
          <nameContext.Provider value={AuthInfo}>

        {children}
          </nameContext.Provider>
      
    );
};

export default ContextAPI;