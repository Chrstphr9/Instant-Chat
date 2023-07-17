import { createContext, useState, useContext, useEffect }  from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

// create context
const AuthContext = createContext();

// Provider Context
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState('null');

const signinWithGoogle = ()=> {
    const provider = new GoogleAuthProvider(); 
    signInWithRedirect(auth, provider)
}

    const value = {
        currentUser,
        setCurrentUser,
        signinWithGoogle
    }

    //set currentUser 
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return unsubcribe;
    }, []);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}