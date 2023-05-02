import React, { useContext } from 'react';
import { UserContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(UserContext);
    const location=useLocation();
    console.log(location)
    if(loading)
    {
        return <progress className="progress w-56"></progress>;
    }

    if(user)
    {
        return children;
    }
    
    return <Navigate to="/login" state={{ from: location }}></Navigate>
};

export default PrivateRoute;