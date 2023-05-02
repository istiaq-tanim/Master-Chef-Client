import React, { createContext, useState } from 'react';

export const UserContext=createContext(null);
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { useEffect } from 'react';

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser]=useState(null);

    const goggleProvider=new GoogleAuthProvider();
    const gitProvider=new GithubAuthProvider();

    const createUser = (email,password) =>
    {
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email,password)=>
    {
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log("Current user",currentUser)
        })

        return ()=>
        {
           return unSubscribe();
        }
    },[])
    const logOut = ()=>
    {
          return signOut(auth)
    }

    const goggleLogin = () =>
    {
          return signInWithPopup(auth,goggleProvider)
    }

    const gitHubLogin = () =>
    {
        return signInWithPopup(auth,gitProvider)
    }
    const authInfo={

        createUser,
        login,
        logOut,
        user,
        goggleLogin,
        gitHubLogin
    }
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;