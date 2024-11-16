import React, { useContext } from 'react';
import { authContex } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Layouts/Components/Loading';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(authContex);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(user && user.email){
        return children;
    }
    return <Navigate state={location.pathname} to={`/auth/logIn`}></Navigate>
};

export default PrivateRoutes;