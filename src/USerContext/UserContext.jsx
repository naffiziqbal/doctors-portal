import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase.init";

export const AuthProvider = createContext();
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoogle = () => {
    setLoading(true)
    return signInWithRedirect(auth, provider);
  };

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = ()=> {
    setLoading(true)
    return signOut(auth)
  }
  const updateUserInfo =(profile)=>{
    return updateProfile(auth.currentUser,profile)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authinfo = {
    user,
    loginUser,
    loginWithGoogle,
    createUser,
    loading,
    setLoading,
    logOutUser,
    updateUserInfo
  };
  return (
    <AuthProvider.Provider value={authinfo}>{children}</AuthProvider.Provider>
  );
};

export default UserContext;
