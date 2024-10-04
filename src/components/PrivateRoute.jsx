import React, { useContext } from 'react';
import {nameContext} from './ContextAPI';

const PrivateRoute = ({children}) => {
    const {user} = useContext(nameContext)
    if(user){
        return children;
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;