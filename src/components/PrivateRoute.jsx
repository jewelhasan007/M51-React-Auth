import React, { useContext } from 'react';
import {nameContext} from './ContextAPI';
import { Navigate, NavLink } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(nameContext)
    if(loading){
        return <span className="loading loading-spinner loading-md"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to="/"></Navigate>    ;
};

export default PrivateRoute;