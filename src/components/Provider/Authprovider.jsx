import { createContext, useState } from "react";

import { getAuth } from "firebase/auth";
import {app} from '../../Firebase/FIrebase';

 
export const AuthContext = createContext(null);
const auth = getAuth(app);
const Authprovider = ({children}) => {
 
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);

    const authInfo = {
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default Authprovider;