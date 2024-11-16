import React, { useState } from 'react';
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const authContex = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({name: "na sakib"});

    const createNewUser = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }
    const authInfo = {
      user,
      setUser,
      createNewUser,
    };
    return (
        <authContex.Provider value={authInfo}>
            {
                children
            }
        </authContex.Provider>
    );
};

export default AuthProvider;