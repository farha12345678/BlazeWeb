import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider } from "firebase/auth";
import app from "../Firebase/Firebase.config";




export const AuthContext = createContext(null)

const auth = getAuth(app)

// / google provider
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader , setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update profile
    const updateUserProfile = (displayName , photoURL) =>{
        
       return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
          })
    }

    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    // google login
    const googleLogIn = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
    }
    // github login
    // const githubLogIn = () => {
    //     setLoader(true)
    //     return signInWithPopup(auth, githubProvider);
    // }
    // facebook login
    // const facebookLogIn = () => {
    //     setLoader(true)
    //     return signInWithPopup(auth , facebookProvider)
    // }


    const logOut = () => {
        setUser(null)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setLoader(false)
            setUser(currentUser)
        })
        return () => { unsubscribe() };
    }, [])




    const authInfo =
    {
        user,
        createUser,
        signInUser,
        googleLogIn,
       
        updateUserProfile,
        loader,
        
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;