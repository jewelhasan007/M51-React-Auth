import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
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

  useEffect(()=>{
    const unsbuscriber = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      console.log('the user is ', currentUser)
    });
    return ()=>{
      unsbuscriber()
    }
  },[])

  const AuthInfo = { user, 
    createUser,
    logUser
     }

    return (
      
          <nameContext.Provider value={AuthInfo}>

        {children}
          </nameContext.Provider>
      
    );
};

export default ContextAPI;