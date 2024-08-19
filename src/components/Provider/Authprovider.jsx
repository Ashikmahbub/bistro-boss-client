import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,updateProfile } from "firebase/auth";
import {app} from '../../Firebase/FIrebase';

 
export const AuthContext = createContext(null);
const auth = getAuth(app);
const Authprovider = ({children}) => {
 
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState('');
    const createUser = async(email,password) =>{
        setError('');
        setLoading(true);
        try
        {
            await createUserWithEmailAndPassword(auth,email,password);
        }
        catch
        
            (error){
                setLoading(false);
                if(error.code === 'auth/email-already-in-use')
                {
                 setError('The email already in use.Please try different email');

                }
                else
                {
                
                setError('An error occured.Please try again');
                }
            }
            return { success: false, error: error.message };

        }
       

    
    const userSignIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);

    }
    const userSignOut = ()=>{
        setLoading(true);
        
        return signOut(auth);
    }
    const updateUserProfile =(name,photo)=>{
       return updateProfile (auth.currentUser, {displayName:name, photoURL:photo});
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
        userSignOut,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default Authprovider;