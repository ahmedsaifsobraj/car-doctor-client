import { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from 'axios';
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
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail}
            if(currentUser){
                axios.post('https://car-doctor-server-pearl-five.vercel.app/jwt',loggedUser,{withCredentials:true})
                .then(res =>{
                    console.log(res.data)
                })
            }
            else{
                axios.post('https://car-doctor-server-pearl-five.vercel.app/logout',loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log('token response',res.data)
                })
            }
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
