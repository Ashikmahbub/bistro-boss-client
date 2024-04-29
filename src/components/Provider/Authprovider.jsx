import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {app} from '../../Firebase/FIrebase';

 
export const AuthContext = createContext(null);
const auth = getAuth(app);
const Authprovider = ({children}) => {
 
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);


    }
    const userSignIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(email,password);

    }
    const userSignOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('current User',currentUser);
            setLoading(false);
        })
        return () =>{
            return unsubscribe();

        }
        
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        userSignIn,
        userSignOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default Authprovider;