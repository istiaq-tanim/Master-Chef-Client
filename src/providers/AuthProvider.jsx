import React, { createContext, useState } from 'react';

export const UserContext=createContext(null);
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { useEffect } from 'react';

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser]=useState(null);
    const [loading,useLoading]=useState(true);

    const goggleProvider=new GoogleAuthProvider();
    const gitProvider=new GithubAuthProvider();

    const createUser = (email,password) =>
    {
       useLoading(true)
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email,password)=>
    {   
        useLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log("Current user",currentUser)
            useLoading(false);
        })

        return ()=>
        {
           return unSubscribe();
        }
    },[])
    const logOut = ()=>
    {     
          useLoading(true)
          return signOut(auth)
    }

    const goggleLogin = () =>
    {
          useLoading(true)
          return signInWithPopup(auth,goggleProvider)
    }

    const gitHubLogin = () =>
    {   
        useLoading(true)
        return signInWithPopup(auth,gitProvider)
    }
    const authInfo={

        createUser,
        login,
        logOut,
        user,
        goggleLogin,
        gitHubLogin,
        loading
    }
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;