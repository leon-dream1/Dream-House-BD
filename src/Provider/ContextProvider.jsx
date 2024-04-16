import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
// import { toast } from "react-toastify";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  const createUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateInfo = (displayName, photoURL) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  const signIn = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    // setLoading(true);
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    // setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = () => {
    // setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const ContextValue = {
    createUser,
    updateInfo,
    signIn,
    user,
    setUser,
    logOut,
    googleLogin,
    facebookLogin,
    loading,
    setLoading,
  };
  console.log(user);

  return (
    <AuthContext.Provider value={ContextValue}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
