import { createContext } from "react";

export const nameContext = createContext(null);

const ContextAPI = ({children}) => {

  const AuthInfo = {
    name: "context man",
    age: 24

  }

    return (
      
          <nameContext.Provider value={AuthInfo}>

        {children}
          </nameContext.Provider>
      
    );
};

export default ContextAPI;