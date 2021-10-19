import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword  } from "firebase/auth";

import initializeAthentication from '../Login/Firebase/firebase.init';

initializeAthentication();


const useFirebase = () => {

    const [user,setUser] = useState({});
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // login 
    const processLogin = (e) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // name 
    const handleNameChange = e => {

        setName(e.target.value)
    }
    // email feild 
    const handleEmailChnage = e => {

        setEmail(e.target.value)

    }
    // password feild 
    const handlepasswordChnage = e => {
        setPassword(e.target.value);

    }
    //  new register handle 
    const registerNewUser = (e) => {
        e.preventDefault();
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // set user name 
    const setUserName = () => {
        return updateProfile(auth.currentUser, { displayName: name })
    }

//  google login 
    const loginWithGoogle = ()=>{
        setIsLoading(true);
        return signInWithPopup(auth, GoogleProvider)    
    }
    // logout 
    const logout = ()=>{
        setIsLoading(true);
        signOut(auth)
        .then(() => {})
        .finally(() => setIsLoading(false));
    }

    useEffect(()=>{
        const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);   
            } else {
                setUser({});
            }
            setIsLoading(false)
          });
          return ()=> unsubscribed;

    },[])

    return {
        user,
        loginWithGoogle,
        logout,
        isLoading,
        setIsLoading,
        setUser,
        handleNameChange,
        handleEmailChnage,
        handlepasswordChnage,
        registerNewUser,
        setUserName,
        processLogin
    }
};

export default useFirebase;