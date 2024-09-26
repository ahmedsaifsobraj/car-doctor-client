import { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('current user',currentUser)
            setLoading(false)
        });
        return ()=>{
            return unsubscribe;
        }
    },[])

    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }

    const userInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
