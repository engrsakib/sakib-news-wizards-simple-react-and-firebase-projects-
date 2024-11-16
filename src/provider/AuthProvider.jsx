import React, { useState } from 'react';
import { createContext } from "react";
const authContex = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);

    const authInfo ={
        user, setUser
    }
    return (
        <authContex.Provider value={authInfo}>
            {
                children
            }
        </authContex.Provider>
    );
};

export default AuthProvider;