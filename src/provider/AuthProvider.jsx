import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { Navigate } from "react-router-dom";

export const authContex = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
//   console.log(user);
  const createNewUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth)
      .then(() => {
        // Sign-out successful.
        // setLoading(true);
        setUser(null);
        <Navigate to={`/auth/LogIn`}></Navigate>
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const logIn = (email, password) =>{
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    logIn,
    loading
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setUser(user);
        setLoading(false);
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return <authContex.Provider value={authInfo}>{children}</authContex.Provider>;
};

export default AuthProvider;
