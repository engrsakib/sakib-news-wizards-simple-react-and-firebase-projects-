import React, { useContext } from 'react';
import { authContex } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(authContex);
    if(user && user.email){
        return children;
    }
    return <Navigate to={`/auth/logIn`}></Navigate>
};

export default PrivateRoutes;