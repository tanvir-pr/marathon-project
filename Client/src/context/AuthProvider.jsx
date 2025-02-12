import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }


    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    };
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }
    const updatePassword = () => {
        return signInWithEmailAndPassword(auth);
    }

    const signWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile,
        signWithGoogle,
        updatePassword,
    };

    useEffect(() => {
        const unSubscrive = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('state capture', currentUser?.email);
            if (currentUser?.email) {
                const user = { email: currentUser.email }
                axios.post('https://marathon-tau.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        setLoading(false);
                    })

            }
            else {
                axios.post('https://marathon-tau.vercel.app/logout', {}, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log('logout', res.data);
                        setLoading(false);
                    })

            }


        });
        return () => {
            unSubscrive()
        };
    })

    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;