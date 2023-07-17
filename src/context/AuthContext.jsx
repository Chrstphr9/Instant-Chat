import { createContext, useState, useContext, useEffect }  from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../firebase";

// create context
const AuthContext = createContext();

// Provider Context
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState('null');

// signin with google
const signinWithGoogle = ()=> {
    const provider = new GoogleAuthProvider(); 
    signInWithRedirect(auth, provider)
}
// sign out
const logout = () => signOut(auth)


    const value = {
        currentUser,
        setCurrentUser,
        signinWithGoogle,
        logout
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