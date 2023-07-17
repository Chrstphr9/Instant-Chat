import { createContext, useState, useContext }  from "react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

// create context
const AuthContext = createContext();

// Provider Context
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState('null');

const signinWithgoogle = ()=> {
    const provider = new GoogleAuthProvider(); 
    signInWithRedirect(auth, provider)
    
    
}

    const value = {
        currentUser,
        setCurrentUser,
        signinWithgoogle
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}